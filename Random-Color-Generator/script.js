function getNewColor() {  //function for generating random color code and setting them into the UI
  const SYMBOLS = "0123456789ABCDEF";
  let color = "#";
  const MAGIC_NUMBER = 16
  for (var i = 0; i < 6; i++) {
    //creating random color code
    color += SYMBOLS[Math.floor(Math.random() * MAGIC_NUMBER)];
  }
  document.body.style.background = color; //setting the random color code into the background

  document.getElementById("hex").innerHTML = color; //showing current color code on UI
}
