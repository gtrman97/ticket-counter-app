var nums = [];

function incrementValue() {
    
   var element = document.getElementById('incrementText');
   var value = parseInt(element.innerHTML); // parseInt coverts the
                                            // string to an int

    value++; 

    element.innerHTML = value; 
} 
function clearValue() {
   
   var element = document.getElementById('incrementText');
   element.innerHTML = 0; 
    
}
function saveValue() {
   
   var element = document.getElementById('incrementText');
   var value = parseInt(element.innerHTML);
   var saved = document.getElementById('saved'); 
   nums.push(value); 
   saved.innerHTML = nums.join(" - "); 

}