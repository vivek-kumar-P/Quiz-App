document.addEventListener("DOMContentLoaded",()=>{
    const startbtn = document.getElementById("start-btn");
    const allquestioncontainer = document.getElementById("all-question-container");
    const singlequestion = document.getElementById("single-question-container");
    const questiontext = document.getElementById("question-text");
    const choiceslist = document.getElementById("choices-list");
    const nextquestionbtn = document.getElementById("next-question-btn");
    const resultcontainer = document.getElementById("result-container");
    const Yourscore = document.getElementById("score");
    const resetbtn = document.getElementById("restart-btn");


    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        }
    ];

    startbtn.addEventListener("click", ()=>{
        startbtn.classList.add('hidden')
        startquiz()
    })

    let currentquestionindex = 0;
    let score = 0;

    nextquestionbtn.addEventListener("click",()=>{
        currentquestionindex++;
        if(currentquestionindex < questions.length){
            showQuestion()
        }else{
            showResult()
        }
    })

    resetbtn.addEventListener("click",()=>{
        currentquestionindex = 0;
        score = 0;
        resultcontainer.classList.add("hidden");
        startquiz()
    })


    function startquiz(){
        allquestioncontainer.classList.remove("hidden");
        resultcontainer.classList.add("hidden")
        showQuestion();
    }
    
    function showQuestion(){
        nextquestionbtn.classList.add("hidden")
        questiontext.textContent = questions[currentquestionindex].question;
        choiceslist.innerHTML = "";
        questions[currentquestionindex].options.forEach((choice)=>{
            const li = document.createElement("li")
            li.textContent = choice;
            li.addEventListener("click",()=> {
                selectedanswer(choice)
                li.classList.add('selectedcolor')
                nextquestionbtn.classList.remove("hidden")
            })
            choiceslist.append(li);
        })

    }

    function selectedanswer(choice){
        const rightanswer = questions[currentquestionindex].correctAnswer;
        if(choice === rightanswer){
            score++
        }
    }

    function showResult(){
        nextquestionbtn.classList.add("hidden")
        allquestioncontainer.classList.add("hidden")
        resultcontainer.classList.remove("hidden")
        Yourscore.innerHTML = `
        ${score} out of ${questions.length}
        `

    }
    





})
