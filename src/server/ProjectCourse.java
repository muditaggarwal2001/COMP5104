package server;

import java.util.Random;

public class ProjectCourse extends Course {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int ProjectWeight;
	public ProjectCourse(String name, int ccode, int size, int mid, int ass, boolean p) {
		super(name, ccode, size, mid, ass, p);
		HasFinal = false;
		ProjectWeight = Wfinal;
		Wfinal = 0;
	}
	
	public boolean HasFinalExam()
	{
		return false;
		
	}
	public int WeightOfProject()
	{
		return ProjectWeight;
	}
	
	public boolean HasProject()
	{
		return true;
	}
	
	public void setFinalorProject(int Sno, int Marks) {
		Random rand = new Random();
		Marks = rand.nextInt(ProjectWeight)+1;
			if(Marks>ProjectWeight)
				s.get(Sno).setProjectMarks(ProjectWeight);
			else if(Marks<0)
				s.get(Sno).setProjectMarks(0);
			else
				s.get(Sno).setProjectMarks(Marks);
	}
}
