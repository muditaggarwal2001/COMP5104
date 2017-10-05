package server.tests;

import static org.junit.Assert.*;

import org.junit.Test;

import server.Assignmidmarks;

public class MarksofStudent {
	Assignmidmarks x = new Assignmidmarks(2, 2, true);
	
	
	
	@Test
	public void getAssignmenttest() {
		x.setAssignmentMarks(0, 10);
		assertEquals(10, x.getAssignmentMarks(0));
	}
	
	@Test
	public void getMidTermtest() {
		x.setMidTermMarks(0, 10);
		assertEquals(10, x.getMidMarks(0));
	}
	
	@Test
	public void getFinaltest() {
		x.setFinalMarks(20);
		assertEquals(20, x.getFinalMarks());
	}
	
	@Test
	public void getProjecttest() {
		x.setProjectMarks(30);
		assertEquals(30, x.getProjectMarks());
	}
}
