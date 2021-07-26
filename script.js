function incrementValue () {
    var value = parseInt(document.getElementsByClassName("increment").value);
    value = isNaN(value) ? 0 : value; 
    value++;
    document.getElementsByClassName("value").value = value; 
    console.log(7); 
}