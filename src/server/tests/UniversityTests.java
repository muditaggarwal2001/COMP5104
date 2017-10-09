package server.tests;

import static org.junit.Assert.*;
import org.junit.Test;

import server.Course;
import server.Student;
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
	public void CreateCoursetest3() {
		u.CreateCourse("OOSD",100000,26);
		assertEquals("Course Already Exist", u.CreateCourse("OOSD",100001,26));
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
	public void RegisterStudenttest4() {
		u.CreateCourse("OOSD",100000,26);
		u.CreateCourse("OOS",100001,26);
		u.CreateCourse("OO",100002,26);
		u.CreateCourse("O",100003,26);
		u.CreateCourse("A",100004,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		for(int i=0;i<4;i++)
			u.RegisterStudent(i,s);
		assertEquals("Student course limit reached", u.RegisterStudent(4,s));	
		
	}
	
	@Test
	public void RegisterStudenttest5() {
		u.CreateCourse("OOSD",100000,26);
		u.CreateCourse("OOS",100001,26);
		u.CreateCourse("OO",100002,26);
		int s=u.CreateStudent("Mudit Aggarwal",false);
		for(int i=0;i<2;i++)
			u.RegisterStudent(i,s);
		assertEquals("Student course limit reached", u.RegisterStudent(2,s));	
		
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
	
	@Test
	public void CancelCoursetest() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);	
		assertEquals(true, u.CancelCourse(0));
	}
	
	@Test
	public void CancelCoursetest2() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);
		u.CancelCourse(0);
		Course c = u.getCourse(0);
		assertEquals(0, c.getStudents().size());
	}
	
	@Test
	public void CancelCoursetest3() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		int s1=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);
		u.RegisterStudent(0,s1);
		u.CancelCourse(0);
		Course c = u.getCourse(0);
		assertEquals(0, c.getStudents().size());
	}
	
	@Test
	public void DestroyCoursetest() {
		u.CreateCourse("OOSD",100000,26);
		u.DestroyCourse(0);
		assertEquals(null,u.getCourse(0) );
	}
	
	@Test
	public void DestroyCoursetest2() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);
		u.DestroyCourse(0);
		Student student = u.getStudent(s);
		assertEquals(false, student.getCurrentCourses().contains(100000));
	}
	
	@Test
	public void DeleteStudenttest() {
		int s=u.CreateStudent("Mudit Aggarwal",true);
		assertEquals(true,u.DeleteStudent(s));
	}
	
	@Test
	public void DeleteStudenttest2() {
		u.CreateCourse("OOSD",100000,26);
		int s=u.CreateStudent("Mudit Aggarwal",true);
		u.RegisterStudent(0,s);
		u.DeleteStudent(s);
		assertEquals(false,u.getCourse(0).getStudents().contains(s));
	}
}
