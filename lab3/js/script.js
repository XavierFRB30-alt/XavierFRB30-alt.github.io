//Event Listeners
//"button" is being used because just one button is being used
//Alternatively, we could use an id on the button and reference it here.
document.querySelector("button").addEventListener("click", gradeQuiz)//second argument refers to function

displayQ4Choices();

/*
*/
//Functions
function displayQ4Choices(){
    let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
    q4ChoicesArray = _.shuffle(q4ChoicesArray);
    for(let i = 0 ; i < q4ChoicesArray.length ; i++){
        document.querySelector("#q4Choices").innerHTML += `<input type="radio" name="q4" id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"><label for="${q4ChoicesArray[i]}">Rhode Island</label>`;
    }
}

//Global Variables
//...Why var instead of let?
var score = 0;
var attempts = 0;

/**
 * @returns true if valid, sets innerHTML of validationFdbk, an <h3> tag
 */
function isFormValid() {
    let isValid = true;
    if (document.querySelector("#q1").value == "") {
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
    }
    return isValid;
}//isFormValid

function rightAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='checkmark'>";
    score += 20;
}
function wrongAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
}

function gradeQuiz() {
    console.log("Grading quiz...");
    document.querySelector("#validationFdbk").innerHTML = "";//resets validation feedback
    if (!isFormValid()) {
        return;
    }

    //Variables
    score += 0;//this is now global
    let q1Response = document.querySelector("#q1").value.toLowerCase(); //Question 1 value(lowered case for ease of input)
    //console.log(q1Response);//console debug for Question 1
    let q2Response = document.querySelector("#q2").value; //Question 2 value
    //console.log(q2Response);//console debug for Question 2
    //let q4Response = document.querySelector("input[name=q4]:checked").value;//accesses input-type name tag-attribute q4 for whether it's checked
    console.log(q4Response);//console debug for Question 4

    //Grading Question 1
    if (q1Response == "sacramento") {
        rightAnswer(1);
    } else {
        wrongAnswer(1);
    }

    //Grading Question 2
    if (q2Response == "mo") {
        rightAnswer(2);
    } else {
        wrongAnswer(2);
    }

    //Grading Question 3
    // let jacksonChecked = document.querySelector("#Jackson").checked;
    // let franklinChecked = document.querySelector("#Franklin").checked;
    // let jeffersonChecked = document.querySelector("#Jefferson").checked;
    // let rooseveltChecked = document.querySelector("#Roosevelt").checked;
    if (!document.querySelector("#Jackson").checked &&
    !document.querySelector("#Franklin").checked &&
    document.querySelector("#Jefferson").checked &&
    document.querySelector("#Roosevelt").checked) {
        rightAnswer(3);
    } else {
        wrongAnswer(3);
    }

    /*
    //Grading Question 4
    if(q4Response == "Rhode Island"){
        rightAnswer(4);
    } else {
        wrongAnswer(4);
    }
    */

    document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`//backticks are necessary for template literals
    document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`//backticks are necessary for template literals
}//gradeQuiz