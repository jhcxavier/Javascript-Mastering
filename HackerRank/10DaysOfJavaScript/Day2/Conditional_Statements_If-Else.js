let score = 11
function getGrade(score) {
  
  let grade = score;
    if(grade > 25 && grade <= 30)
        grade = "A";
    else if (grade > 20 && grade <= 25)
        grade = "B";
    else if (grade > 15 && grade <= 20)
        grade = "C";
    else if (grade > 10 && grade <= 15)
        grade = "D";
    else if (grade > 5 && grade <= 10)
        grade = "E";
    else if (grade > 0 && grade <= 5)
        grade = "F";
    else
        return false;
    return grade;
}
console.log(getGrade(score))