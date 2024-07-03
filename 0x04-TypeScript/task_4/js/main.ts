import { Subjects } from './subjects/Teacher';
import { Subjects as SubjectsCpp } from './subjects/Cpp';
import { Subjects as SubjectsJava } from './subjects/Java';
import { Subjects as SubjectsReact } from './subjects/React';

export const cpp = new SubjectsCpp.Cpp();
export const java = new SubjectsJava.Java();
export const react = new SubjectsReact.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
