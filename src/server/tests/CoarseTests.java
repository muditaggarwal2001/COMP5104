package server.tests;

import static org.junit.Assert.*;
import org.junit.Test;

import server.Course;

public class CoarseTests {
	Course c = new Course("OOSD",100000 , 26, 2, 4, 0);
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
}
