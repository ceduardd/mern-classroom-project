export default interface Course {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  lessons: Lessons[];
}

export interface Lessons {
  _id: string;
  title: string;
  content: string;
  urlResource: string;
}
