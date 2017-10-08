package server.tests;

import static org.junit.Assert.*;
import org.junit.Test;
import server.University;

public class UniversityTests {
	University u = new University();
	@Test
	public void CreateCoursetest() {
		assertEquals("Successfully Created", u.CreateCourse("OOSD",100000,26));
	}

	@Test
	public void CreateCoursetest2() {
		u.CreateCourse("OOSD",100000,26);
		assertEquals("Course Already Exist", u.CreateCourse("OOSD",100000,26));
	}
	
	@Test
	public void CreateStudentest() {
		assertEquals(true, u.CreateStudent("Mudit Aggarwal",true)>0);
	}
	
	@Test
	public void RegisterStudenttest() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		assertEquals("Successful", u.RegisterStudent(0,s));	
		
	}

	
	@Test
	public void RegisterStudenttest2() {
		u.CreateCourse("OOSD",100000,26);
		int s[] = new int[30];
		for(int j=0;j<30;j++)
		s[j]=u.CreateStudent("Mudit Aggarwal",true);
			for(int j=0;j<26;j++)
					assertEquals("Successful", u.RegisterStudent(0,s[j]));
				assertEquals("Course is Full", u.RegisterStudent(0,s[27]));
		}
		
	@Test
	public void RegisterStudenttest3() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);	
		assertEquals("Already Registered", u.RegisterStudent(0,s));
	}	
	
	@Test
	public void DeRegisterStudenttest() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);	
		assertEquals("Successfully Deregistered", u.DeregisterStudent(s,100000));
	}
	
	@Test
	public void DeRegisterStudenttest2() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);	
		assertEquals("Course does not exist", u.DeregisterStudent(s,100001));
	}
	
	@Test
	public void DeRegisterStudenttest3() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		//u.RegisterStudent(0,s);	
		assertEquals("Student Not Registered", u.DeregisterStudent(s,100000));
	}
	
	
}
