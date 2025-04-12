var q1 = ['Which god is known as "Gauri Nandan"?', 'Which city is known as "Pink City" in India?', "Who wrote India's National Anthem ?", "How many major religions in India are there ?", "Who is known as the 'Master Blaster' in International Cricket ?"];
var q2 = ["Who was the 'Birth Mother' of Bheema in MAHABHARATA ?", "Which city is the capital city of Meghalaya ?", "Which indian cricketer has most number of NOT OUTS in his Career ?", "Who was the first Prime Minister of India ?", "What was the name of the demon fox sealed inside Naruto in popular Japanese anime Naruto ?"];
var q3 = ["When is the National Hindi Diwas celebrated ?", "How many states are there in India ?", "Who wrote Vande Mataram ?", "What was the name of son of Arjuna in MAHABHARATA ?", "What is the Birth Name of Mahatma Buddha ?"];
var q4 = [`The Rowlatt Act was passed in which year ?`, `Elections to panchayats in state are regulated by ?`, `Which of the following Himalayan regions is called "Shivalik's"?`, `Which of the given cities is located on the bank of river Ganga ?`, `The driving force of an ecosystem is ?`];
var q5 = [`Which one of the following places is famous for the Great Vishnu Temple ?`,`The largest Buddhist Monastery in India is located at ______. `,`Which former Indian President died as a result of a road accident ?`,`Who was the first Indian woman to win a medal in the Olympics ?`,`When was first ODI World Cup was played ?`];
var q6 = [`Who among the following is said to have witnessed the reigns of eight Delhi Sultans ?`,`The fine step-well complex of 'Agrasen ki Baoli' is located at`,`What was the name of the last ruler of Dwapara Yug according to Mahabharata Epic ?`,`Which batsman has scored highest score of 404 in test cricket ?`,`Which 'Hashira' in the popular animation 'Demon Slayer' is considered as Stone Hashira ?`];
var q7 = [`Which day is observed as the World Standards Day ?`,`Which of the following was the theme of the World Red Cross and Red Crescent Day ?`,`The death anniversary of which of the following leaders is observed as Martyrs' Day ?`,`Who is the author of the epic 'Meghdoot' ?`,`Who is titled as 'Cricket Thalapathy' ?`];
var q8 = [`Which cricket bowler is titled as 'Rawal-pindi Express ?`,`Which of these states has had the most number of its governors become presidents of India ?`,`Which of these Mughal structures was known by the name 'Rauza-i-Munawwara' ?`,`In mythology, what was the name of Hiranyakashipu’s wife and Prahlad’s mother ?`,`After which historical or mythological figure did Sri Lanka name its first satellite ?`];
var q9 = [`Who was the Indian bowler off whom Australian legend Don Bradman got a single to reach his 100th first class century ?`,`Among whom of the following does the Indian Constitution permit to take part in the proceedings of Parliament ?`,`Who, in 1978, became the first person to be born in the continent of Antarctica ?`,`The historic Indo-Pak talks of 1972 between Indira Gandhi and Zulfikar Ali Bhutto were held at which place in Shimla ?`,`Which was the first mountain peak above 8,000 metres in height to be summited by humans ?`];
var prizes=[10000,50000,100000,250000,500000,1000000,5000000,7500000,10000000];
var cost=0;
var started = false;
var level = 1;
let timerInterval; 
var fiftyUsed = false;
var lifeUsed=false;
var pollUsed=false;
var clocktune=new Audio("music/mix_56s (audio-joiner.com).mp3");
$(clocktune).on('pause', function() {
    clocktune.currentTime = 0;
});
$(document).on("keypress", function () {
    if (!started) {
        var audio = new Audio("music/kbcbreak.mp3");
        audio.play();
        started = true;
        document.body.webkitRequestFullscreen();
        Question(level++);
    }
});

function Question(question) {
    var randomques;
    const options = [];
    var randomNumber = Math.floor(Math.random() * 5);
    var correctAnswer;

    switch (question) {
        case 1:
            randomques = q1[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "Indra";
                    options[1] = "Ganesha";
                    options[2] = "Varuna";
                    options[3] = "Kanha";
                    correctAnswer = "B";
                    break;
                case 1:
                    options[0] = "Gaya";
                    options[1] = "Kolkata";
                    options[2] = "Bengalore";
                    options[3] = "Jaipur";
                    correctAnswer = "D";
                    break;
                case 2:
                    options[0] = "Rabindranath Tagore";
                    options[1] = "Bankim Chandra Chatterjee";
                    options[2] = "Jawaharlal Nehru";
                    options[3] = "Mahatma Gandhi";
                    correctAnswer = "A";
                    break;
                case 3:
                    options[0] = "4";
                    options[1] = "5";
                    options[2] = "6";
                    options[3] = "7";
                    correctAnswer = "C";
                    break;
                case 4:
                    options[0] = "Mahendra Singh Dhoni";
                    options[1] = "Sachin Tendulkar";
                    options[2] = "Virat Kohli";
                    options[3] = "Saurav Ganguly";
                    correctAnswer = "B";
                    break;
            }
            break;
        case 2:
            randomques = q2[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "Kaushalya";
                    options[1] = "Kunti";
                    options[2] = "Radha";
                    options[3] = "Gandhari";
                    correctAnswer = "B";
                    break;
                case 1:
                    options[0] = "Gaya";
                    options[1] = "Kolkata";
                    options[2] = "Bengalore";
                    options[3] = "Shilong";
                    correctAnswer = "D";
                    break;
                case 2:
                    options[0] = "Mahendra Singh Dhoni";
                    options[1] = "Sachin Tendulkar";
                    options[2] = "Virat Kohli";
                    options[3] = "Saurav Ganguly";
                    correctAnswer = "A";
                    break;
                case 3:
                    options[0] = "Rabindranath Tagore";
                    options[1] = "Bankim Chandra Chatterjee";
                    options[2] = "Jawaharlal Nehru";
                    options[3] = "Mahatma Gandhi";
                    correctAnswer = "C";
                    break;
                case 4:
                    options[0] = "Kurama";
                    options[1] = "Son Goku";
                    options[2] = "Sukaku";
                    options[3] = "Naruto";
                    correctAnswer = "A";
                    break;
            }
            break;
        case 3:
            randomques = q3[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "14th November";
                    options[1] = "14th September";
                    options[2] = "15th August";
                    options[3] = "26th January";
                    correctAnswer = "B";
                    break;
                case 1:
                    options[0] = "26";
                    options[1] = "27";
                    options[2] = "28";
                    options[3] = "29";
                    correctAnswer = "C";
                    break;
                case 2:
                    options[0] = "Rabindranath Tagore";
                    options[1] = "Bankim Chandra Chatterjee";
                    options[2] = "Jawaharlal Nehru";
                    options[3] = "Mahatma Gandhi";
                    correctAnswer = "B";
                    break;
                case 3:
                    options[0] = "Bheema";
                    options[1] = "Karna";
                    options[2] = "Barbarick";
                    options[3] = "Abhimanyu";
                    correctAnswer = "D";
                    break;
                case 4:
                    options[0] = "Nanda";
                    options[1] = "Suddhodana";
                    options[2] = "Rahula";
                    options[3] = "Sidhartha";
                    correctAnswer = "D";
                    break;
            }
            break;
        case 4:
            randomques = q4[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "1905";
                    options[1] = "1913";
                    options[2] = "1919";
                    options[3] = "1925";
                    correctAnswer = "C";
                    break;
                case 1:
                    options[0] = "Gram panchayat";
                    options[1] = "Nagar Nigam";
                    options[2] = "Election Commission of India";
                    options[3] = "State Election Commission";
                    correctAnswer = "D";
                    break;
                case 2:
                    options[0] = "Upper Himalayas";
                    options[1] = "Lower Himalayas";
                    options[2] = "Outer Himalayas";
                    options[3] = "Inner Himalayas";
                    correctAnswer = "C";
                    break;
                case 3:
                    options[0] = "Patna";
                    options[1] = "Gwalior";
                    options[2] = "Bhopal";
                    options[3] = "Mathura";
                    correctAnswer = "A";
                    break;
                case 4:
                    options[0] = "Carbon Mono oxided";
                    options[1] = "Biogas";
                    options[2] = "Solar Energy";
                    options[3] = "Carbon dioxide";
                    correctAnswer = "C";
                    break;
            }
            break;
        case 5:
            randomques = q5[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "Bordubar, Indonesia";
                    options[1] = "Bamiyan, Afghanistan";
                    options[2] = "Panja Sahib, Pakistan";
                    options[3] = "Ankorvat, Cambodia";
                    correctAnswer = "D";
                    break;
                case 1:
                    options[0] = "Sarnath, Uttar Pradesh";
                    options[1] = "Tawang, Arunachal Pradesh";
                    options[2] = "Dharmashala, Himachal Pradesh";
                    options[3] = "Gangtok, Sikkim";
                    correctAnswer = "B";
                    break;
                case 2:
                    options[0] = "Rajendra Prasad";
                    options[1] = "Faqruddin Ali Ahmed";
                    options[2] = "Giani Zail Singh";
                    options[3] = "R.Venkatraman";
                    correctAnswer = "C";
                    break;
                case 3:
                    options[0] = "P.T. Usha";
                    options[1] = "Kunjarani Devi";
                    options[2] = "Bachendri Pal";
                    options[3] = "Karnam Maleshwari";
                    correctAnswer = "D";
                    break;
                case 4:
                    options[0] = "1983";
                    options[1] = "1975";
                    options[2] = "1979";
                    options[3] = "1992";
                    correctAnswer = "B";
                    break;
            }
            break;
        case 6:
            randomques = q6[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "Minhaj-us-Siraj";
                    options[1] = "Ziauddin Barani";
                    options[2] = "Amir Khusro";
                    options[3] = "Shams-i-Siraj Afif";
                    correctAnswer = "C";
                    break;
                case 1:
                    options[0] = "Gwalior";
                    options[1] = "Amritsar";
                    options[2] = "Agra";
                    options[3] = "New Delhi";
                    correctAnswer = "D";
                    break;
                case 2:
                    options[0] = "Pariksheet";
                    options[1] = "Dhrishtdyumna";
                    options[2] = "Yudhistir";
                    options[3] = "Arjun";
                    correctAnswer = "A";
                    break;
                case 3:
                    options[0] = "Sachin Tendulkar";
                    options[1] = "Virendra Sehwag";
                    options[2] = "Chris Gayle";
                    options[3] = "Brian Lara";
                    correctAnswer = "D";
                    break;
                case 4:
                    options[0] = "Muichiro Tokito";
                    options[1] = "Gyomei Himejima";
                    options[2] = "Tanjiro Kamado";
                    options[3] = "Tengen Uzui";
                    correctAnswer = "B";
                    break;
            }
            break;
        case 7:
            randomques = q7[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "June 26";
                    options[1] = "Oct 14";
                    options[2] = "Nov 15";
                    options[3] = "Dec 2";
                    correctAnswer = "B";
                    break;
                case 1:
                    options[0] = "Dignity for all - focus on Children";
                    options[1] = "Dignity for all - focus on women";
                    options[2] = "Focus on health for all";
                    options[3] = "Nourishment for all-focus on children";
                    correctAnswer = "A";
                    break;
                case 2:
                    options[0] = "Smt. Indira Gandhi";
                    options[1] = "PI. Jawaharlal Nehru";
                    options[2] = "Mahatma Gandhi";
                    options[3] = "Lal Bahadur Shastri";
                    correctAnswer = "C";
                    break;
                case 3:
                    options[0] = "Vishakadatta";
                    options[1] = "Valmiki";
                    options[2] = "Banabhatta";
                    options[3] = "Kalidas";
                    correctAnswer = "D";
                    break;
                case 4:
                    options[0] = "Suresh Raina";
                    options[1] = "Ravindra Jadeja";
                    options[2] = "Mahendra Singh Dhoni";
                    options[3] = "Shivam Dubey";
                    correctAnswer = "B";
                    break;
            }
            break;
        case 8:
            randomques = q8[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "Shahi Afridi";
                    options[1] = "Sohail Khan";
                    options[2] = "Naseem Shah";
                    options[3] = "Shoib Akhtar";
                    correctAnswer = "D";
                    break;
                case 1:
                    options[0] = "Rajasthan";
                    options[1] = "Bihar";
                    options[2] = "Punjab";
                    options[3] = "Andhra Pradesh";
                    correctAnswer = "B";
                    break;
                case 2:
                    options[0] = "Shalimar Bagh";
                    options[1] = "Chini Ka Rauza";
                    options[2] = "Taj Mahal";
                    options[3] = "Humayun’s Tomb";
                    correctAnswer = "C";
                    break;
                case 3:
                    options[0] = "Kapinjala";
                    options[1] = "Kayadhu";
                    options[2] = "Kamalakshi";
                    options[3] = "Kaushiki";
                    correctAnswer = "B";
                    break;
                case 4:
                    options[0] = "Ravana";
                    options[1] = "Buddha";
                    options[2] = "Vibhishana";
                    options[3] = "Kuber";
                    correctAnswer = "A";
                    break;
            }
            break;
        case 9:
            randomques = q9[randomNumber];
            switch (randomNumber) {
                case 0:
                    options[0] = "Baqa Jilani";
                    options[1] = "Commandur Rangachari";
                    options[2] = "Gogumal Kishenchand";
                    options[3] = "Kanwar Rai Singh";
                    correctAnswer = "C";
                    break;
                case 1:
                    options[0] = "Solicitor General";
                    options[1] = "Attorney General";
                    options[2] = "Cabinet Secretary";
                    options[3] = "Chief Justice";
                    correctAnswer = "B";
                    break;
                case 2:
                    options[0] = "Emilio Palma";
                    options[1] = "James Weddell";
                    options[2] = "Nathaniel Palmer";
                    options[3] = "Charles Wilkes";
                    correctAnswer = "A";
                    break;
                case 3:
                    options[0] = "Viceregal Lodge";
                    options[1] = "Gorton Castle";
                    options[2] = "Barnes Court";
                    options[3] = "Cecil Hotel";
                    correctAnswer = "C";
                    break;
                case 4:
                    options[0] = "Annapurna";
                    options[1] = "Lhotse";
                    options[2] = "Kanchenjunga";
                    options[3] = "Makalu";
                    correctAnswer = "A";
                    break;
            }
            break; 
    }
    // var fifty=`<button id="fifty">50 : 50</button></div>`;
    var html = `<div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="center-container">
                        <img src="logo-photoaidcom-cropped.png" alt="kbclogo">
                    </div>
                </div>
                <div class="col-lg-4">
                    <table class="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Prize</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="1" style="color: orange"><th scope="row">1</th><td>10000</td></tr>
                            <tr id="2"><th scope="row">2</th><td>50000</td></tr>
                            <tr id="3"><th scope="row">3</th><td>100000</td></tr>
                            <tr id="4" style="color: orange"><th scope="row">4</th><td>250000</td></tr>
                            <tr id="5"><th scope="row">5</th><td>500000</td></tr>
                            <tr id="6"><th scope="row">6</th><td>1000000</td></tr>
                            <tr id="7" style="color: orange"><th scope="row">7</th><td>5000000</td></tr>
                            <tr id="8" style="color: orange"><th scope="row">8</th><td>7500000</td></tr>
                            <tr id="9" style="color: orange"><th scope="row">9</th><td>10000000</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="container-timer">
                    <div class="countdown col-lg-4"></div>
                </div>
                
                
            </div>
        </div>
        <div class="lifelines container">
        <div class="row row-opt">
            <div class="col-lg-4 optionlife">
            <button id="fifty">50 : 50</button></div>
            
            <div class="col-lg-4 optionlife">
            <button id="poll"><i class="fa-solid fa-people-group fa-2x"></i></button></div>
            <div class="col-lg-4 optionlife">
            <button id="life"><i class="fa-solid fa-heart fa-2x"></i></button></div>
        </div>
    </div>
        <div class="container" id="ques">
            <div class="ques-strt row">
                <div class="col-lg">
                    <h1>Q` + question + `.` + randomques + `</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <button class="option" id="A">A. ` + options[0] + `</button>
                </div>
                <div class="col-lg-6">
                    <button class="option" id="B">B. ` + options[1] + `</button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <button class="option" id="C">C. ` + options[2] + `</button>
                </div>
                <div class="col-lg-6">
                    <button class="option" id="D">D. ` + options[3] + `</button>
                </div>
            </div>
        </div>
        <script src="https://kit.fontawesome.com/9a19db07f2.js" crossorigin="anonymous"></script>`; 
    $("body").html(html);
    $("#"+question).addClass("glow-row");
    var oneMinute = 60;
    var display = document.querySelector('.countdown');
    startCountdown(oneMinute, display);
    if(pollUsed){
        $("#poll").fadeOut(1);
    }else{
        $("#poll").click(function (){
            audiencePole(options,correctAnswer);
            pollUsed = true;
        });
    }
    if(lifeUsed){
        $("#life").fadeOut(1);
    }else{
        $("#life").click(function (){
            $("#life").fadeOut(300);
            setTimeout(function (){
                lifeUsed=true;   
                Question(level-1);
            },301);   
        });  
    }
    if(fiftyUsed){
        $("#fifty").fadeOut(1);
    }else{
        $("#fifty").click(function (){
            fiftyFifty(correctAnswer);
            fiftyUsed=true;
        });
    }
    
    $(".option").click(function () {
        clocktune.pause();
        var clickedButton = $(this).attr("id");
        if (checkAnswer(clickedButton, correctAnswer)) {
            if(question===1 || question===4 || question===7 || question===8 || question===9){
                cost=prizes[Math.floor(question)-1];
            }
            clap();
            $(".option").not("#" + correctAnswer).fadeOut(1500);
            setTimeout(function () {
                var win=`<section class="question">
        <h1>You Won `+prizes[Math.floor(question)-1]+`</h1>
    </section>`;
                $("#ques").html(win);
              }, 1501);
            if(level<=9){
                setTimeout(function () {
                    Question(level++);
                }, 3010);
            }else{
                window.location.replace("WinnerPage/index.html");
            }

        } else {
            wrong();
                $(".option").not("#" + correctAnswer).fadeOut(1500);
            setTimeout(function () {
                var win=`<section class="question">
                <h1>GAME OVER</h1>
        <h1>You Won `+cost+`</h1>
    </section>`;
                $("#ques").html(win);
              }, 1501);
            setTimeout(function () {
                location.reload();
              }, 3010);
            
            
        }
    });
}

function checkAnswer(clickedButton, correctAnswer) {
    return clickedButton === correctAnswer;
}
function startCountdown(duration, display) {
    clearInterval(timerInterval);
    clocktune.play();
    let timer = duration, seconds;
    timerInterval = setInterval(() => {
        seconds = parseInt(timer % 61, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            display.textContent = "00";
            setTimeout(function () {
                var win=`<section class="question">
                <h1>Time's Up</h1>
        <h1>You Won `+cost+`</h1>
    </section>`;
                $("#ques").html(win);
              }, 1501);
            setTimeout(function () {
                location.reload();
              }, 3010);
        }
    }, 1000);
}

function fiftyFifty(correctAnswer){
    var x;
    switch(correctAnswer){
        case "A":
            x=1;
            break;
        
        case "B":
            x=2;
            break;
        
        case "C":
            x=3;
            break;
        
        case "D":
            x=4;
            break;
        
    }
    var wrongOption=[];
    var k=1;
    var i=0;
    while(i<3){
        if(k===x){
            k++;
            continue;
        }
        wrongOption[i++]=k;
    }
    var randomOption=wrongOption[(Math.floor(Math.random() * 3))];
    var selected;
    switch(randomOption){
        case 1:
            selected="A";
            break;
        case 2:
            selected="B";
            break;
        case 3:
            selected="C";
            break;
        case 4:
            selected="D";
            break;
    }
    $("#"+correctAnswer).addClass("fifty-fifty");
    $("#"+selected).addClass("fifty-fifty");
    $(".option").not(".fifty-fifty").fadeOut(1500);
    $("#fifty").fadeOut(1500);
}

function audiencePole(options, correctAnswer) {
    let total = 100;
    let num1 = Math.random();
    let num2 = Math.random();
    let num3 = Math.random();

    
    let arr = [num1, num2, num3].sort();

    
    let part1 = Math.floor(arr[0] * total);
    let part2 = Math.floor((arr[1] - arr[0]) * total);
    let part3 = Math.floor((arr[2] - arr[1]) * total);
    let part4 = total - part1 - part2 - part3;

    
    let arr1 = [part1, part2, part3, part4].sort((a, b) => a - b);

    
    let x;
    switch (correctAnswer) {
        case "A":
            x = 0;
            break;
        case "B":
            x = 1;
            break;
        case "C":
            x = 2;
            break;
        case "D":
            x = 3;
            break;
    }

    
    $("#" + correctAnswer).text(correctAnswer+". "+options[x] + " : " + arr1[arr1.length - 1]+"%");

    
    let answers = ["A", "B", "C", "D"];
    answers.splice(answers.indexOf(correctAnswer), 1);

    
    for (let i = 0; i < 3; i++) {
        let ans = answers[i];
        $("#" + ans).text(ans+". "+options[answers.indexOf(ans)] + " : " + arr1[i]+"%");
    }
}

function clap(){
    var audio=new Audio("music/clap-[AudioTrimmer.com].mp3");
    audio.play();
}
function wrong(){
    var audio=new Audio("music/wrong.mp3");
    audio.play();
    
}