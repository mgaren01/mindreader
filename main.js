//declare variables
var header = document.getElementById("header").innerHTML //sets var 'header' equal to header element from html
var para = document.getElementById("para").innerHTML //set var 'para' equal to para element from html
var state = 0 //sets initial state to 0 
var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+", ";"]  //establishes array of characters for symbolPicker to select from
var symbolPicked = null //prepares variable to be filled with a random character

function symbolPicker() { //
    var div9 = charArray[Math.floor(Math.random() * 10)] //chooses random symbol from array; character from array = [round down to nearest integer(random # between 0 and 1 times 10)] 
    var string = ""; //establishes empty string
    for (i = 0; i <= 99; i++) { //starting from 0, counts i until reaching 99
        if (i % 9) { //checks if each iteration of i is evenly divisible by 9
            var notDiv9 = charArray[Math.floor(Math.random() * 10)] //if a # is *not* divisible by 9, # is assigned random character

            string = string + i + ' - ' + notDiv9 + '<br>' //creates string containing a given value and a random symbol
        } else { //if # *is* divisible by 9
            string = string + i + ' - ' + div9 + '<br>' //creates string containing a multiple of 9 and a randomly chosen symbol (top of function)
            symbolPicked = div9 //assigns *same* randomly chosen symbol to multiples of 9
        }
    }
    //string = string //sets string equal to relevant value
    return string; //prints values and assigned symbols
}

function upNext() { //iterates to next state, calls nextSlide function (below)
    //console.log(state)
    state++
    nextSlide()
}

function startOver() { //resets state to first state
    state = 1
    nextSlide()
}


function nextSlide() {
    if (state == 1) {
        document.getElementById("zoltar").style.visibility = "initial" //displays image of zoltar
        document.getElementById("header").innerHTML = "Zoltar shall peer into your Mind!" //populates header with text
        document.getElementById("para").innerHTML = "" //establishes paragraph element for later use
        document.getElementById("btn-next").style.visibility = "initial" //makes continue button appear
        document.getElementById("btn-reset").style.visibility = "hidden" //hides reset button
    }
    else if (state == 2) { //state is set equal to 1
        document.getElementById("header").innerHTML = "Choose a number, from 01 to 99...your Fated Number!"
        document.getElementById("para").innerHTML = "And when you have Chosen, continue!"
        document.getElementById("btn-next").style.visibility = "initial" //continue button
        document.getElementById("btn-reset").style.visibility = "initial" //reset button
        document.getElementById("zoltar").style.visibility = "initial" //image
    }
    else if (state == 3) {
        document.getElementById("header").innerHTML = "Now...add the digits of your Fated Number together!"
        document.getElementById("para").innerHTML = "e.g.: 14 would translate as 1 + 4 = 5"
        document.getElementById("btn-next").style.visibility = "initial" //continue
        document.getElementById("btn-reset").style.visibility = "initial" //reset
        document.getElementById("zoltar").style.visibility = "initial" //image
    }
    else if (state == 4) {
        document.getElementById("header").innerHTML = "Subtract your new number from your Fated Number!  So says Zoltar!"
        document.getElementById("para").innerHTML = "And continue, should you dare!"
        document.getElementById("btn-next").style.visibility = "initial" //continue
        document.getElementById("btn-reset").style.visibility = "initial" //reset
        document.getElementById("zoltar").style.visibility = "initial" //image
    }
    else if (state == 5) {
        document.getElementById("header").innerHTML = symbolPicker(); //run symbolPicker, use return as value for innerHTML
        document.getElementById("para").innerHTML = "Locate your new number and take heed of the symbol adjacent!"
        document.getElementById("btn-next").style.visibility = "initial" //continue
        document.getElementById("btn-reset").style.visibility = "initial" //reset
        document.getElementById("zoltar").style.visibility = "initial" //image
    }
    else if (state == 6) {
        document.getElementById("header").innerHTML = "Ahh, yes!  Your mind is an Open Book to Zoltar!"
        document.getElementById("para").innerHTML = "Now prepare yourself....to be Astonished!"
        document.getElementById("btn-next").style.visibility = "initial" //continue
        document.getElementById("btn-reset").style.visibility = "initial" //reset
        document.getElementById("zoltar").style.visibility = "initial" //image
    }
    else if (state == 7) {
        document.getElementById("header").innerHTML = symbolPicked //variable 'symbolPicked'(= to multiples of 9) used as value for innerHTML
        document.getElementById("para").innerHTML = "And see how Zoltar has faultlessly predicted your symbol....your Fated Symbol!<br>Damn your Eyes!"
        document.getElementById("btn-next").style.visibility = "hidden" //hides continue button, as there are no further states to iterate
        document.getElementById("btn-reset").style.visibility = "initial" //reset
        document.getElementById("zoltar").style.visibility = "initial" //image
    }
}