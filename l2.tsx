type Course = {
    id: number;
    name: string;
    credits: number;
    department: string;
};

type CourseKey = keyof Course;

// Now a function to generate the form fields

function generateFormFields<T extends object>(entity: T): Array<keyof T>{
    return Object.keys(entity) as Array<keyof T>;
}

// Now we can use the function to generate the form fields for Course

// const courseFormFields = generateFormFields<Course>({} as Course); 
// Note: We need to pass in an instance of type Course.

const exampleCourse: Course = {
    id: 0,
    name: "Example",
    credits: 0,
    department: "Example"
}

const courseFormFields = generateFormFields<Course>(exampleCourse); 

console.log(courseFormFields);

export default Course;