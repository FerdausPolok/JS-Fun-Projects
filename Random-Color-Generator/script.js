function getNewColor() {  //creating random color + seeting it to bg
  const symbols = "0123456789ABCDEF";
  let color = "#";
  const magic_number = 16
  for (var i = 0; i < 6; i++) {
    //creating random color code
    color += symbols[Math.floor(Math.random() * magic_number)];
  }
  console.log(color);
  document.body.style.background = color; //setting the random color code on the background

  document.getElementById("hex").innerHTML = color; //showing current color code on UI
}
