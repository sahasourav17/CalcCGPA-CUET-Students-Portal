oddObj = document.getElementsByClassName("odd");
evenObj = document.getElementsByClassName("even");

let oddCredit = [];
let oddGrade = [];
let evenCredit = [];
let evenGrade = [];


for (let i = 0; i < oddObj.length; i++) {
    oddCredit.push(JSON.parse(oddObj.item(i).cells[1].innerHTML));
    oddGrade.push(oddObj.item(i).cells[4].innerHTML);
}
// console.log(oddCredit,oddGrade);


for (let i = 0; i < evenObj.length; i++) {
    evenCredit.push(JSON.parse(evenObj.item(i).cells[1].innerHTML));
    evenGrade.push(evenObj.item(i).cells[4].innerHTML);
}
// console.log(evenCredit,evenGrade);

let subjGrades = [...oddGrade,...evenGrade];
let credit = [...oddCredit,...evenCredit];

let totalCredit = 0;

for(let i = 0; i < credit.length; i++) {
    // console.log(totalCredit);
    totalCredit += parseFloat(credit[i]);
}

// let gradeObj = {
//     'A+': 4.0,
//     'A' : 3.75,
//     'A-' : 3.50,
//     'B+': 3.25,
//     'B' : 3.0,
//     'B-' : 2.75,
//     'C+' : 2.50,
//     'C' : 2.25,
//     'D' : 2.0
// };

function gradeToNum(grade){
    if(grade === 'A+') return 4.0;
    else if(grade === 'A') return 3.75;
    else if(grade === 'A-') return 3.5;
    else if(grade === 'B+') return 3.25;
    else if(grade === 'B') return 3.0;
    else if(grade === 'B-') return 2.75;
    else if(grade === 'C+') return 2.50;
    else if(grade === 'C') return 2.25;
    else if(grade === 'D') return 2.0;
}

let temp = 0;
for(let i=0; i < subjGrades.length; i++){
    subjGrades[i] = gradeToNum(subjGrades[i]);
    temp += (subjGrades[i]*credit[i]);
}

finalCgpa = (temp/totalCredit).toFixed(2)
console.log(`Your CGPA is: ${finalCgpa}`);