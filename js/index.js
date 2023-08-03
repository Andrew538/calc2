let resultElement = document.querySelector('.result-input')
let inputOne = document.querySelector('.input-one')
const inputTwo = document.querySelector('.input-two')
const btnInc = document.querySelector('.inc')
const btnDec = document.querySelector('.dec')
const buttonRes = document.querySelector('.result')
const buttonAction = document.querySelectorAll('.action')

// С помощью forEach перебираем все кнопки
buttonAction.forEach(item => {

    item.addEventListener('click', () => {
        // Получаем символы (контент) которые сдержаться в кнопках ( знаки - плюс, минус, разделить и умножить)
       let symbol = item.textContent 
        console.log(symbol)


        function printResult(result) {
            if (result < 0) {
                resultElement.style.color = 'red'
            } else {
                resultElement.style.color = 'green'
            }
            resultElement.textContent = result
        }
        function computeNubersWitAction(input1, input2, actionSymbol) {
            const num1 = Number(input1.value)
            const num2 = Number(input2.value)
        
            
            // С помощью if else сделали условия для каждого оператора
            if (actionSymbol == '+') {
                return num1 + num2
            } else if (actionSymbol == '-') {
                return num1 - num2
            } else if (actionSymbol == '*') {
                return num1 * num2
            } else if (actionSymbol == '/') {
                return num1 / num2
            }
        
        }
    
        // По клику на кнопку выводим результат
        buttonRes.addEventListener('click', (event) => {
            event.preventDefault()
            const result = computeNubersWitAction(inputOne, inputTwo, symbol)
            printResult(result)
       
        })
    
    })

})



       
















