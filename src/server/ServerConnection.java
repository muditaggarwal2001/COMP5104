package server;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import org.apache.log4j.Logger;

public class ServerConnection extends Thread{
	public static Logger logger = Trace.getInstance().getLogger(server.class);
	University university;
	String actor;
	DataInputStream din;
	DataOutputStream dout;
	Socket socket;
	public ServerConnection(List<University> list, String actor, Socket socket) {
		super(actor+"thread");
		university = list.get(0);
		this.actor = actor;
		this.socket = socket;
	}
	
	public void run()
	{	
		try {
			din = new DataInputStream(socket.getInputStream());
			dout = new DataOutputStream(socket.getOutputStream());
			String c="yes",c1;
			int actionChoice;
		if(actor.equalsIgnoreCase("clerk"))
		{	
			do
			{
				logger.info("Clerk "+socket+" connected to the Server");
				String O="";
				String output="";
				dout.writeUTF("Enter your choice:\n1.Create course\n2.Create Student\n3.Cancel Course\n4.Destroy Course\n5.Delete Student\n6.List Courses offered\n7.List Current Students\nEnter choice number:");
				actionChoice = Integer.parseInt(din.readUTF());
				switch (actionChoice) {
				case 1:	if(!university.getClerkAllowed())
						{		
							O+="Clerk's time to Create Course and student is over\n";
							logger.info(O);
							break;
						}
						logger.info("Clerk is Trying to create course");
						dout.writeUTF("Enter Course name");
						String name = din.readUTF();
						dout.writeUTF("Enter Course code");
						int code = Integer.parseInt(din.readUTF());
						while(!university.checkcode(code))
						{
							dout.writeUTF("Course code is incorrect please enter again");
							code = Integer.parseInt(din.readUTF());
						}
						dout.writeUTF("Enter Class size");
						int csize = Integer.parseInt(din.readUTF());
						while(csize<config.MinCapsize)
						{
							dout.writeUTF("Class size is incorrect please enter again");
							csize = Integer.parseInt(din.readUTF());
						}
						O=university.CreateCourse(name, code, csize)+"\n";
						logger.info(O);
					break;

				case 2:	if(!university.getClerkAllowed())
						{		
							O+="Clerk's time to Create Course and student is over\n";
							logger.info(O);
							break;
						}
						logger.info("Clerk is Trying to create Student");
						dout.writeUTF("Enter Student name");
						name = din.readUTF();
						int x=-1;
						dout.writeUTF("Is Student Full time : true or False");
						String temp = din.readUTF();
						if(temp.equalsIgnoreCase("true"))
							x=university.CreateStudent(name, true);
						else
							x=university.CreateStudent(name, false);
						if(x!=-1)
							O+="Student with Student no "+x+" Successfully Created\n";
						else
							O+="Clerk's time to Create Course and student is over\n";
						logger.info(O);
						break;
						
				case 3:	logger.info("Clerk is Trying to cancel course");
						List<Course> course=university.getCourses();
						Iterator<Course> i = course.iterator();
						
						int index = 0;
						while(i.hasNext())
						{	index++;
							output+=index+i.next().cTitle()+"\n";
						}
						output+="Enter index of your choice\n";
						dout.writeUTF(output);
						int j = Integer.parseInt(din.readUTF());
						while(!(j>=1&&j<=index))
						{
							dout.writeUTF("You have enetered wrong please enter again\n"+output);
							j=Integer.parseInt(din.readUTF());
						}
						if(university.CancelCourse(j-1))
							O+="Course Cancelled Successfully\n";
						else
							O+="Course had No Students\n";
						logger.info(O);
						break;
						
				case 4:	logger.info("Clerk is Trying to Destroy course");
						course=university.getCourses();
						i = course.iterator();
						index = 0;
						while(i.hasNext())
						{	index++;
							output+=index+i.next().cTitle()+"\n";
						}
						output+="Enter index of your choice\n";
						dout.writeUTF(output);
						j = Integer.parseInt(din.readUTF());
						while(!(j>=1&&j<=index))
						{
							dout.writeUTF("You have entered wrong please enter again\n"+output);
							j=Integer.parseInt(din.readUTF());
						}
						university.DestroyCourse(j-1);
						O+="Course Destroyed Successfully\n";
						logger.info(O);
						break;
		
				case 5:	
						Set<Integer> set = university.getStudents();
						Iterator<Integer> iset = set.iterator();
						while(iset.hasNext())
						{
							output+=iset.next()+"\n";
						}
						output+="Enter Student number to be deleted\n";
						dout.writeUTF(output);
						j = Integer.parseInt(din.readUTF());
						logger.info("Clerk is Trying to Delete student " +j);
						if(university.DeleteStudent(j))
							O+="Student Deleted Successfully\n";
						else
							O+="You have entered wrong Student number\n";
						logger.info(O);
						break;
				case 6: logger.info("Clerk is getting courses offered");
						course=university.getCourses();
						i = course.iterator();
						index = 0;
						while(i.hasNext())
						{	index++;
							O+=index+i.next().cTitle()+"\n";
						}
						break;
				case 7: set = university.getStudents();
						iset = set.iterator();
						while(iset.hasNext())
						{
							O+=iset.next()+"\n";
						}
						break;
				default:	O+="You have Entered wrong choice\n";
							logger.info("Clerk Entered wrong choice");	
						break;
				}
				dout.writeUTF(O+"Do you want to continue: yes or no");
				c1 = din.readUTF();
			}while(c.equalsIgnoreCase(c1));
			
		}
		else if(actor.equalsIgnoreCase("student"))
		{
			logger.info("Student "+socket+" connected to the Server");
			do
			{
				
				if(!university.getStudentAllowed())
				{
					dout.writeUTF("Student Registeration are not open right now.\nDo you want to continue: yes or no");
					c1 = din.readUTF();
					continue;
				}
				
				int index=0;
				Student student = null;
				while(student==null)
				{
					dout.writeUTF("Enter student number");
					index =  Integer.parseInt(din.readUTF());
					student = university.getStudent(index);
					if(student == null)
					{
						dout.writeUTF("You have entered wrong student number\nDo you want to enter again: Yes or no");
						if(!("yes".equalsIgnoreCase(din.readUTF())))
							break;
					}	
				}
				if(student == null)
					break;
				
				if(university.getTermEnd())
				{
					String x="Course Marks\n";
					HashMap<Integer, Integer> b=student.getCompletedCourses();
					Set<Integer> set = b.keySet();
					for(int i:set)
					{
						x+=i+"	"+b.get(i)+"\n";
					}
					List<Integer> list =student.getDropCourses();
					for(int i:list)
					{
						x+=i+"	Dropped\n";
					}
					dout.writeUTF("Term has ended.\nYour Transcript: \n"+x+"\nDo you want to continue: yes or no");
					c1 = din.readUTF();
					continue;
				}
				String O="";
				String output="";
				dout.writeUTF("Enter your choice:\n1.Register course\n2.Deregister Course\n3.Registered Courses");
				actionChoice = Integer.parseInt(din.readUTF());
				switch (actionChoice) {
				case 1:	
						logger.info("Student is Trying to Register in Course");
						if(university.getDropDeadline())
						{
							O+="Registeration Deadlines Passed\n";
							break;
						}
						List<Course> course=university.getCourses();
						Iterator<Course> i = course.iterator();
						int ind = 0;
						while(i.hasNext())
						{	ind++;
							output+=ind+i.next().cTitle()+"\n";
						}
						output+="Enter index of your choice\n";
						dout.writeUTF(output);
						int j = Integer.parseInt(din.readUTF());
						while(!(j>=1&&j<=ind))
						{
							dout.writeUTF("You have enetered wrong please enter again\n"+output);
							j=Integer.parseInt(din.readUTF());
						}
						
						O=university.RegisterStudent(j-1, index);
						O+="\n";
						logger.info(O);
						break;

				case 2: logger.info("Student is Trying to Deregister from course");
						List<Integer> list=student.getCurrentCourses();
						if(!list.isEmpty())
						{	Iterator<Integer> iterator = list.iterator();
							while(iterator.hasNext())
							{
								output+=iterator.next()+"\n";
							}
							output+="Enter the Course no you want to Deregister\n";
							dout.writeUTF(output);
							int code = Integer.parseInt(din.readUTF());
							if(university.getDropDeadline())
							{
								dout.writeUTF("Deregister Deadline is passed \n Now course will be Dropped:Do you want to continue Y/n \n");
								if(din.readUTF().equalsIgnoreCase("n"))
									break;
								O+=university.Dropcourse(index, code);
								O+="\n";
								logger.info(O);
								break;
							}
							O+=university.DeregisterStudent(index, code);
							O+="\n";
						}
						else
							O+="Student not registered in any course\n";
						logger.info(O);
						break;
				case 3: logger.info("Student is Checking Current courses");
						list=student.getCurrentCourses();
						if(!list.isEmpty())
						{	
							for(int sc:list)
							{
								O+=sc+"\n";
							}
						}
						else
							O+="Student not registered in any course\n";
						break;
						
				default:	O+="You have Entered wrong choice\n";
							logger.info("(Student) "+O);
							break;
				}
				dout.writeUTF(O+"Do you want to continue: yes or no");
				c1 = (String)din.readUTF();
			}while(c.equalsIgnoreCase(c1));	
		}
		else
			dout.writeUTF("You have entered wrong choice");
			din.close();
			dout.close();
			socket.close();
		}catch (IOException e) {
			e.printStackTrace();
		}
	}

}
