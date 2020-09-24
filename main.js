//declare variables
var header = document.getElementById("header").innerHTML
var para = document.getElementById("para").innerHTML
var state = 0 //sets initial state to 0 (see below)
var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+", ";"]  //establishes array of characters for symbolPicker to select from
var symbolPicked = null //prepares symbolPicked to be filled w/ a character

function symbolPicker() {
    var div9 = charArray[Math.floor(Math.random() * 10)] //finds numbers divisible by 9
    var string = ""; //establishes empty string
    for (i = 0; i <= 99; i++) { //if i= 0, while i is less than or equal to 99, iterate i
        if (i % 9) { //assigns #s not divisible by 9 to random symbols
            var notDiv9 = charArray[Math.floor(Math.random() * 10)]

            string = string + i + '-' + notDiv9 + '<br>'
        } else { //assigns numbers divisible by 9 to same symbol
            string = string + i + '-' + div9 + '<br>'
            symbolPicked = div9
        }
    }
    //string = string //sets string equal to relevant value
    return string; //prints relevant value
}

function upNext() { //iterates to next state, calls nextSlide function (below)
    console.log(state)
    state++
    nextSlide()
}

function startOver() { //resets state to first state
    state = 1
    nextSlide()
}


function nextSlide() {
    if (state == 1) {
        document.getElementById("zoltar").style.visibility = "initial"
        document.getElementById("header").innerHTML = "Zoltar shall peer into your Mind!" //populates header with text
        document.getElementById("para").innerHTML = ""
        document.getElementById("btn-next").style.visibility = "initial" //makes continue button appear
        document.getElementById("btn-reset").style.visibility = "hidden" //hides reset button
    }
    else if (state == 2) { //state is set equal to 1
        document.getElementById("header").innerHTML = "Choose a number, from 01 to 99...your Fated Number!"
        document.getElementById("para").innerHTML = "And when you have Chosen, continue!"
        document.getElementById("btn-next").style.visibility = "initial" //this time, both buttons appear
        document.getElementById("btn-reset").style.visibility = "initial"
        document.getElementById("zoltar").style.visibility = "initial"
    }
    else if (state == 3) {
        document.getElementById("header").innerHTML = "Now...add the digits of your Fated Number together!"
        document.getElementById("para").innerHTML = "e.g.: 14 would translate as 1 + 4 = 5"
        document.getElementById("btn-next").style.visibility = "initial" //this time, both buttons appear
        document.getElementById("btn-reset").style.visibility = "initial"
        document.getElementById("zoltar").style.visibility = "initial"
    }
    else if (state == 4) {
        document.getElementById("header").innerHTML = "Subtract your new number from your Fated Number!  So says Zoltar!"
        document.getElementById("para").innerHTML = "And continue, should you dare!"
        document.getElementById("btn-next").style.visibility = "initial"
        document.getElementById("btn-reset").style.visibility = "initial"
        document.getElementById("zoltar").style.visibility = "initial"
    }
    else if (state == 5) {
        document.getElementById("header").innerHTML = symbolPicker(); //run symbolPicker, use return as value for innerHTML
        document.getElementById("para").innerHTML = "Locate your new number and take heed of the symbol adjacent!"
        document.getElementById("btn-next").style.visibility = "initial"
        document.getElementById("btn-reset").style.visibility = "initial"
        document.getElementById("zoltar").style.visibility = "initial"
    }
    else if (state == 6) {
        document.getElementById("header").innerHTML = "Ahh, yes!  Your mind is an Open Book to Zoltar!"
        document.getElementById("para").innerHTML = "Now prepare yourself....to be Astonished!"
        document.getElementById("btn-next").style.visibility = "initial"
        document.getElementById("btn-reset").style.visibility = "initial"
        document.getElementById("zoltar").style.visibility = "initial"
    }
    else if (state == 7) {
        document.getElementById("header").innerHTML = symbolPicked
        document.getElementById("para").innerHTML = "And see how Zoltar has faultlessly predicted your symbol....your Fated Symbol!<br>Damn your Eyes!"
        document.getElementById("btn-next").style.visibility = "hidden"
        document.getElementById("btn-reset").style.visibility = "initial"
        document.getElementById("zoltar").style.visibility = "initial"
    }
}