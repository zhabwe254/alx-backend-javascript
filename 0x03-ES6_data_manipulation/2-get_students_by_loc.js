export default function getStudentsByLocation(students, city) {
  const studentsInCity = data.filter((x) => x.location === city);
  return studentsInCity;
}
