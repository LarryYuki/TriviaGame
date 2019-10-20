$(document).ready(function () {
    //Global variable
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswer = 0;
    var game;
    var score = 0;

    var questions = [{
            question: "1 What is the proper term for a group of kittens?",
            answers: ["Kettle", "Kaboodle", "Kine", "Kindle"],
            right: "Kindle",
            name: 1
        },
        {
            question: "2 All cats are norn with what color eyes",
            answers: ["Blue", "Pink", "Green", "Black"],
            right: "Blue",
            name: 2
        },
        {
            question: "3 What percentage of a cat's bones are in its tail?",
            answers: ["10%", "20%", "2%", "0%"],
            right: "10%",
            name: 3
        },
        {
            question: "4 What is it called when a cat kneads the ground?",
            answers: ["Sneegling", "Snurgling", "Rubbing", "Kneading"],
            right: "Snurgling",
            name: 4

        },
        {
            question: "5 How many different sounds can a cat make?",
            answers: ["10", "27", "150", "100"],
            right: "100",
            name: 5
        },
        {
            question: "6 How many breeds of domestic cat are there worldwide?",
            answers: ["200", "300", "80", "70"],
            right: "70",
            name: 6
        },
        {
            question: "7 If a male cat is both orange and black, he is probably...?",
            answers: ["Schizophrenic", "Blind", "Deaf", "Sterile"],
            right: "Sterile",
            name: 7
        },
    ]
    $('.start-btn').on('click', function () {
        for (let i = 0; i < questions.length; i++) {
            var newDiv = $('<div>')
            var newquestion = $('<p>')
            countdown(60);
            newquestion.text(questions[i].question)
            newDiv.append(newquestion)
            questions[i].answers.forEach(function (value, index) {
                var newAnswer = $(`<input type="radio" name="question${i}" value="${value}">${value}</input>`)
                newDiv.append(newAnswer)
            })
            $('body').append(newDiv)
        }
        $('body').append($('<button class="grade">GRADE</button>'))
        $('.start-btn').hide()
    })

    $(document).on('click', ".grade", function () {
        console.log('value')
        for (let quest = 0; quest < questions.length; quest++) {
            let answer = $(`input[name=question${quest}]:checked`).attr("value");
            console.log(answer);
            console.log(questions[quest].right);
            if (answer === questions[quest].right) {
                correctAnswer++;
            } else {
                incorrectAnswer++;
            };

        }
        console.log(correctAnswer);
        console.log(incorrectAnswer);

    })

    var countdown = function (time) {
        var timer = setInterval(function () {
            time = time - 1;
            $("#time-remain").html(time);
            if (time === 0) {
                // time--;
                clearInterval(timer);
                // alert("Time Up")
            }
            // return;

        }, 1000);


    }

});