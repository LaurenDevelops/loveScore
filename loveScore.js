prompt("what is your name?");
prompt("what is their name?");

var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) +1; //1-100


if(loveScore > 70) {
   alert("your love score is " + loveScore + "% " + "you love each other like kayne loves kanye");
} 

if(loveScore > 30 && loveScore <= 70){
   alert("your love score is " + loveScore + "%");
}

if(loveScore <= 30) {
   alert("your love score is " + loveScore + "%" + "you go together like oil and water");
}
