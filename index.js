let hscoreEl = document.getElementById("hScore");
let gscoreEl = document.getElementById("gScore");
let homescore = parseInt(hscoreEl.textContent);
let guestscore = parseInt(gscoreEl.textContent);

function h_Btn_1 (){
    homescore += 1;
    hscoreEl.textContent = homescore;
}

function h_Btn_2 (){
    homescore += 2;
    hscoreEl.textContent = homescore;
}

function h_Btn_3 (){
    homescore += 3;
    hscoreEl.textContent = homescore;
}

function g_Btn_1 (){
    guestscore += 1;
    gscoreEl.textContent = guestscore;
}

function g_Btn_2 (){
    guestscore += 2;
    gscoreEl.textContent = guestscore;
}

function g_Btn_3 (){
    guestscore += 3;
    gscoreEl.textContent = guestscore;
}

function reset(){
    homescore = 0;
    guestscore = 0;
    hscoreEl.textContent = homescore;
    gscoreEl.textContent = guestscore;
}
