type Course = {
    id: number;
    name: string;
    credits: number;
    department: string;
};

type Student = {
    id: number;
    name: string;
    email: string;
    courses: Array<Course>;
    completed: Array<Course>;
}

type StudentCourseRegistration = {
    student: Student;
    course: Course;
    status: 'registered' | 'completed' | 'pending';
}

//

const course1: Course = {
    id: 101,
    name: 'Introduction to Computer Science',
    credits: 4,
    department: 'Computer Science'
};

const student1: Student = {
    id: 1,
    name: 'John',
    email: 'john@john.com',
    courses: [],
    completed: []
};

const reg1: StudentCourseRegistration = {
    student: student1,
    course: course1,
    status: 'registered'
};

console.log(reg1);

export default Student;