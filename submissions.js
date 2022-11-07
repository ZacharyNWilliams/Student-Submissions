//1
let submissions = [

    {
        name: "Jane",
        score: 95,
        date: 2020-01-24,
        passed: true


    },

    {
        
        name: "Joe",
        score: 77,
        date: 2018-05-14,
        passed:true

    },

    {
        name: "Jack",
        score: 59,
        date:2019-07-05,
        passed:false
    },

    {
        name:"Jill",
        score:88,
        date:2019-07-05,
        passed:true

    }

];

//2
function addSubmission(array, newName, newScore, newDate){
    console.log(array);
    let newSubmission = {
        name:newName,
        score:newScore,
        date:newDate
    };

    newSubmission.score >= 60? (newSubmission.passed = true): (newSubmission.passed = false);
    array.push(newSubmission);
    console.log(array);

}

addSubmission(submissions, "Jerry", 45, 2019-05-27);

//3

function deleteSubmissionsByIndex(array,index){
    array.splice(index,1)
    console.log(array);
}
deleteSubmissionsByIndex(submissions,2);


//4
function deleteSubmissionNyName(array, name){
    let index = (element) => element.name === name;
    array.splice(array.findIndex(index), 1);
    console.log(submissions);
}
deleteSubmissionNyName(submissions, "Jack");


// function deleteSubmissionsByName(array,name){
//     let delSubmission = array.filter(subs => subs.name !== name);
//     return delSubmission
// }
// console.log(deleteSubmissionsByName(submissions,"Jill"));

// //5
function editSubmission(array,index,score){
    let newScore = array[index].score = score;
    newScore >= 60? array[index].passed = true : array[index].passed = false;
    return array;
}
console.log (editSubmission(submissions,2,50));
//6
function findSubmissionByName(array, name){
    let find = array.find((array)=>{
        return array.name === name;

    });
    console.log(find);
}
findSubmissionByName(submissions, "Joe")
//7

//8


