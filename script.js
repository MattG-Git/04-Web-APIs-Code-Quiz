//selects the timer element by id
var timeEl = document.getElementById("timer");
//sets how much time the timer starts off with
var timeLeft = 75;
//Score starts out at 0
var score = 0;
//this variable helps ensure that if the questions are all answered before the timer ends & the All done screen shows, it won't duplicate once the timer does reach 0
var allDone = true; 
//These variables are traversing the DOM
var intro = document.getElementById("intro");
var rules = document.getElementById("instructions");
var start = document.getElementById("startBtn");
var begin = document.getElementById("beginning");
var body = document.body;
//this is the variable that refers to user input for their initials
var player = "";

var q1 = {
    question:"What is an array?",
    a1:"a light beam coming from the sun",
    a2:"a little green monster that lives under the beds of children",
    correct:"organizes data so that a related set of values can be easily sorted or searched",
    a4:"an exboyfriend that smells badly"
};
var q2 = {
    question:"What's the correct way to declare a variable in javaScript?",
    correct:" var name = Jim",
    a2:"variable name = Jim",
    a3:"Jim = var name",
    a4:"var name: Jim"
};
var q3 = {
    question:"What is one correct syntax to write a function in javaScript?",
    a1:"start function() {};",
    a2:"function start {};",
    a3:"function start ();",
    correct:"function start() {};"
};
var questionArray = [q1, q2, q3];

function startQuiz() {
    function setTimer(){
        //sets timer interval in variable
        var timerInterval = setInterval(function() {
            timeLeft--;
            timeEl.textContent = timeLeft;
    
            if(timeLeft < 0) {
                // stops execution of action at set interval
                clearInterval(timerInterval);
                // calls function to create end of quiz, display score and add initials
                if (allDone){ endQuiz()};
            }
            // this 1000 makes the timer count backwards 1 second at a time or 1000 miliseconds
        }, 1000);
    };

    begin.remove();

    //this code creates an h3 element and makes it show on the screen for question 1
    var q = document.createElement("h3");
    body.appendChild(q);
    q.textContent = q1["question"];

    // this code creates a button element
    var a1 = document.createElement ("button");
    var a2 = document.createElement ("button");
    var a3 = document.createElement ("button");
    var a4 = document.createElement ("button");

    //this code adds a click event listener so that the appropriate function is called when the buttons are clicked
    a1.addEventListener("click", wrongAnswer)
    a2.addEventListener("click", wrongAnswer)
    a3.addEventListener("click", correctAnswer)
    a4.addEventListener("click", wrongAnswer)

    //this code makes the answer buttons display on screen
    body.appendChild(a1);
    body.appendChild(a2);
    body.appendChild(a3);
    body.appendChild(a4);
    a1.textContent = q1["a1"];
    a2.textContent = q1["a2"];
    a3.textContent = q1["correct"];
    a4.textContent = q1["a4"];

    //This keeps track if the 1st question is answered correctly & removes the question/answer choices
    function correctAnswer() {
        score ++;
        body.removeChild(q);
        body.removeChild(a1);
        body.removeChild(a2);
        body.removeChild(a3);
        body.removeChild(a4);
        question2();
        console.log(score)
    };
    //if the question is answered wrong, then this deducts 5 seconds from the timer and removes the question/answer choices
    function wrongAnswer() {
        timeLeft = timeLeft - 5;
        body.removeChild(q);
        body.removeChild(a1);
        body.removeChild(a2);
        body.removeChild(a3);
        body.removeChild(a4);
        question2();
        console.log(score)
    };
   
    function question2() {
        //this code creates an h3 element and makes it show on the screen for question 2
        var q = document.createElement("h3");
        body.appendChild(q);
        q.textContent = q2["question"];

        // this code creates a button element
        var a1 = document.createElement ("button");
        var a2 = document.createElement ("button");
        var a3 = document.createElement ("button");
        var a4 = document.createElement ("button");

        //this code adds a click event listener so that the appropriate function is called when the buttons are clicked
        a1.addEventListener("click", correctAnswer)
        a2.addEventListener("click", wrongAnswer)
        a3.addEventListener("click", wrongAnswer)
        a4.addEventListener("click", wrongAnswer)

        //this code makes the answer buttons display on screen
        body.appendChild(a1);
        body.appendChild(a2);
        body.appendChild(a3);
        body.appendChild(a4);
        a1.textContent = q2["correct"];
        a2.textContent = q2["a2"];
        a3.textContent = q2["a3"];
        a4.textContent = q2["a4"];
    //This keeps track if the 2nd question is answered correctly & removes the question/answer choices
    function correctAnswer() {
        score ++;
        body.removeChild(q);
        body.removeChild(a1);
        body.removeChild(a2);
        body.removeChild(a3);
        body.removeChild(a4);
        question3();
        console.log(score)
    };
    //if the question is answered wrong, then this deducts 5 seconds from the timer and removes the question/answer choices
    function wrongAnswer() {
        timeLeft = timeLeft - 5;
        body.removeChild(q);
        body.removeChild(a1);
        body.removeChild(a2);
        body.removeChild(a3);
        body.removeChild(a4);
        question3();
        console.log(score)
    };
    }

    function question3() {
        //this code creates an h3 element and makes it show on the screen for question 1
        var q = document.createElement("h3");
        body.appendChild(q);
        q.textContent = q2["question"];
      
        // this code creates a button element
        var a1 = document.createElement ("button");
        var a2 = document.createElement ("button");
        var a3 = document.createElement ("button");
        var a4 = document.createElement ("button");
      
        //this code adds a click event listener so that the appropriate function is called when the buttons are clicked
        a1.addEventListener("click", wrongAnswer)
        a2.addEventListener("click", wrongAnswer)
        a3.addEventListener("click", wrongAnswer)
        a4.addEventListener("click", correctAnswer)
      
        //this code makes the answer buttons display on screen
        body.appendChild(a1);
        body.appendChild(a2);
        body.appendChild(a3);
        body.appendChild(a4);
        a1.textContent = q3["a1"];
        a2.textContent = q3["a2"];
        a3.textContent = q3["a3"];
        a4.textContent = q3["correct"];

    //This keeps track if the 3rd question is answered correctly & removes the question/answer choices
    function correctAnswer() {
        score ++;
        body.removeChild(q);
        body.removeChild(a1);
        body.removeChild(a2);
        body.removeChild(a3);
        body.removeChild(a4);
        endQuiz();
        console.log(score)
    };

    //if the question is answered wrong, then this deducts 5 seconds from the timer and removes the question/answer choices
    function wrongAnswer() {
        timeLeft = timeLeft - 5;
        body.removeChild(q);
        body.removeChild(a1);
        body.removeChild(a2);
        body.removeChild(a3);
        body.removeChild(a4);
        endQuiz();
        console.log(score)
    };
    }

    function endQuiz() {
        //this stops the timer at 0
        timeLeft = 0;   
        //this stops endQuiz from reinitiating when the timer gets to 0
        allDone = false; 
        //this creates a new header that reads "ALL DONE!"
        var header = document.createElement("h3");
        body.appendChild(header);
        header.textContent = "All done!";

        var endScore = document.createElement("p");
        body.appendChild(endScore);
        endScore.textContent = `Your final score is: ${score}`;

        var initials = document.createElement("input");
        body.appendChild(initials);
        initials.setAttribute("value","");
        localStorage.setItem("player",player);
        console.log(initials.value);


        var endBtn = document.createElement("button");
        body.appendChild(endBtn);
        endBtn.textContent = "Submit";
        endBtn.addEventListener("click", scoreBoard);
        

        function scoreBoard() {
            player = initials.value;
            localStorage.setItem("player",player);
            localStorage.setItem("score", score);
            console.log(player);
        
            //this code clears out scoreboard & user initials input
            header.textContent = "High Scores"
            body.removeChild(endScore);
            body.removeChild(initials);
            body.removeChild(endBtn);
            
            //displaying players initials and score
            var newRow = document.createElement("p");
            body.appendChild(newRow);
            newRow.textContent = `${player} ....... ${score}`;
 
            var startOverBtn = document.createElement("button");
            body.appendChild(startOverBtn);
            startOverBtn.textContent = "Start Over"
            startOverBtn.addEventListener("click", restartQuiz);

            function restartQuiz() {
                body.removeChild(header);
                body.removeChild(newRow);
                body.removeChild(startOverBtn);
                startQuiz();
                timeLeft = 75;
                score = 0;
                setTimer();
            };
        }
    }

    setTimer();
};



intro.textContent = "CODING QUIZ CHALLENGE"
rules.textContent = "You will have 75 seconds to complete this multiple choice quiz. If you select the wrong answer, 5 seconds will be deducted from the timer. The game is over when the timer runs out or the last question is answered. GOOD LUCK!"

start.addEventListener ('click', startQuiz)