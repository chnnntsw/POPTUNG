window.onload = function(){
    const img = document.getElementById("poptung1");
    const count = document.getElementById("score");
    const videoPopup = document.getElementById("videoPopup");
    const rickroll = document.getElementById("rickroll");
    let score = 0;
    let audio = new Audio("./sound/poptung-fart.mp3");
    let audio67 = new Audio("./sound/poptung-67.mp3");
    let gamePaused = false;

    function hideVideo(){
        videoPopup.style.display = "none";
        rickroll.pause();
        rickroll.currentTime = 0;
        gamePaused = false;
    }
    rickroll.onended = hideVideo;

    function pop(){
        if(gamePaused) return;
        score++;
        console.log(score);
        count.textContent = score;

        // Bounce
        count.classList.remove("bounce");
        void count.offsetWidth;
        count.classList.add("bounce");

        img.src = './image/poptung2.png';
        if(score === 30){
            gamePaused = true;
            videoPopup.style.display = "block";
            rickroll.currentTime = 0;
            rickroll.play();
            console.log("RICKROLL");
            return;
        }
        else if(score === 67){
            gamePaused = true;
            audio67.play();
            audio67.onended = function(){
                gamePaused = false;
            };
            console.log("SIX-SEVEN");
            return;
        }
        audio.currentTime = 0;
        audio.play();
    }

    function unpop(){
        img.src = './image/poptung1.png';
    }

    // Mouse
    document.addEventListener('mousedown', pop);
    document.addEventListener('mouseup', unpop);

    // Keyboard
    document.addEventListener('keydown', function(event){
        if(!event.repeat){
            event.preventDefault();
            pop();
        }
    });
    document.addEventListener('keyup', unpop);
}