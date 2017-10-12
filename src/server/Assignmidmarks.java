package server;

import java.io.Serializable;

public class Assignmidmarks implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int Assignment[];
	private int midTerm[];
	private int finalExam;
	private int project;
	
	public Assignmidmarks(int NAssignment, int Nmid, boolean hasfinal)
	{
		Assignment = new int[NAssignment];
		midTerm = new int[Nmid];
		if(hasfinal ==true)
			project = 0;
		else
			finalExam=0;
	}

	public int getAssignmentMarks(int i) {
		return Assignment[i];
	}

	public int getMidMarks(int i) {
		return midTerm[i];
	}

	public int getFinalMarks() {
		return finalExam;
	}

	public int getProjectMarks() {
		return project;
	}
	
	public void setAssignmentMarks(int i,int Marks) {
		Assignment[i]=Marks;
	}
	
	public void setMidTermMarks(int i,int Marks) {
		midTerm[i]=Marks;
	}
	
	public void setFinalMarks(int Marks) {
		finalExam=Marks;
	}
	
	public void setProjectMarks(int Marks) {
		project=Marks;
	}
}
