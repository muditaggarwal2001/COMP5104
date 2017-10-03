package server.tests;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Before;
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
	
}
