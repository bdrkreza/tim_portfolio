class Student {
  constructor(
    id,
    name,
    qty,
    fatherName,
    classEnrolled,
    age,
    phoneNumber,
    subject,
    year,
    semester,
    status
  ) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.fatherName = fatherName;
    this.classEnrolled = classEnrolled;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.subject = subject;
    this.year = year;
    this.semester = semester;
    this.status = status;
  }
}

module.exports = Student;
