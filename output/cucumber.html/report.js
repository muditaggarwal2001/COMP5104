$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumbertests/UseCaseDependencies.feature");
formatter.feature({
  "line": 1,
  "name": "Use Case Dependencies",
  "description": "",
  "id": "use-case-dependencies",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "S4 sequence as of Totem",
  "description": "",
  "id": "use-case-dependencies;s4-sequence-as-of-totem",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clerk removes course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clerk removes student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clerk Create a course \"ML\" with course code 100001",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clerk create Student \"Maddy\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "student \"Maddy\" register in course 100001",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "student \"Maddy\" de-register from course 100001",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "student \"Maddy\" register in course 100001",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "student \"Mudit\" register in course 100001",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "after \"End De-registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "\"Mudit\" Drops from course 100001",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "after \"Term End\" has occurred",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "\"Maddy\"\u0027s registered course 100001 is completed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 247341548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 2434311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 4228046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 1705587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 21
    }
  ],
  "location": "StepDefination.clerk_removes_course_at_index(int)"
});
formatter.result({
  "duration": 1002221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 23
    }
  ],
  "location": "StepDefination.remove_student(String)"
});
formatter.result({
  "duration": 724497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 1313152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 641784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ML",
      "offset": 23
    },
    {
      "val": "100001",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 1351791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maddy",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 600125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3340536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 2308128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 3263860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maddy",
      "offset": 9
    },
    {
      "val": "100001",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1743623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maddy",
      "offset": 9
    },
    {
      "val": "100001",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 1579404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maddy",
      "offset": 9
    },
    {
      "val": "100001",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 2000820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100001",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1296246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3197448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 1476767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End De-registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3252992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100001",
      "offset": 26
    }
  ],
  "location": "StepDefination.drops_from_course(String,int)"
});
formatter.result({
  "duration": 4054769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Term End",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 9059234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maddy",
      "offset": 1
    },
    {
      "val": "100001",
      "offset": 28
    }
  ],
  "location": "StepDefination.s_registered_course_is_completed(String,int)"
});
formatter.result({
  "duration": 3138280,
  "status": "passed"
});
formatter.uri("cucumbertests/invalidtests.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid test feature file",
  "description": "",
  "id": "invalid-test-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Remove non existing student",
  "description": "",
  "id": "invalid-test-feature-file;remove-non-existing-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "clerk removes student \"Mudit\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "student doesn\u0027t exist error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3298878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 4056581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 23
    }
  ],
  "location": "StepDefination.remove_student(String)"
});
formatter.result({
  "duration": 618841,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.error_message_is_generated()"
});
formatter.result({
  "duration": 567522,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Remove non existing course",
  "description": "",
  "id": "invalid-test-feature-file;remove-non-existing-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clerk removes course 2",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Course doesn\u0027t exist error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3001230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1691097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "StepDefination.clerk_removes_course_at_index(int)"
});
formatter.result({
  "duration": 531901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.error_message_is_generated()"
});
formatter.result({
  "duration": 428057,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create Redundant Course",
  "description": "",
  "id": "invalid-test-feature-file;create-redundant-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "create course \"AI\" with course code 1000000 genrates error",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2897989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1641590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 806607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 15
    },
    {
      "val": "1000000",
      "offset": 36
    }
  ],
  "location": "StepDefination.create_course_genrates_error(String,int)"
});
formatter.result({
  "duration": 952714,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "create course late",
  "description": "",
  "id": "invalid-test-feature-file;create-course-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Late error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3232465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 7957999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 552430,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.late_error_message_is_generated()"
});
formatter.result({
  "duration": 478772,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "create Student late",
  "description": "",
  "id": "invalid-test-feature-file;create-student-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clerk is late error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3271105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2727128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 480583,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_is_late_error_message_is_generated()"
});
formatter.result({
  "duration": 425039,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Student takes non-existent course",
  "description": "",
  "id": "invalid-test-feature-file;student-takes-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Course doesn\u0027t exist error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3563319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1862561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 498091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 4020356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 2235677,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.error_message_is_generated()"
});
formatter.result({
  "duration": 513789,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Student Registering in course early",
  "description": "",
  "id": "invalid-test-feature-file;student-registering-in-course-early",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Student not allowed error message is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3185976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1889127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 1052332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 3243333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 553033,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.student_not_allowed_error_message_is_shown()"
});
formatter.result({
  "duration": 413567,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Student De-Registering in course early",
  "description": "",
  "id": "invalid-test-feature-file;student-de-registering-in-course-early",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Student not allowed error message is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 12186647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 2091382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 436509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 796343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 505337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.student_not_allowed_error_message_is_shown()"
});
formatter.result({
  "duration": 397870,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Student De-registers from non-registered course",
  "description": "",
  "id": "invalid-test-feature-file;student-de-registers-from-non-registered-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "Student not registered error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3061605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1846260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 460659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 823512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2776636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 885698,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.student_not_registered_error_message_is_generated()"
});
formatter.result({
  "duration": 686462,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Student De-registers from course late",
  "description": "",
  "id": "invalid-test-feature-file;student-de-registers-from-course-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "after \"End De-registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Deregister deadline has passed error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3038058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1824526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 483602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 873623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3236088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 2857538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1278134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 4075297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End De-registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2778447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 498092,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.deregister_deadline_has_passed_error_message_is_generated()"
});
formatter.result({
  "duration": 401492,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Student redundant registering in course",
  "description": "",
  "id": "invalid-test-feature-file;student-redundant-registering-in-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Already registered error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2972854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1854713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 376739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 840417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2878669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1586045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1111500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 674990,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.already_registered_error_message_is_generated()"
});
formatter.result({
  "duration": 403303,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Student redundant De-registering in course",
  "description": "",
  "id": "invalid-test-feature-file;student-redundant-de-registering-in-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "Student not registered error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 4016130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1794338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 495677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 841624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2713846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1817884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1337301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 1087954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 736573,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.student_not_registered_error_message_is_generated()"
});
formatter.result({
  "duration": 377342,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Student Registration in course late",
  "description": "",
  "id": "invalid-test-feature-file;student-registration-in-course-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 103,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "registration deadline has passed error message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 20266603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 2233263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 466093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 725704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2675810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2826747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 554240,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.registration_deadline_has_passed_error_message_is_generated()"
});
formatter.result({
  "duration": 432284,
  "status": "passed"
});
formatter.uri("cucumbertests/validtestpart2.feature");
formatter.feature({
  "line": 1,
  "name": "valid paths for part-2",
  "description": "",
  "id": "valid-paths-for-part-2",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#This Scenario is the valid path for assigning marks to students and sequence like S4 as mentioned in Part-2 by itself"
    }
  ],
  "line": 4,
  "name": "Student get marks",
  "description": "",
  "id": "valid-paths-for-part-2;student-get-marks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "after \"End De-registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "after \"Term End\" has occurred",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "\"Mudit\" got marks for registered course 100000",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 4643423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 6585076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 486017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 1953727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2719883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1561291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 795136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2756109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End De-registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2737392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Term End",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2545401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.got_marks_for_registered_course(String,int)"
});
formatter.result({
  "duration": 490243,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#independence of list checking"
    }
  ],
  "line": 18,
  "name": "independence of List courses offered this term to List current students",
  "description": "",
  "id": "valid-paths-for-part-2;independence-of-list-courses-offered-this-term-to-list-current-students",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "clerk list courses offered in this term",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "clerk list students in current term",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "list of courses offered remain the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3494492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1708607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 467904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 751062,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_courses_offered_in_this_term()"
});
formatter.result({
  "duration": 432284,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_students_in_current_term()"
});
formatter.result({
  "duration": 433491,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.list_of_courses_offered_remain_the_same()"
});
formatter.result({
  "duration": 409341,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "independence of List current students to List courses offered this term",
  "description": "",
  "id": "valid-paths-for-part-2;independence-of-list-current-students-to-list-courses-offered-this-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clerk list students in current term",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clerk list courses offered in this term",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "list of students remain the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3099641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1727926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 473338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 908037,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_students_in_current_term()"
});
formatter.result({
  "duration": 423227,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_courses_offered_in_this_term()"
});
formatter.result({
  "duration": 408134,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.list_of_students_remain_the_same()"
});
formatter.result({
  "duration": 402700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "independence of List courses offered this term to List current courses of students",
  "description": "",
  "id": "valid-paths-for-part-2;independence-of-list-courses-offered-this-term-to-list-current-courses-of-students",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "clerk list courses offered in this term",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student \"Mudit\" list currently enrolled courses",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "list of courses offered remain the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3058586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1843242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 964788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 1369300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_courses_offered_in_this_term()"
});
formatter.result({
  "duration": 366474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_list_currently_enrolled_courses(String)"
});
formatter.result({
  "duration": 447981,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.list_of_courses_offered_remain_the_same()"
});
formatter.result({
  "duration": 381569,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "independence of List current courses of students to List courses offered this term",
  "description": "",
  "id": "valid-paths-for-part-2;independence-of-list-current-courses-of-students-to-list-courses-offered-this-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "student \"Mudit\" list currently enrolled courses",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "clerk list courses offered in this term",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "student \"Mudit\"\u0027s currently enrolled courses remain the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3561508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1780452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 472131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 749251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_list_currently_enrolled_courses(String)"
});
formatter.result({
  "duration": 415378,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_courses_offered_in_this_term()"
});
formatter.result({
  "duration": 371909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_s_currently_enrolled_courses_remain_the_same(String)"
});
formatter.result({
  "duration": 443755,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "independence of List current students to List current courses of students",
  "description": "",
  "id": "valid-paths-for-part-2;independence-of-list-current-students-to-list-current-courses-of-students",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "clerk list students in current term",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "student \"Mudit\" list currently enrolled courses",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "list of students remain the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3937643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1692305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 433491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 683442,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_students_in_current_term()"
});
formatter.result({
  "duration": 400285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_list_currently_enrolled_courses(String)"
});
formatter.result({
  "duration": 414774,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.list_of_students_remain_the_same()"
});
formatter.result({
  "duration": 380361,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "independence of List current courses of students to List current students",
  "description": "",
  "id": "valid-paths-for-part-2;independence-of-list-current-courses-of-students-to-list-current-students",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "student \"Mudit\" list currently enrolled courses",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "clerk list students in current term",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "student \"Mudit\"\u0027s currently enrolled courses remain the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2942666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1513596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 452811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 783665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_list_currently_enrolled_courses(String)"
});
formatter.result({
  "duration": 380361,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clerk_list_students_in_current_term()"
});
formatter.result({
  "duration": 340513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_s_currently_enrolled_courses_remain_the_same(String)"
});
formatter.result({
  "duration": 422623,
  "status": "passed"
});
formatter.uri("cucumbertests/validtests.feature");
formatter.feature({
  "line": 1,
  "name": "Valid Tests feature file",
  "description": "",
  "id": "valid-tests-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create course",
  "description": "",
  "id": "valid-tests-feature-file;create-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "course \"AI\" is successfully added",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 6475797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1770188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 734158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 8
    }
  ],
  "location": "StepDefination.course_is_successfully_added(String)"
});
formatter.result({
  "duration": 371909,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Student",
  "description": "",
  "id": "valid-tests-feature-file;create-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Student \"Mudit\" is successfully created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3746858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1871014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 533110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_is_successfully_created(String)"
});
formatter.result({
  "duration": 476357,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Delete Course",
  "description": "",
  "id": "valid-tests-feature-file;delete-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "clerk removes course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Course is Successfully removed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 4647046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1785886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 736573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 21
    }
  ],
  "location": "StepDefination.clerk_removes_course_at_index(int)"
});
formatter.result({
  "duration": 732346,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.course_is_Successfully_removed()"
});
formatter.result({
  "duration": 361645,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Delete Student",
  "description": "",
  "id": "valid-tests-feature-file;delete-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "clerk removes student \"Mudit\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Student is Successfully removed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2937233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 6804236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 431680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 23
    }
  ],
  "location": "StepDefination.remove_student(String)"
});
formatter.result({
  "duration": 382776,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.course_is_Successfully_removed()"
});
formatter.result({
  "duration": 369494,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create Course after Deletion",
  "description": "",
  "id": "valid-tests-feature-file;create-course-after-deletion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clerk removes course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "course \"AI\" is successfully added",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2936629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1743623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 707593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 21
    }
  ],
  "location": "StepDefination.clerk_removes_course_at_index(int)"
});
formatter.result({
  "duration": 703366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 1222589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 8
    }
  ],
  "location": "StepDefination.course_is_successfully_added(String)"
});
formatter.result({
  "duration": 373117,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Create Student after Deletion",
  "description": "",
  "id": "valid-tests-feature-file;create-student-after-deletion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "clerk removes student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Student \"Mudit\" is successfully created again",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2951119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1738190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 403303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 23
    }
  ],
  "location": "StepDefination.remove_student(String)"
});
formatter.result({
  "duration": 463678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 800570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    }
  ],
  "location": "StepDefination.student_is_successfully_created_again(String)"
});
formatter.result({
  "duration": 498695,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Student Register in course",
  "description": "",
  "id": "valid-tests-feature-file;student-register-in-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "\"Mudit\" is registered in course code 100000",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3312160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1714644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 438320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 675593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2672187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1770188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 847058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100000",
      "offset": 37
    }
  ],
  "location": "StepDefination.is_registered_in_course_code(String,int)"
});
formatter.result({
  "duration": 385191,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Student Register in same course after deregistering",
  "description": "",
  "id": "valid-tests-feature-file;student-register-in-same-course-after-deregistering",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "\"Mudit\" is registered in course code 100000",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2896178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1695324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 453414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 720272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2747052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1720681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1151950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 873623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1096405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100000",
      "offset": 37
    }
  ],
  "location": "StepDefination.is_registered_in_course_code(String,int)"
});
formatter.result({
  "duration": 438924,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Student Deregister from course",
  "description": "",
  "id": "valid-tests-feature-file;student-deregister-from-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "before \"End De-registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "student \"Mudit\" de-register from course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "\"Mudit\" is not registered in course code 100000",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2957156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1770189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 300667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 448585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2468121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1490049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1546802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2601549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End De-registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 2215150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 40
    }
  ],
  "location": "StepDefination.student_de_register_from_course(String,int)"
});
formatter.result({
  "duration": 1201458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100000",
      "offset": 41
    }
  ],
  "location": "StepDefination.is_not_registered_in_course_code(String,int)"
});
formatter.result({
  "duration": 380361,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Student Drop Course",
  "description": "",
  "id": "valid-tests-feature-file;student-drop-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "after \"End De-registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "\"Mudit\" Drops from course 100000",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "Course Dropped Successfully message is generated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3005456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1861958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 402096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 1075274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 32510606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 3667768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1264852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2955948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End De-registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 3875457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100000",
      "offset": 26
    }
  ],
  "location": "StepDefination.drops_from_course(String,int)"
});
formatter.result({
  "duration": 1194816,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.course_Dropped_Successfully_message_is_generated()"
});
formatter.result({
  "duration": 351382,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Term has ended",
  "description": "",
  "id": "valid-tests-feature-file;term-has-ended",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "after \"Setup term\" has occurred",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "before \"Start Registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "clerk create Student \"Mudit\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "clerk Create a course \"AI\" with course code 100000",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "after \"Start Registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "before \"End registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "student \"Mudit\" register in course 100000",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "after \"End registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "after \"End De-registration\" has occurred",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "after \"Term End\" has occurred",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "\"Mudit\"\u0027s registered course 100000 is completed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setup term",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2945081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 4898809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 22
    }
  ],
  "location": "StepDefination.clerk_create_Student(String)"
});
formatter.result({
  "duration": 353192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AI",
      "offset": 23
    },
    {
      "val": "100000",
      "offset": 44
    }
  ],
  "location": "StepDefination.clerk_Create_a_course(String,int)"
});
formatter.result({
  "duration": 591672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 4582446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 8
    }
  ],
  "location": "StepDefination.before_event_occurs(String)"
});
formatter.result({
  "duration": 1723096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 9
    },
    {
      "val": "100000",
      "offset": 35
    }
  ],
  "location": "StepDefination.student_register_in_course(String,int)"
});
formatter.result({
  "duration": 1022748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2631737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End De-registration",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2686677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Term End",
      "offset": 7
    }
  ],
  "location": "StepDefination.after_has_occurred(String)"
});
formatter.result({
  "duration": 2715054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mudit",
      "offset": 1
    },
    {
      "val": "100000",
      "offset": 28
    }
  ],
  "location": "StepDefination.s_registered_course_is_completed(String,int)"
});
formatter.result({
  "duration": 460659,
  "status": "passed"
});
});