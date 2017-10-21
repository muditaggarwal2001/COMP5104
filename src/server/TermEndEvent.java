package server;

import java.util.Iterator;
import java.util.List;
import java.util.TimerTask;

public class TermEndEvent extends TimerTask {
	private University u;
	private boolean arrived;
	
	public TermEndEvent(List<University> list , boolean b) {
		u = list.get(0);
		arrived = b;
		server.logger.info("Term Event Set to "+arrived+" initiated");
	}

	@Override
	public void run() {
		u.setTermEnd(arrived);
		server.logger.info("Term Event Set to "+arrived);
		if(arrived)
		{
			server.logger.info("Final result is produced");
			List<Course> courses = u.getCourses();
			for(Course c : courses)
			{
				c.setMarks();
				Iterator<Integer> i=c.getStudents().iterator();
				int st;
				while(i.hasNext())
				{
					st = i.next();
					u.getStudent(st).completeCourse(c.CourseCode(), c.TotalStudentMarks(st));
					i.remove();
				}
			}
		
		}
	}

}
