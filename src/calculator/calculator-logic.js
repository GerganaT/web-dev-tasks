const calculatorScreenContent = document.getElementById("calculator-screen-content");

const arithmeticButtonsValues = ["-","+","*","/"];

const cssStyleLink = document.getElementById("main-stylesheet-link");

const cssFlexStyleFilePath = "calculator-flex-style.css";
const cssFloatsStyleFilePath = "calculator-floats-style.css";
const cssGridStyleFilePath ="calculator-grid-style.css";

const selectLayout =  document.getElementById("select-layout");

selectLayout.addEventListener("change", () => {
    switch(selectLayout.value){
       case "flex-layout": cssStyleLink.setAttribute("href", cssFlexStyleFilePath ); break
       case "floats-layout": cssStyleLink.setAttribute("href", cssFloatsStyleFilePath ); break
       case "grid-layout": cssStyleLink.setAttribute("href", cssGridStyleFilePath );
    }
} )

    document.querySelectorAll("button").forEach( calculatorButton => {
    
        calculatorButton.addEventListener("click",()=> {
            if((isCalculatorScreenDefaultingToZero()) && isButtonValueArithmeticOperator(calculatorButton.value)){
                return ;
            }
            
            switch(calculatorButton.value){
              case "CE": clearScreenContent(); break;
              case "=": displayCalculationResult(); break ;
              default: { removeDefaultScreenZero();
                displayArithmeticOperation(calculatorButton.value);
              }
            }
        })
    }
    )

function isCalculatorScreenDefaultingToZero() {
    return calculatorScreenContent.textContent === "0";
}

function clearScreenContent() {
    calculatorScreenContent.textContent = "0";
}

function displayCalculationResult() { 
        calculatorScreenContent.textContent = Math.round(eval(calculatorScreenContent.textContent));
}

    function removeDefaultScreenZero(){
        if(calculatorScreenContent.textContent.startsWith("0")){
            calculatorScreenContent.textContent = calculatorScreenContent.textContent.replace("0","");
        }
    }

    function displayArithmeticOperation(calculatorButtonValue){
        
        // prevent adding multiple arithmetic operators on screen as the task only requires
        // calculation of two numbers
        if(isArithmeticOperatorVisibleOnCalculatorScreen()){
            if(!isButtonValueArithmeticOperator(calculatorButtonValue)){
                addNewCharacterToScreen(calculatorButtonValue)};
            }else{
                addNewCharacterToScreen(calculatorButtonValue);
            }
    }

    function isArithmeticOperatorVisibleOnCalculatorScreen() {
        return arithmeticButtonsValues.some(value => calculatorScreenContent.textContent.includes(value));
    }

    function isButtonValueArithmeticOperator(calculatorButtonValue){
        return arithmeticButtonsValues.includes(calculatorButtonValue);
    }
    
    function addNewCharacterToScreen( newCharacter ){
        calculatorScreenContent.textContent += newCharacter;
    }
