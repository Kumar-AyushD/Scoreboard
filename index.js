function scc1(points){
    let scoreElement = document.getElementById("score1");
    let currentScore = parseInt(scoreElement.textContent);
    let newScore = currentScore + points;
    scoreElement.textContent = newScore;
}
function scc2(points){
    let scoreElement = document.getElementById("score2");
    let currentScore = parseInt(scoreElement.textContent);
    let newScore = currentScore + points;
    scoreElement.textContent = newScore;
}