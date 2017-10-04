package server;

import java.util.ArrayList;
import java.util.List;

public class Student {
	private String Name;
	private int StudentNo;
	private List<Integer> CompletedCourse;
	private List<Integer> CurrentCourse;
	private boolean FullTime;
	
	public Student(String sname, int sno)
	{
		Name = sname;
		StudentNo = sno;
		CompletedCourse = new ArrayList<Integer>();
		CurrentCourse = new ArrayList<Integer>();
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

	public void RegisterCourses(int i) {
		CurrentCourse.add(i);
	}

	public List<Integer> getCurrentCourses() {
		return CurrentCourse;
	}

	public List<Integer> getCompletedCourses() {
		return CompletedCourse;
	}
	
	
}
