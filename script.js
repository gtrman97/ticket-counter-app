function incrementValue() {
    
   var element = document.getElementById('incrementText');
   var value = parseInt(element.innerHTML); // parseInt coverts the
                                            // string to an int

    value++; 

    // console.log(value);
    element.innerHTML = value; 
} 
function clearValue() {
   
   var element = document.getElementById('incrementText');
   element.innerHTML = 0; 
    
}