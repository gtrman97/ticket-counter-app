function incrementValue () {
    
   var element = document.getElementById('incrementText');
   var value = parseInt(element.innerHTML);

    value++; 

    // console.log(value);
    element.innerHTML = value; 
} 