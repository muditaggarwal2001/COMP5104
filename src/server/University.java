package server;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.Set;

public class University implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private	List<Course> courses;	
	private	HashMap<Integer,Student> students;
	private boolean ClerkAllowed;
	private boolean StudentAllowed;
	private boolean Dropdeadline;
	private boolean Termend;
	int counter;
	public University() {
		courses = new ArrayList<Course>();
		students = new HashMap<Integer,Student>();
		counter = 0;
		ClerkAllowed = true;
		StudentAllowed = false;
		Dropdeadline = false;
		Termend =false;
	}

	public String CreateCourse(String name, int code, int capsize) {
		if(!ClerkAllowed)
		{
			return "Clerk's time to Create Course and student is over";
		}
		Course x;
		Random rand = new Random();
		int mid= rand.nextInt(3);
		int ass = rand.nextInt(6);
		Course c = new Course(name, code, capsize, mid, ass, false);
		Iterator<Course> i = courses.iterator();
		while(i.hasNext())
		{
			x= i.next();
			if(code==x.CourseCode() || c.cTitle().equalsIgnoreCase(x.cTitle()))
				return "Course Already Exist";
		}
		courses.add(c);
		return "Successfully Created";
	}

	public boolean checkcode(int code)
	{
		if(code>=100000 && code<=999999)
		{	
				return true;
		}
		else
			return false;
	}

	public int CreateStudent(String name, boolean fullTime) {
		if(!ClerkAllowed)
			return -1;
		counter++;
		Student s = new Student(name, counter, fullTime);
		students.put(counter,s);
		return counter;
	}

	public List<Course> getCourses() {
		return courses;
	}

	public Course getCourse(int index) {
		int n = courses.size();
		if(index>=0&&index<n)
			return courses.get(index);
		else
			return null;
	}
	
	public String RegisterStudent(int index, int st) {
		if(index>=0&&index<courses.size())
		{	if(st<0)
			 return "Student doesn't exist";
			if(!StudentAllowed)
				return "Student ia not allowed";
			if(Dropdeadline)
				return "Registration deadline passed";
			Course course = courses.get(index);
			if(course.isFull())
				return "Course is Full";
			Student s = students.get(st);
			int n = s.getCurrentCourses().size();
			if((s.isFullTime()&&!(n<config.MaxCourseforFT))||(!s.isFullTime()&&!(n<config.MaxCourseforPT)))
				return "Student course limit reached";
			if(s.RegisterCourses(course.CourseCode()))
			{	
				course.AddStudent(st);
				return  "Successful";
			}
			return "Already Registered";
		}
		return "Course index out of bounds";
	}

	public String DeregisterStudent(int sno, int ccode) {
		if(!StudentAllowed)
			return "Student ia not allowed";
		if(Dropdeadline)
			return "Deregister deadline has passed";
		if(sno<0)
			 return "Student doesn't exist";
			
		Course c=null;
		Iterator<Course> i = courses.iterator();
		while(i.hasNext())
		{
			c = i.next();
			if(c.CourseCode()==ccode)
				break;
			c = null;
		}
		if(c==null)
		 return "Course does not exist";
		else
		{	
			 if(students.get(sno).DeRegisterCourses(ccode))
			{
				c.RemoveStudent(sno);
				return "Successful";
			}
			return "Student Not Registered";
			
		}
	}

	public String Dropcourse(int sno, int ccode) {
		if(!Dropdeadline)
			return "Drop deadline has not reached";
		if(sno<0)
			 return "Student doesn't exist";
			
		Course c=null;
		Iterator<Course> i = courses.iterator();
		while(i.hasNext())
		{
			c = i.next();
			if(c.CourseCode()==ccode)
				break;
			c = null;
		}
		if(c==null)
		 return "Course does not exist";
		else
		{	
				if(students.get(sno).DropCourses(ccode))
				{
					c.RemoveStudent(sno);
					return "Course Successfully Dropped";
				}
			return "Student Not Registered";
			
		}
	}

	
	public boolean CancelCourse(int index) {
		if(!(index>=0&&index<courses.size()))
			return false;
		Course course = courses.get(index);
		Set<Integer> set= course.getStudents();
		boolean flag=false;
		int sno,code;
		code = course.CourseCode();
		Iterator<Integer> i=set.iterator();
		if(i.hasNext())
			flag = true;
		while(i.hasNext())
		{
			sno = i.next();
			students.get(sno).DeRegisterCourses(code);
			i.remove();
		}
		return flag;
	}

	public boolean DestroyCourse(int index) {
		CancelCourse(index);
		if(!(index>=0&&index<courses.size()))
			return false;
		courses.remove(index);
		return true;
	}

	public Student getStudent(int s) {
		if(students.containsKey(s))
		{
			return students.get(s);
		}
		return null;
	}

	public Set<Integer> getStudents()
	{
		return students.keySet();
	}
	
	public int getStudentno(String name)
	{
		Collection<Student> st=students.values();
		Student x=null;
		for(Student o: st)
		{	x=o;
			if(o.getName().equalsIgnoreCase(name))
				break;
		}
		if(x==null)
			return -1;
		Set<Integer> s=students.keySet();
		for(int i:s)
		{
			if(students.get(i).equals(x))
				return i;
		}
		return -1;
		
	}
	public boolean DeleteStudent(int sno) {
		if(!ClerkAllowed)
			return false;
		if(students.containsKey(sno))
		{
			Iterator<Course> i = courses.iterator();
			while(i.hasNext())
			{
				i.next().RemoveStudent(sno);
			}
			students.remove(sno);
			return true;
		}
		return false;
	}
	
	public String getStudentCourses(int i)
	{
		String output="";
		Student s = students.get(i);
		List<Integer> scourses= s.getCurrentCourses();
		if(scourses.isEmpty())
		{
			return "Student has no Registered Courses";
		}
		for(int x :scourses)
		{
			output+=x+"\n";
		}
		return output;
	}

	public boolean getClerkAllowed() {
		return ClerkAllowed;
	}

	public void setClerkAllowed(boolean b) {
		ClerkAllowed = b;
	}

	public boolean getStudentAllowed() {
		return StudentAllowed;
	}

	public void setStudentAllowed(boolean b) {
		StudentAllowed=b;
	}

	public boolean getDropDeadline() {
		return Dropdeadline;
	}

	public void setDropDeadline(boolean b) {
		Dropdeadline = b;
	}

	public boolean getTermEnd() {
		return Termend;
	}

	public void setTermEnd(boolean b) {
		Termend = b;
	}

}
