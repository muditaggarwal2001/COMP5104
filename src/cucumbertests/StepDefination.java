package cucumbertests;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Timer;

import org.apache.log4j.Logger;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.ClerkAllower;
import server.Course;
import server.DCDeadline;
import server.Student;
import server.TermEndEvent;
import server.Trace;
import server.University;



public class StepDefination {
	Logger logger = Trace.getInstance().getLogger(StepDefination.class);
	Timer time = new Timer(true);
	List<University> list = new ArrayList<University>();
	University u = new University();
	boolean bo;
	String out,temp,temp2;
	int x;
	
	@Given("^after \"(.*?)\" has occurred$")
	public void after_has_occurred(String arg1) throws Throwable {
			list.add(u);
		if(arg1.equalsIgnoreCase("setup term"))
		{
			time.schedule(new ClerkAllower(list, true),0);
			//u.setClerkAllowed(true);
			//u.setStudentAllowed(false);		
		}
		else if(arg1.equalsIgnoreCase("Start Registration"))
		{
			time.schedule(new ClerkAllower(list, false), 0);
			//u.setClerkAllowed(false);
			//u.setStudentAllowed(true);
		}
	    else if(arg1.equalsIgnoreCase("End registration")||arg1.equalsIgnoreCase("End De-registration"))
	    {
	    	time.schedule(new DCDeadline(list, true), 0);
	    	//u.setDropDeadline(true);
	    }
	    else 
	    {  time.schedule(new TermEndEvent(list,true), 0);
	    	
	    }
		logger.info("after "+arg1+" has occurred");
		Thread.sleep(2);
		
	  }

	@Given("^before \"(.*?)\" event occurs$")
	public void before_event_occurs(String arg1) throws Throwable {
		list.add(u);
		if(arg1.equalsIgnoreCase("End registration")||arg1.equalsIgnoreCase("End De-registration"))
			time.schedule(new DCDeadline(list, false), 0);
			//u.setDropDeadline(false);		
	    else if(arg1.equalsIgnoreCase("Start registration"))
	    {
	    	time.schedule(new ClerkAllower(list, true), 0);
			//u.setClerkAllowed(true);
			//u.setStudentAllowed(false);		
		}
	    else 
	    	time.schedule(new TermEndEvent(list,false), 0);
		logger.info("before "+arg1+" has occurred");
		Thread.sleep(1);
		
	}

	@When("^clerk removes student \"(.*?)\"$")
	public void remove_student(String arg1) throws Throwable {
		int a = u.getStudentno(arg1);
		bo=u.DeleteStudent(a);   
		logger.info("clerk removes student "+arg1);
	}

	@Then("^(?:student|Course) doesn't exist error message is generated$")
	public void error_message_is_generated() throws Throwable {
		Assert.assertFalse(bo);
		logger.info("Doesn't exist error message is generated condition true");
	}
	
	@When("^clerk removes course (\\d+)$")
	public void clerk_removes_course_at_index(int arg1) throws Throwable {
		List<Course> c = u.getCourses();
		int i=-1;
		for(Course iterator:c)
		{
			i++;
			if(iterator.CourseCode()==arg1)
				break;
		}
		bo=u.DestroyCourse(i);
		logger.info("Clerk removes Course "+arg1);
	}

	
	@When("^clerk Create a course \"(.*?)\" with course code (\\d+)$")
	public void clerk_Create_a_course(String arg,int arg1) throws Throwable {
	    out = u.CreateCourse(arg, arg1, 28);
	    logger.info("Clerk create course "+arg+" with course code"+arg1);
	}

	@Then("^create course \"(.*?)\" with course code (\\d+) genrates error$")
	public void create_course_genrates_error(String arg,int arg1) throws Throwable {
	    Assert.assertFalse(u.CreateCourse(arg, arg1, 28).equalsIgnoreCase("Successfully Created"));
	    logger.info("create course "+arg+" with course code"+arg1+" generate error message");
	}


	@Then("^Late error message is generated$")
	public void late_error_message_is_generated() throws Throwable {
		Assert.assertEquals("Clerk's time to Create Course and student is over", out);
		logger.info("Late error message is generated");
	}
	
	@When("^clerk create Student \"(.*?)\"$")
	public void clerk_create_Student(String arg1){
		x = u.CreateStudent(arg1, true);
		logger.info("Clerk create Student"+arg1);
	}

	@Then("^Clerk is late error message is generated$")
	public void clerk_is_late_error_message_is_generated() throws Throwable {
		Assert.assertEquals(-1,x);
		logger.info("Clerk is late error message is generated");
	}

	@When("^student \"(.*?)\" register in course (\\d+)$")
	public void student_register_in_course(String arg1, int arg2) throws Throwable {
		List<Course> c = u.getCourses();
		int i=-1,y;
		for(Course iterator:c)
		{
			i++;
			if(iterator.CourseCode()==arg2)
				break;
		}
		y = u.getStudentno(arg1);
		out=u.RegisterStudent(i, y);
		if(out.equalsIgnoreCase("Successful"))
			bo=true;
		else
			bo=false;
		logger.info("student "+arg1+" register in course "+arg2);
	}
	
	@When("^student \"(.*?)\" de-register from course (\\d+)$")
	public void student_de_register_from_course(String arg1, int arg2) throws Throwable {
		int y = u.getStudentno(arg1);
		out= u.DeregisterStudent(y, arg2);
		logger.info("student "+arg1+" de-register in course "+arg2);
	}

	@Then("^Student not allowed error message is shown$")
	public void student_not_allowed_error_message_is_shown() throws Throwable {
		Assert.assertNotEquals("Successful", out);
		logger.info("student not allowed error message is generated");
	}
	
	@Then("^Student not registered error message is generated$")
	public void student_not_registered_error_message_is_generated() throws Throwable {
		Assert.assertEquals("Student Not Registered", out);
		logger.info("student not registered error message is generated");
	}
	
	@Then("^Deregister deadline has passed error message is generated$")
	public void deregister_deadline_has_passed_error_message_is_generated() throws Throwable {
		Assert.assertEquals("Deregister deadline has passed", out);
		logger.info(out+" message is generated");
	}
	
	@Then("^Already registered error message is generated$")
	public void already_registered_error_message_is_generated() throws Throwable {
		Assert.assertEquals("Already Registered", out);
		logger.info(out+" message is shown");
	}
	
	@Then("^registration deadline has passed error message is generated$")
	public void registration_deadline_has_passed_error_message_is_generated() throws Throwable {
		Assert.assertEquals("Registration deadline passed", out);
		logger.info(out+" error message is generated");
	}
	
	//Exclusive Valid Tests Steps
	@Then("^course \"(.*?)\" is successfully added$")
	public void course_is_successfully_added(String arg1) throws Throwable {
		Course c = u.getCourse(0);
		Assert.assertEquals(arg1, c.cTitle());
		logger.info("course "+arg1+" is successfully added");
	}

	@Then("^Student \"(.*?)\" is successfully created$")
	public void student_is_successfully_created(String arg1) throws Throwable {
	    Student s = u.getStudent(1);
	    Assert.assertEquals(arg1, s.getName());
	    logger.info("Student "+arg1+" is successfully created");
	}

	@Then("^(?:Course|Student) is Successfully removed$")
	public void course_is_Successfully_removed() throws Throwable {
	    Assert.assertTrue(bo);
	    logger.info("successfully Removed");
	}
	
	@Then("^Student \"(.*?)\" is successfully created again$")
	public void student_is_successfully_created_again(String arg1) throws Throwable {
	    Assert.assertEquals(true, u.getStudentno(arg1)>=0);
	    logger.info("Student "+arg1+" is successfully created again");
	}
	
	@Then("^\"(.*?)\" is registered in course code (\\d+)$")
	public void is_registered_in_course_code(String arg1, int arg2) throws Throwable {
	    Student s = u.getStudent(1);
	    Assert.assertTrue(s.getCurrentCourses().contains(arg2));
	    logger.info(arg1+" is registered in course code "+arg2);
	}

	@Then("^\"(.*?)\" is not registered in course code (\\d+)$")
	public void is_not_registered_in_course_code(String arg1, int arg2) throws Throwable {
		Student s = u.getStudent(1);
	    Assert.assertFalse(s.getCurrentCourses().contains(arg2));
	    logger.info(arg1+" is not registered in course code "+arg2);
	}
	
	@When("^\"(.*?)\" Drops from course (\\d+)$")
	public void drops_from_course(String arg1, int arg2) throws Throwable {
		int y = u.getStudentno(arg1);
	    out = u.Dropcourse(y, arg2);
	    logger.info(arg1+" Drops from course "+arg2);
	}

	@Then("^Course Dropped Successfully message is generated$")
	public void course_Dropped_Successfully_message_is_generated() throws Throwable {
	    Assert.assertTrue(out.equalsIgnoreCase("Course Successfully Dropped"));
	    logger.info("Course Dropped Successfully message is generated");
	}
	
	@Then("^\"(.*?)\"'s registered course (\\d+) is completed$")
	public void s_registered_course_is_completed(String arg1, int arg2) throws Throwable {
		int y = u.getStudentno(arg1);
		Student s = u.getStudent(y);
		Assert.assertTrue(s.getCompletedCourses().containsKey(arg2));
		logger.info(arg1+"'s registered course "+arg2+" is Completed");
	}
	
	//exclusive for part-2
	
	@Then("^\"(.*?)\" got marks for registered course (\\d+)$")
	public void got_marks_for_registered_course(String arg1,int arg2) throws Throwable {
		int y = u.getStudentno(arg1);
		Student s = u.getStudent(y);
		Assert.assertTrue(s.getCompletedCourses().containsKey(arg2));
		logger.info(arg1+"got marks for registered course "+arg2);
	}
	
	@Given("^clerk list courses offered in this term$")
	public void clerk_list_courses_offered_in_this_term() throws Throwable {
		List<Course> c =u.getCourses();
		out="";
		for(Course x: c)
		{
			out+=x.cTitle()+"\n";
		}
		logger.info("clerk list courses offered in this term");
	}

	@When("^clerk list students in current term$")
	public void clerk_list_students_in_current_term() throws Throwable {
	    Set<Integer> s =u.getStudents();
	    temp="";
	    for(int x: s)
	    {
	    	temp+=x+"\n";
	    }
	    logger.info("clerk list students in current term");
	}

	@Then("^list of courses offered remain the same$")
	public void list_of_courses_offered_remain_the_same() throws Throwable {
		List<Course> c =u.getCourses();
		temp="";
		for(Course x: c)
		{
			temp+=x.cTitle()+"\n";
		}
		Assert.assertEquals(out, temp);
		logger.info("list of courses offered remain the same");
	}
	
	@Then("^list of students remain the same$")
	public void list_of_students_remain_the_same() throws Throwable {
		Set<Integer> s =u.getStudents();
	    out="";
	    for(int x: s)
	    {
	    	out+=x+"\n";
	    }
	    Assert.assertEquals(temp,out);
	    logger.info("list of students remain the same");
	}
	
	@When("^student \"(.*?)\" list currently enrolled courses$")
	public void student_list_currently_enrolled_courses(String arg1) throws Throwable {
		int y = u.getStudentno(arg1);
		Student s = u.getStudent(y);
		temp2="";
		List<Integer> i =s.getCurrentCourses();
		for(int j: i)
		{
			temp2+=j+"\n";
		}
		logger.info("Student "+arg1+"lists currently enrolled courses");
	}
	
	@Then("^student \"(.*?)\"'s currently enrolled courses remain the same$")
	public void student_s_currently_enrolled_courses_remain_the_same(String arg1) throws Throwable {
		int y = u.getStudentno(arg1);
		Student s = u.getStudent(y);
		out="";
		List<Integer> i =s.getCurrentCourses();
		for(int j: i)
		{
			out+=j+"\n";
		}
		Assert.assertEquals(temp2, out);
		logger.info("student "+arg1+"'s currently enrolled courses remain the same");
	}
}
