package server;

import java.util.ArrayList;
import java.util.List;

public class Student {
	private String Name;
	private int StudentNo;
	private List<Integer> CompletedCourse;
	private List<Integer> CurrentCourse;
	private boolean FullTime;
	
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
		if(CurrentCourse.contains(i))
		{
			CurrentCourse.remove((Object)i);
			return true;
		}
		else
			return false;		//Not registered
	}
	
	
}
