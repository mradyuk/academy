export class Course {

    id: string;
    name: string;
    description: string;
    iconUrl: string;
    category: string;
    releaseDate?: Date;
    section: Section[];

}

export class Section {
    id: string;
    name: string;
    lessons: Lesson[];
}

export class Lesson {
    id: string;
    name: string;
    description: string;
    module: string; // Lesson Chapters
    duration: string;
    videoUrl: string;
    text: string;
}