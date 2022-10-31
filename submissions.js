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

]

//2
function addSubmission(array, newName, newScore, newDate){
    console.log(array);
    let newSubmission = {
        array:array,
        newName:newName,
        newScore:newScore,
        newDate:newDate
    };

    newSubmission.score >= 60? (newSubmission.passed = true): (newSubmission.passed = false);
    array.push(newSubmission);
    console.log(array);

}

addSubmission(submissions, "Jerry", 45, 2019-05-27);

//3

function deleteSubmissionsByIndex(array,Index){
    
}


//4
function deleteSubmissionsByName(array, name){
    console.log(array.splice)
}
deleteSubmissionsByName(submissions,(0,1) )

//5

//6


//7

//8
