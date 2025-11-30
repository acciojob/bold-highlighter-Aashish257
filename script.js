function highlight() {
    //Write your code here
    const boldWords = document.querySelectorAll('strong');

    // Change color to green
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)";
    });

}


function return_normal() {
    //Write your code here
    const boldWords = document.querySelectorAll('strong');

    // Change color back to black
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 0, 0)";
    });    
}
