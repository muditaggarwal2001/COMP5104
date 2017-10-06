package server.tests;

import static org.junit.Assert.*;

import java.util.Iterator;
import java.util.List;

import org.junit.Test;

import server.Course;

public class CoarseTests {
	Course c = new Course("OOSD",100000 , 26, 2, 4, true);
	@Test
	public void Titletest() {
		assertEquals("OOSD", c.cTitle());
	}
	
	@Test
	public void Codetest() {
		assertEquals(100000, c.CourseCode());
	}

	@Test
	public void finalexamtest() {
		assertEquals(true, c.HasFinalExam());
	}
	
	@Test
	public void Capsizetest() {
		assertEquals(26, c.ClassSize());
	}
	
	@Test
	public void projectAvailabetest() {
		assertEquals(false, c.HasProject());
	}
	
	@Test
	public void NoMidTermtest() {
		assertEquals(2, c.NumberMidTerm());
	}
	
	@Test
	public void NoAssignmentTest() {
		assertEquals(4, c.NoAssignment());
	}
	
	@Test
	public void AssignmentWeightTest() {
		assertEquals(true, c.AssignmentWeight(2)>0);
	}
	
	@Test
	public void AssignmentWeightTest2() {
		assertEquals(0, c.AssignmentWeight(5));
	}
	
	@Test
	public void TotalWeightTest() {
		int x=c.NoAssignment(),y=c.NumberMidTerm(),sum=0;
		for(int i=0;i<x;i++)
			sum+=c.AssignmentWeight(i);
		for(int i=0;i<y;i++)
			sum+=c.Midweight(i);
		if(c.HasProject()==false)
		{
			if(c.HasFinalExam()==true)
				sum+= c.WeightOfFinal();
		}
		assertEquals(100, sum);
	}
	
	@Test
	public void PrereuisiteTest() {
		if(c.hasPrequisites())
		{
			c.addPrerequisite(100001);
			c.addPrerequisite(100002);
		}
		List<Integer> x = c.Coursepreq();
		Iterator<Integer> i=x.iterator();
		String list="";
		while(i.hasNext())
		{	list += i.next();
			list += "\n";
		}
		assertEquals("100001\n100002\n", list);
	}
	
	public void AddStudentTest() {
		assertEquals(true, c.AddStudent(101087211));
	}
	@Test
	public void AddStudentTest2() {
		c.AddStudent(101087211);
		assertEquals(false, c.AddStudent(101087211));
		}
	
	@Test
	public void RemoveStudentTest() {
		assertEquals(false, c.RemoveStudent(101087211));
		}
	
	@Test
	public void RemoveStudentTest2() {
		assertEquals(true, c.AddStudent(101087211));
		assertEquals(true, c.RemoveStudent(101087211));
		}
	
	
}
