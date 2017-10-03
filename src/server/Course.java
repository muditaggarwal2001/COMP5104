package server;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Course {
	private String title;
	private int code;
	private boolean HasFinal ;
	private int CapSize;
	private boolean pre;
	private List<Integer> prerequisite;
	private int NAssignment; 	//No. of assignment
	private int NMidterm;	//No. of mid terms
	private int WeightOfAssignment[];
	private int WeightOfmterm[];
	private int Wfinal;
	private List<Assignmidmarks> s;	//Contains Student and it's marks in assignment, mid term and final.
	
	public Course(String name, int ccode, int size, int mid, int ass, boolean p )
	{
		pre = p;
		if(p==true)
			prerequisite = new ArrayList<Integer>();
		s = new ArrayList<Assignmidmarks>();
		HasFinal = true;
		title = name;
		code = ccode;
		CapSize = size;
		NMidterm = mid;
		NAssignment = ass;
		WeightOfAssignment = new int[NAssignment];
		WeightOfmterm = new int[NMidterm];
		Random rand = new Random();
		int sum=0;
		for(int i=0;i<NAssignment;i++) {
			WeightOfAssignment[i]= rand.nextInt(6)+5;	//Weight of assignment between 5-10 	
			sum+=WeightOfAssignment[i];
		}
		for(int i=0;i<NMidterm;i++)
		{
			WeightOfmterm[i]= rand.nextInt(11)+10;	//Weight of mid term between 10-20
			sum+=WeightOfmterm[i];
		}
		
		Wfinal = 100 - sum;
	}

	public String cTitle() {
		return title;
	}

	public int CourseCode() {
		return code;
	}

	public boolean HasFinalExam() {
		return HasFinal;
	}

	public int ClassSize() {
		return CapSize;
	}

	public boolean HasProject() {
		return false;
	}

	public int NumberMidTerm() {
		return NMidterm;
	}

	public int NoAssignment() {
		return NAssignment;
	}
	
	public int Midweight(int i) {
		if(i<NMidterm)
			return WeightOfmterm[i];
		else
			return 0;
	}
	
	public int AssignmentWeight(int i) {
		if(i<NAssignment)
			return WeightOfAssignment[i];
		else 
			return 0;
	}

	public int WeightOfFinal() {
		return Wfinal;
	}
	
	public boolean isFull()
	{
		if(s.size()>=CapSize)
			return true;
		return false;
	}
	
	public boolean hasPrequisites()
	{
		return pre;
	}
	
	public List<Integer> Coursepreq(){
		return prerequisite;
	}

	public void addPrerequisite(int nextInt) {
		prerequisite.add(nextInt);
	}
	
	
}
