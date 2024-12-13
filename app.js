const input = document.getElementById("input");
const btn = document.getElementsByTagName("button");

Array.from(btn).forEach(button => {
    button.addEventListener("click", () => {
        const process=button.innerText;
        if(process === '='){
            input.value=eval(input.value);
        }
        else if(process === 'x'){
            input.value +='*';
        }
        else if(process === '%'){
            input.value +='/';
        }
        else if(process === 'clr'){
            input.value = " ";
        }
        else{
        input.value += process;
        }
    });
});


