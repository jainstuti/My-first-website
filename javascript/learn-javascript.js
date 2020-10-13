var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form=document.getElementById("xIsWhatPercentOfy");

form.addEventListener('submit',function(even){
    if(!numField1.value || !numField2.value){
        alert("please enter the values");
    }
    else{
        var x=parseFloat(numField1.value);
        var y=parseFloat(numField2.value);
        var result=(x/y)*100;
        
        resultField.innerText="Answer: "+result+"%";
        even.preventDefault();
    }
});
//numField1.value = "20";  //to give the input in the input box using js
//resultField.innerText = "res"; // to change what is written on the pg                                   // using js
//alert(message);
//console.log(message);// this is better since alert created a pop up and all the browsers donot support alert but support sondole.log()