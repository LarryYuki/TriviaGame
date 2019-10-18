$(document).ready(function () {
    //Global variable
    var timer = 30;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswer = 0;
    var clock;
    var game;
    var score = 0;

    var questions = [{
            question: "who is my tutor",
            answers: ["nick", "somebody", "ryan", "bob"],
            right: "nick"
        },
        {
            question: "who is my teacher",
            answers: ["nick", "tom", "ryan", "bob"],
            right: "tom"
        },
    ]
    $('.start-btn').on('click', function () { //listener for static html
        for (let i = 0; i < questions.length; i++) {
            var newDiv = $('<div>')
            var newquestion = $('<p>')
            newquestion.text(questions[i].question)
            newDiv.append(newquestion)
            questions[i].answers.forEach(function (value, index) { //template literals : use backtics and ${}
                var newAnswer = $(`<input type="radio" name="question${i}" value="${value}">${value}</input>`)
                // var newAnswer= $('<input>')
                // newAnswer.attr("type", "radio")
                // newAnswer.attr("name", "question"+i)
                // newAnswer.attr("value", value)
                // newAnswer.text( value)
                newDiv.append(newAnswer)
            })
            $('body').append(newDiv)
        }
        $('body').append($('<h1>GRADE</h1>'))
        $('.start-btn').hide()
    })

    $(document).on('click', "h1", function () { //listener for dynamically generated html
        console.log('nick')
    })




    //game start
    //     $('.answers').css('visibility','hidden');
    //     $('body').on('click', '.start-btn', function(event){
    //         event.preventDefault();
    //         startGame();
    //         $('.answers').css('visibility','visible');
    //     });

    //     $('body').on('click','.answer', function(event){
    //         chosenAnswer=$(this).text();
    //         answerCounter =question[counter].answers;
    //     })

})