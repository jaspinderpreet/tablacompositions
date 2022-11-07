// code from https://blog.devgenius.io/how-to-detect-the-pressing-of-the-enter-key-in-a-text-input-field-with-javascript-380fb2be2b9e
// checks if user presses enter, if they have we create a composition for them
let input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
    event.preventDefault()
    if (event.key === "Enter"){
        getComposition()
    }
})



/*
    This function stores a random bol in "bol_string", which index.html prints out
    Inputs:
        Matra - an int which holds the number of matras that the user wants
    Returns:
        Bol_string - a string which holds the random composition
*/
function getComposition(){
    bol_array = [
                'Dha', 'Ta', 
                'Dhun', 'Tun',
                'Dhin', 'Tin',
                // commented out cause its weird'Dhir', 'Tir',
                'Dhe', 'Te', 
                'Ghe', 'Khe',
                'Tik', 
                'Ne',
                'S', 
                'Ti'];
    var num_bols = bol_array.length;                            // number of bols
    var matra = document.getElementById("matras").value;        // get number of matras from index.html
    var bol_string = " ";                                       // initialize the string to be printed 

    // this loop gets two random bols and joins them together to form a matra
    for (var i = 0; i < matra; i++){
        var random_int = Math.floor(Math.random() * num_bols);  // gets random int bw 0 and number of bols - 1
        bol = bol_array[random_int];
        bol_string = bol_string + bol;
        
        var random_int = Math.floor(Math.random() * num_bols);  // gets random int bw 0 and number of bols - 1
        bol = bol_array[random_int];
        bol_string = bol_string + bol + " ";
    }
    document.getElementById("bol_string").innerHTML = bol_string;   // return bol_string

}