function getNewColor(){  //creating random color + seeting it to bg
    let symbols, color;
    symbols= "0123456789ABCDEF";
    color= '#'
    for(var i=0; i<6; i++){ //creating random color code
        color+= symbols[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    document.body.style.background = color; //setting the random color code
}