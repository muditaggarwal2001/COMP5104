package server;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

public class Student implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String Name;
	private int StudentNo;
	private List<Integer> CompletedCourse;
	private List<Integer> CurrentCourse;
	private boolean FullTime;
	static Logger logger = Trace.getInstance().getLogger(Student.class);
	
	public Student(String sname, int sno, boolean fulltime)
	{
		Name = sname;
		StudentNo = sno;
		CompletedCourse = new ArrayList<Integer>();
		CurrentCourse = new ArrayList<Integer>();
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

	public List<Integer> getCompletedCourses() {
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
	
	
}
