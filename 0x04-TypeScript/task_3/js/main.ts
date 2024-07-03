namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

namespace Subjects {
  export class Math extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Math';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

namespace Subjects {
  export class History extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for History';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

const math = new Subjects.Math();
const history = new Subjects.History();
const teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 2 };

math.setTeacher(teacher);
history.setTeacher(teacher);

console.log(math.getAvailableTeacher());
console.log(history.getAvailableTeacher());
