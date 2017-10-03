package server;

public class ProjectCourse extends Course {
	private int ProjectWeight;
	public ProjectCourse(String name, int ccode, int size, int mid, int ass, boolean p) {
		super(name, ccode, size, mid, ass, p);
		ProjectWeight = super.WeightOfFinal();
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
	
}
