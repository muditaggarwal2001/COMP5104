package server.tests;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.junit.Test;

import server.Student;

public class StudentTests {
	Student s = new Student("Mudit", 101087211,true);
	@Test
	public void Nametest() {
		assertEquals("Mudit", s.getName());
	}
	
	@Test
	public void StudentNotest() {
		assertEquals(101087211, s.getStudentNo());
	}
	
	@Test
	public void CurrentCoursestest() {
		s.RegisterCourses(100000);
		List<Integer> x = s.getCurrentCourses();
		Iterator<Integer> i=x.iterator();
		String list="";
		while(i.hasNext())
		{	list += i.next();
			list += "\n";
		}
		assertEquals("100000\n", list);
	}

	@Test
	public void CompletedCoursestest() {
		HashMap<Integer, Integer> x = s.getCompletedCourses();
		Iterator<Integer> i=x.keySet().iterator();
		String list="";
		while(i.hasNext())
		{	list += i.next();
			list += "\n";
		}
		assertEquals("", list);
	}

	@Test
	public void RegisterCoursetest() {
		assertEquals(true, s.RegisterCourses(100000));
	}
	
	@Test
	public void RegisterCoursetest2() {
		assertEquals(true, s.RegisterCourses(100000));
		assertEquals(false, s.RegisterCourses(100000));
	}
	
	@Test
	public void DeRegisterCoursetest() {
		assertEquals(false, s.DeRegisterCourses(100000));
	}
	
	@Test
	public void DeRegisterCoursetest2() {
		s.RegisterCourses(100000);
		assertEquals(true, s.DeRegisterCourses(100000));
	}
	
	@Test
	public void AddDropCoursestest() {
		assertEquals(false, s.DropCourses(100000));
	}
	
	@Test
	public void AddDropCoursestest2() {
		s.RegisterCourses(100000);
		assertEquals(true, s.DropCourses(100000));
	}
	
	@Test
	public void getDropCoursestest() {
		s.RegisterCourses(100000);
		s.DropCourses(100000);
		assertEquals(1, s.getDropCourses().size());
	}

	@Test
	public void CompletedCoursestest2() {
		s.RegisterCourses(100000);
		assertEquals(true, s.completeCourse(100000,90));
	}
	
	@Test
	public void CompletedCoursestest3() {
		s.RegisterCourses(100000);
		assertEquals(false, s.completeCourse(100001,90));
	}
}
