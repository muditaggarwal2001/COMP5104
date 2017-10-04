package server.tests;

import static org.junit.Assert.*;

import java.util.Iterator;
import java.util.List;

import org.junit.Test;

import server.Student;

public class StudentTests {
	Student s = new Student("Mudit", 101087211);
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
		List<Integer> x = s.getCompletedCourses();
		Iterator<Integer> i=x.iterator();
		String list="";
		while(i.hasNext())
		{	list += i.next();
			list += "\n";
		}
		assertEquals("", list);
	}

}
