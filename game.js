
$(".roll").click(function(){
var randomnumber1 = Math.floor(Math.random() * 6) + 1; 
var photo = "images/dice" + randomnumber1 + ".png";
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var photo2 = "images/dice" + randomnumber2 + ".png";
document.querySelector(".img1").setAttribute("src",photo);
document.querySelector(".img2").setAttribute("src", photo2);
  
// Draw 

if(randomnumber1 == randomnumber2){

    document.querySelector(".heading").textContent = "Draw";
    $(".heading").css("color","yellow");
} //Player 1 Wins
  else if ( randomnumber1 > randomnumber2) {


    document.querySelector(".heading").textContent = "Player 1 Wins!";
        $(".heading").css("color", "red");


    


}// Player 2 Wins
  else if (randomnumber2 > randomnumber1){
    document.querySelector(".heading").textContent = "Player 2 Wins!";
        $(".heading").css("color", "blue");

}else{
   //Do Nothing 
}
});
