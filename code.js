let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');
let screenBlankValue = '';
for(item of buttons){
   item.addEventListener('click', (e)=>{
         buttonText = e.target.innerText;
         console.log('Button Text is',buttonText);

         if(buttonText=='x'){
            buttonText = '*';
            screenBlankValue += buttonText;
            screen.value = screenBlankValue ;
         }
         else if(buttonText=='C'){
            screenBlankValue = " ";
            screen.value = screenBlankValue;
         }
         else if(buttonText=='='){
            screen.value = eval(screenBlankValue);
         }
         else{
            screenBlankValue += buttonText;
            screen.value = screenBlankValue ;
         }
   })
}

