package server;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;

public class Student implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String Name;
	private int StudentNo;
	private HashMap<Integer,Integer> CompletedCourse;
	private List<Integer> CurrentCourse;
	private List<Integer> dropCourses;
	private boolean FullTime;
	static Logger logger = Trace.getInstance().getLogger(Student.class);
	
	public Student(String sname, int sno, boolean fulltime)
	{
		Name = sname;
		StudentNo = sno;
		CompletedCourse = new HashMap<>();
		CurrentCourse = new ArrayList<Integer>();
		dropCourses = new ArrayList<Integer>();
		FullTime = fulltime;
	}
	
	public boolean isFullTime()
	{
		return FullTime;
	}

	public String getName() {
		return Name;
	}

	public int getStudentNo() {
		return StudentNo;
	}

	public boolean RegisterCourses(int i) {
			logger.info("Student Register Course methode invoked");
			if(!CurrentCourse.contains(i))
			{
				CurrentCourse.add(i);
				return true;
			}
			else
				return false;		//already registered.
	}

	public List<Integer> getCurrentCourses() {
		return CurrentCourse;
	}

	public HashMap<Integer, Integer> getCompletedCourses() {
		return CompletedCourse;
	}

	public boolean DeRegisterCourses(int i) {
		logger.info("Student DeRegister Course methode invoked");
		if(CurrentCourse.contains(i))
		{
			CurrentCourse.remove((Object)i);
			return true;
		}
		else
			return false;		//Not registered
	}

	public boolean DropCourses(int i) {
		logger.info("Student Drop Course methode invoked");
		if(DeRegisterCourses(i))
		{
			dropCourses.add(i);
			return true;
		}
		return false;
	}

	public List<Integer> getDropCourses() {
		return dropCourses;
	}

	public boolean completeCourse(int i,int marks) {
		logger.info("Student complete Course methode invoked");	
		if(CurrentCourse.contains(i))
		{
			CurrentCourse.remove((Object)i);
			CompletedCourse.put(i, marks);
			logger.info("Course completed method successful");
			return true;
		}
		logger.info("Course completed method failed");
		return false;
	}
	
	
}
