package server;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

public class University {
	private	List<Course> courses;	
	private	HashMap<Integer,Student> students;
	int counter;
	public University() {
		courses = new ArrayList<Course>();
		students = new HashMap<Integer,Student>();
	}

	public String CreateCourse(String name, int code, int capsize) {
		Course x;
		Random rand = new Random();
		int mid= rand.nextInt(3);
		int ass = rand.nextInt(6);
		Course c = new Course(name, code, capsize, mid, ass, false);
		Iterator<Course> i = courses.iterator();
		while(i.hasNext())
		{
			x= i.next();
			if(c.CourseCode()==x.CourseCode() || c.cTitle().equalsIgnoreCase(x.cTitle()))
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
		counter++;
		Student s = new Student(name, counter, fullTime);
		students.put(counter,s);
		return counter;
	}

	public List<Course> getCourses() {
		return courses;
	}

	public Course getCourse(int index) {
		return courses.get(index);
	}
	
	public String RegisterStudent(int index, int st) {
		Course course = courses.get(index);
		if(course.isFull())
			return "Course is Full";
		if(students.get(st).RegisterCourses(course.CourseCode()))
		{	
			course.AddStudent(st);
			return  "Successful";
		}
		return "Already Registered";
	}

	public String DeregisterStudent(int sno, int ccode) {
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
				return "Successfully Deregistered";
			}
			return "Student Not Registered";
			
		}
	}

	
}
