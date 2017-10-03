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

}
