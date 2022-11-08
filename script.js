// code from https://blog.devgenius.io/how-to-detect-the-pressing-of-the-enter-key-in-a-text-input-field-with-javascript-380fb2be2b9e
// checks if user presses enter, if they have we create a composition for them
let input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
    event.preventDefault()
    if (event.key === "Enter"){
        customBols()
    }
})

// looks for user clicking the preset taal 'GO!' button
let btn = document.querySelector('#btn');
btn.onclick = (event) => {
    event.preventDefault();
    getTaal();
};

/*
    This function creates a random bol from the given number of matras and 
    divides it with the given division variable. 
    Inputs:
        Matra - an int which holds the number of matras that the user wants
        Division - how the composition will be broken up when it is printed
    Returns:
        Bol_string - a string which holds the random composition
*/
function getComposition(matra, division){
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
    var bol_string = "<br>";                                       // initialize the string to be printed 

    // this loop gets two random bols and joins them together to form a matra
    for (var i = 0; i < matra; i++){
        var random_int = Math.floor(Math.random() * num_bols);  // gets random int bw 0 and number of bols - 1
        bol = bol_array[random_int];
        bol_string = bol_string + bol;
        
        var random_int = Math.floor(Math.random() * num_bols);  // gets random int bw 0 and number of bols - 1
        bol = bol_array[random_int];
        bol_string = bol_string + bol + " ";

        // if we are at the division stage, print a new line
        if (i == division - 1){
            bol_string = bol_string + "<br>";
        }
    }
    document.getElementById("bol_string").innerHTML = bol_string;   // return bol_string

}

/*
    This function handles the user input into the custom matra field 
    and then calls getComposition() to handle the creating of the composition
    Inputs
        matra - an int from the website input
*/
function customBols(){
    var matra = document.getElementById("matras").value;        // get number of matras from index.html
    division = Math.floor(matra / 2);
    getComposition(matra, division);        
}

/*
    This function handles the user input when they use the dropdown
    menu and click the button beside it. This function handles
    the division of each of the taals in the dropdown. 
    Inputs
        taal - the value of the dropdown selected by the user from the website
*/
function getTaal(){
    let taal = document.getElementById('taal').value;       // gets taal from index.html

    switch(taal) {
        case 16:
            division = 4;
            break;
        case 7:
            division = 7;
            break;
        case 4:
            division = 4;
        break;
            case 3:
            division = 3;
        break;
        default:
            division = taal / 2;
      }
    getComposition(taal, division);       
}