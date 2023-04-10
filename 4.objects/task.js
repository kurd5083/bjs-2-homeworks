function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let student1 = new Student("Артем", "мужской", 37);
let student2 = new Student("Лена", "женский", 35);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined) {
        this.marks.push(...marks);
    } else {
        this.marks = undefined;
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    } else {
        return this.marks.reduce((a, v) => a + v, 0) / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason

}
