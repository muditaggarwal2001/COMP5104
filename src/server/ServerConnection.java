package server;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class ServerConnection extends Thread{
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
				String O="";
				String output="";
				dout.writeUTF("Enter your choice:\n1.Create course\n2.Create Student\n3.Cancel Course\n4.Destroy Course\n5.Delete Student\nEnter choice number:");
				actionChoice = Integer.parseInt(din.readUTF());
				switch (actionChoice) {
				case 1:	dout.writeUTF("Enter Course name");
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
					break;

				case 2:	dout.writeUTF("Enter Student name");
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
						break;
						
				case 3:	List<Course> course=university.getCourses();
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
						break;
						
				case 4:	course=university.getCourses();
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
						break;
		
				case 5:	Set<Integer> set = university.getStudents();
						Iterator<Integer> iset = set.iterator();
						while(iset.hasNext())
						{
							output+=iset.next()+"\n";
						}
						output+="Enter Student number to be deleted\n";
						dout.writeUTF(output);
						j = Integer.parseInt(din.readUTF());
						if(university.DeleteStudent(j))
							O+="Student Deleted Successfully\n";
						else
							O+="You have entered wrong Student number\n";
						break;
				default:	O+="You have Entered wrong choice\n";
							break;
				}
				dout.writeUTF(O+"Do you want to continue: yes or no");
				c1 = din.readUTF();
			}while(c.equalsIgnoreCase(c1));
			
		}
		else if(actor.equalsIgnoreCase("student"))
		{
			do
			{
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
				
				String O="";
				String output="";
				dout.writeUTF("Enter your choice:\n1.Register course\n2.Deregister Course");
				actionChoice = Integer.parseInt(din.readUTF());
				switch (actionChoice) {
				case 1:	List<Course> course=university.getCourses();
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
						break;

				case 2: List<Integer> list=student.getCurrentCourses();
						Iterator<Integer> iterator = list.iterator();
						while(iterator.hasNext())
						{
							output+=iterator.next()+"\n";
						}
						output+="Enter the Course no you want to Deregister\n";
						dout.writeUTF(output);
						int code = Integer.parseInt(din.readUTF());
						O+=university.DeregisterStudent(index, code);
						O+="\n";
						break;
				default:	O+="You have Entered wrong choice\n";
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
