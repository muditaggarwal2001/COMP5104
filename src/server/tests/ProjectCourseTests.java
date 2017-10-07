package server.tests;

import static org.junit.Assert.*;
import org.junit.Test;
import server.ProjectCourse;

public class ProjectCourseTests {
	ProjectCourse c = new ProjectCourse("OOSD",100000 , 26, 2, 4, true);
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
		else
			sum+=c.WeightOfProject();
		assertEquals(100, sum);
	}
	
	@Test
	public void TotalStudentMarksTest() {
		c.AddStudent(101087211);
		int n=c.NoAssignment();
		for(int i= 0;i<n;i++)
		{
			c.setAssignmentMarks(101087211,0,20);
		}
		n=c.NumberMidTerm();
		for(int i= 0;i<n;i++)
		{
			c.setMidTermMarks(101087211,0,80);
		}
		
		c.setFinalorProject(101087211,20);
		assertEquals(true, c.TotalStudentMarks(101087211)<=100);
	}

}
