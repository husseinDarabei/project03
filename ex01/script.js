function calculateGrade(score)
{
if(typeof score !== "number" || score < 0 || score > 100)
{
return "Invalid score";
}
if (score>=90){
return "A";
}
else if(score >=80)
{
return "B";
}
else if(score >=70)
{
return "C";
}
else if(score >=50)
{
return "D";
}
else
{
return "F";
}
}

console.log("Result 90 and Grade",calculateGrade(90));
console.log("Result 89 and Grade",calculateGrade(89));
console.log("Result 0 and Grade",calculateGrade(0));
console.log("Result 100 and Grade",calculateGrade(100));
console.log(calculateGrade(-1));
console.log(calculateGrade(101));
console.log(calculateGrade("90"));

function checkAccess(age, hasTicket)
{
if(age >= 18 && hasTicket === true)
{
return true;
}
else {
return false;
}
}

console.log("Adult with ticket",checkAccess(23,true));
console.log("Teenager with ticket",checkAccess(15,true));
console.log("Adult without ticket",checkAccess(20,false));
console.log("Adult with ticket",checkAccess(18,true));
console.log("Teenager without ticket",checkAccess(16,false));
console.log("Adult without ticket",checkAccess(18,false));

