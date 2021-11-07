let input = document.getElementById("input");


let expression = '';


//Write The Exprission On Input Field
function press(num){
    expression += num;
    input.value = expression;
}



//eraseLastCharacter In Input Field
let eraseLastCharacter = document.getElementById("eraseLastCharacter").addEventListener('click',function(){

    expression = input.value.slice(0,-1);
    input.value = expression;

});



// Clear The Input Field
let clear = document.getElementById("clear").addEventListener('click',function(){
    expression = '';
    input.value = expression;
});


// Evaluate The Exprission Which Is In The Input Field
let equal = document.getElementById("equal").addEventListener('click',function(){
    if(input.value != ''){
        
        
        input.value = eval(expression); //I Search For This Function
        
        var result = input.value;
        
        
        document.getElementById("equal").onclick = function(){
        
            input.value = result
            
        }
        
        // expression = '';
    }
})




