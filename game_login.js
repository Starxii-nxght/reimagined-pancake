function addUser(){ 
  var player_one = document.getElementById("player1_name_input").value;
  var player_two = document.getElementById("player2_name_input").value;
  localStorage.setItem("player1", player_one);
  localStorage.setItem("player2", player_two);
  window.location = "game_page.html";
}


