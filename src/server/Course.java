package server;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.apache.log4j.Logger;

public class Course implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static Logger logger = Trace.getInstance().getLogger(Course.class);
	private String title;
	private int code;
	protected boolean HasFinal ;
	private int CapSize;
	private boolean pre;
	private List<Integer> prerequisite;
	private int NAssignment; 	//No. of assignment
	private int NMidterm;	//No. of mid terms
	private int WeightOfAssignment[];
	private int WeightOfmterm[];
	protected int Wfinal;
	protected HashMap<Integer,Assignmidmarks> s;	//Contains Student and it's marks in assignment, mid term and final.
	
	public Course(String name, int ccode, int size, int mid, int ass, boolean p )
	{
		logger.info("Course object created");		
		pre = p;
		if(p==true)
			prerequisite = new ArrayList<Integer>();
		s = new HashMap<Integer,Assignmidmarks>();
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
	{	logger.info("Checking Course is full or not");
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

	public boolean AddStudent(int i) {
		logger.info("Course class add student method invoked");
		if(!s.containsKey(i))
		{
			s.put(i, new Assignmidmarks(NAssignment, NMidterm, HasFinal));	//If adding was successful return true 
			return true;
		}
		else
			return false;		//Already exists return false 
	
	}

	public boolean RemoveStudent(int i) {
		logger.info("Course class Remove student method invoked");
		if(s.containsKey(i))			
		{
			s.remove(i);
			return true;		//if removed return true 
		}
		else
			return false;		//student not in course return false
	}

	public void setAssignmentMarks(int SNo, int Asno, int Marks) {
			if(Marks>WeightOfAssignment[Asno])
				s.get(SNo).setAssignmentMarks(Asno, WeightOfAssignment[Asno]);	//Calling set function of Assignmidmark class
			else if(Marks<0)
				s.get(SNo).setAssignmentMarks(Asno, 0);
			else
				s.get(SNo).setAssignmentMarks(Asno, Marks);
	}

	public void setMidTermMarks(int SNo, int Mno, int Marks) {
		if(Marks>WeightOfmterm[Mno])
			s.get(SNo).setMidTermMarks(Mno, WeightOfmterm[Mno]);	//Calling set function of Assignmidmark class
		else if(Marks<0)
			s.get(SNo).setMidTermMarks(Mno, 0);
		else
			s.get(SNo).setMidTermMarks(Mno, Marks);
		
	}

	public void setFinalorProject(int Sno, int Marks) {
		Random rand = new Random();
		Marks = rand.nextInt(Wfinal)+1;
		if(HasFinal==true)
		{
			if(Marks>Wfinal)
				s.get(Sno).setFinalMarks(Wfinal);
			else if(Marks<0)
				s.get(Sno).setFinalMarks(0);
			else
				s.get(Sno).setFinalMarks(Marks);
		}
		
	}

	public int TotalStudentMarks(int key) {
		int sum =0;
		Assignmidmarks x = s.get(key);
		for(int i=0;i<NAssignment;i++)
			sum+=x.getAssignmentMarks(i);
		for(int i=0;i<NMidterm;i++)
			sum+=x.getMidMarks(i);
		if(HasFinal==true)
			sum+=x.getFinalMarks();
		else
			sum+=x.getProjectMarks();
		return sum;
	}
	
	public Set<Integer> getStudents()
	{
		logger.info("Getting student registered in course");
		Set<Integer> x=s.keySet();
		return x;
	}
	
	public void setMarks()
	{
		Random rand = new Random();
		Set<Integer> x =s.keySet();
		for(int i : x)
		{
			for(int ano=0;ano<NAssignment;ano++)
			{
				setAssignmentMarks(i, ano, rand.nextInt(WeightOfAssignment[ano])+1);
			}
			for(int mno=0;mno<NMidterm;mno++)
			{
				setMidTermMarks(i, mno, rand.nextInt(WeightOfmterm[mno])+1);
			}
			setFinalorProject(i, 0);
		}
		
	}
	
}
