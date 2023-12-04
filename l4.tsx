type Student = {
    id: number;
    name: string;
    email: string;
};

type StudentList<T> = {
    [P in keyof T]: Student[];
}

//

const student1: Student = {
    id: 1,
    name: 'John',
    email: 'john@john.com'
};

const student2: Student = {
    id: 2,
    name: 'Jane',
    email: 'jane@jane.com',
};

type gradeClass = {
    A: number;
    B: number;
    C: number;
};

const gradeList: StudentList<gradeClass> = {
    A: [student1],
    B: [student2],
    C: []
};

console.log(gradeList);

// you could create another type representing 
// different departments or clubs and use StudentList 
// to map these to students.