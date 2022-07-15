
//  Targetting both the screen and button

let screen= document.getElementById('displayscreen');
let button= document.querySelector('#calc-buttons');
let inputStr= '';
let allSymbols= '';

button.addEventListener('click',test)

const render=(str) => {
  screen.innerText=str;
}
function test(e){
   if(e.target.tagName == 'BUTTON') {
     let val=e.target.innerText;
     switch(val) {
      case 'Reset':
        inputStr = '';
        break;
      case 'Del':
           if(inputStr.length > 0) {
          inputStr = inputStr.substring(0,inputStr.length-1);
          }
          break;
      case '+':
          allSymbols = '+';
          inputStr+=val
          break;
      case '-':
          allSymbols = '-';
          inputStr+=val
          break;
      case '/':
          allSymbols = '/';
          inputStr+=val
          break;
      case 'x':
          allSymbols = '*';
          inputStr+='*'
          break;
      case '=':
         let values = inputStr.split(`${allSymbols}`);
        
         inputStr= calculate(values[0],allSymbols,values[1]).toString();
          break;
      default :
       inputStr+=val
     }
     
    //  function to perform mathematical expression

    function calculate(val1,symb,val2){
           return eval(val1+symb+val2);

    }
  render(inputStr); 
   }
    
}


