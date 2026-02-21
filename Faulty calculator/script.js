const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".box");
let num1 = "";
let num2 = "";
let oprt = "";
let result = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "clear"){
            num1 = "";
            num2 = "";
            oprt = "";
            screen.textContent = "";
        }

        else if (value === "=") {
            num1 = Number(num1);
            num2 = Number(num2);

            if (oprt === "+") {
                if (Math.random() < 0.1) {
                    result=num1 - num2;
                }
                else {
                    result=num1 + num2;
                }

            }
            else if (oprt === "-") {
                if (Math.random() < 0.1) {
                    result=num1 / num2;
                }
                else {
                    result=num1 - num2;
                }
            }
            else if (oprt === "*") {
                if (Math.random() < 0.1) {
                    result=num1 + num2;
                }
                else {
                    result=num1 * num2;
                }
            }
            else if (oprt === "/") {
                if (Math.random() < 0.1) {
                    result=num1 ** num2;
                }
                else {
                    result=num1 / num2;
                }
            }
            else {
                result="invalid operator ";
            }
            screen.textContent = result;
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            oprt =value;
            screen.textContent += value ;
        }
        else{
            if (oprt === ""){
                num1 = num1 + value;   
             }
             else{
                num2 = num2 + value;
             }
             screen.textContent += value;
        }
    });
});
