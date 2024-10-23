var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };


    
  console.log(student);
  delete student.rollno;
  console.log(student.rollno);
  student.rollno = 15;
  console.log(student)