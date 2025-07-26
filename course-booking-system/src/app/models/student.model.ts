export interface Student {
    id: number;
    name: string;
    email: string;
    phone?: string; // Optional phone field
    enrolledCourses?: number[]; // Optional array of course IDs the student is enrolled in
    registrationDate?: Date; // Optional registration date
}
