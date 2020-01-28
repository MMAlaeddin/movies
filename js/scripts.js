function MoviePrice(movie, time, age) {
  this.movie = movie,
  this.time = time;
  this.age = age
}








$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var movieChoice = parseInt($("#movie").val());
    var timeChoice = parseInt($("#time").val());
    var age = parseInt($("#age").val());
    var priceing = movieChoice + timeChoice + age;
    console.log(priceing);
  })
  
});