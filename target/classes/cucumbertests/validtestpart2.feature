Feature: valid paths for part-2

  #This Scenario is the valid path for assigning marks to students and sequence like S4 as mentioned in Part-2 by itself
  Scenario: Student get marks
    Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	    And after "Start Registration" has occurred
	    And before "End registration" event occurs
	    And student "Mudit" register in course 100000
	    And after "End registration" has occurred
	    And after "End De-registration" has occurred
	    When after "Term End" has occurred
	    Then "Mudit" got marks for registered course 100000
  
  #independence of list checking
  Scenario: independence of List courses offered this term to List current students
  		Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	  	And clerk list courses offered in this term
	  	When clerk list students in current term
	  	Then list of courses offered remain the same 
	  	
	Scenario: independence of List current students to List courses offered this term
  		Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	  	And clerk list students in current term
	  	When clerk list courses offered in this term 
	  	Then list of students remain the same 
	 
	Scenario: independence of List courses offered this term to List current courses of students
  		Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	  	And clerk list courses offered in this term
	  	When student "Mudit" list currently enrolled courses
	  	Then list of courses offered remain the same 
	
	Scenario: independence of List current courses of students to List courses offered this term
  		Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	  	And student "Mudit" list currently enrolled courses
	  	When clerk list courses offered in this term
	  	Then student "Mudit"'s currently enrolled courses remain the same 
	 
	Scenario: independence of List current students to List current courses of students
  		Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	  	And clerk list students in current term
	  	When student "Mudit" list currently enrolled courses 
	  	Then list of students remain the same 
	
	 Scenario: independence of List current courses of students to List current students
  		Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	  	And student "Mudit" list currently enrolled courses
	  	When clerk list students in current term
	  	Then student "Mudit"'s currently enrolled courses remain the same 
	