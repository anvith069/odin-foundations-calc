function add(a,b){
    return +a + +b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

let operand1='';
let operand2='';
let operator='';
let result='';
const oprss = '+-*/';

dsply=operand1+' '+operator+' '+operand2;

function operate(operand1,operator,operand2){
    switch(operator){
        case '+':
            result=add(operand1,operand2);
            break;
        case '-':
            result=sub(operand1,operand2);
            break;
        case '*':
            if(operand2==0){
                result=`Multiplication by zero! equals ${operand1}`;
                return result;
            }
            result=mul(operand1,operand2);
            break;
        case '/':
            if(operand2==0){
                result='ERROR! Division by zero';
                return result;
            }
            result=div(operand1,operand2);
            break;
        default:
            result=`no operator entered, equals ${operand1}`;
            return result;
    }

    return Math.round(result*1000)/1000;
}

const buttons = [...document.querySelectorAll('.button')];
const digitbtns = [...document.querySelectorAll('.digit')];
const display = document.querySelector('.calc-display');
const oprbtns= [...document.querySelectorAll('.operate')];

for(const digitbtn of digitbtns){
    digitbtn.addEventListener('click',()=>{
        if(operator==='')  {
            if(operand1.includes('.')&&digitbtn.textContent=='.') operand1+='';
            else operand1+=digitbtn.textContent;
        }
        else if(oprss.includes(operator)) {
            if(operand2.includes('.')&&digitbtn.textContent=='.') operand2+='';
            else operand2+=digitbtn.textContent;
        }
        display.textContent=operand1+' '+operator+' '+operand2;
    });
}

for(const oprbtn of oprbtns) {
    oprbtn.addEventListener('click',()=>{
        if(operator===''){
            operator=oprbtn.textContent;
            display.textContent=operand1+' '+operator+' '+operand2;
        }
        else if(oprss.includes(operator)){
            if('+-'.includes(oprbtn.textContent)&&operand2=='') {
                operand2+=oprbtn.textContent;
                display.textContent=operand1+' '+operator+' '+operand2;
            }
            else{
                operand1=operate(operand1,operator,operand2);
                operator=oprbtn.textContent;
                operand2='';
                display.textContent=operand1+' '+operator+' '+operand2;
            }
        }
    });
}

const eqlbtn = document.querySelector('#equalbtn');
eqlbtn.addEventListener('click',()=>{
    operand1=operate(operand1,operator,operand2);
    operand2='';
    operator='';
    display.textContent=operand1+' '+operator+' '+operand2;
});

const clrbtn = document.querySelector('#clearbtn');
clrbtn.addEventListener('click',()=>{
    operand1='';
    operand2='';
    operator='';
    result='';
    display.textContent=operand1+' '+operator+' '+operand2;
});

const bckspcbtn = document.querySelector('#backspace');
bckspcbtn.addEventListener('click',()=>{
    if(operand1==''&&operator==''&&operand2==''){
        display.textContent=operand1+' '+operator+' '+operand2;
    }
    else if(operand1!==''&&operator==''&&operand2==''){
        operand1=`${operand1}`;
        operand1=operand1.split('').slice(0,operand1.length-1).join('');
        display.textContent=operand1+' '+operator+' '+operand2;
    }
    else if(operand1!==''&&operator!==''&&operand2==''){
        operator='';
        display.textContent=operand1+' '+operator+' '+operand2;
    }
    else if(operand1!==''&&operator!==''&&operand2!==''){
        operand2=operand2.split('').slice(0,operand2.length-1).join('');
        display.textContent=operand1+' '+operator+' '+operand2;
    }
});

const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d2');
const d3 = document.querySelector('#d3');
const d4 = document.querySelector('#d4');
const d5 = document.querySelector('#d5');
const d6 = document.querySelector('#d6');
const d7 = document.querySelector('#d7');
const d8 = document.querySelector('#d8');
const d9 = document.querySelector('#d9');
const d0 = document.querySelector('#d0');
const ddot = document.querySelector('#ddot');
const addop = document.querySelector('#addop');
const subop = document.querySelector('#subop');
const mulop = document.querySelector('#mulop');
const divop = document.querySelector('#divop');

window.addEventListener('keydown',(e)=>{
    if(e.key==='1') d1.click();
    else if(e.key==='2') d2.click();
    else if(e.key==='3') d3.click();
    else if(e.key==='4') d4.click();
    else if(e.key==='5') d5.click();
    else if(e.key==='6') d6.click();
    else if(e.key==='7') d7.click();
    else if(e.key==='8') d8.click();
    else if(e.key==='9') d9.click();
    else if(e.key==='0') d0.click();
    else if(e.key==='.') ddot.click();
    else if(e.key==='+') addop.click();
    else if(e.key==='-') subop.click();
    else if(e.key==='*') mulop.click();
    else if(e.key==='/') divop.click();
    else if(e.key==='Backspace') bckspcbtn.click();
    else if(e.key==='Delete') clrbtn.click();
    else if(e.key==='='||e.key==='Enter') eqlbtn.click();
});