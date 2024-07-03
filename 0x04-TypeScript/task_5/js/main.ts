interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

const major1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 1, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 2, brand: 'MinorCredits' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, brand: 'MinorCredits' }
