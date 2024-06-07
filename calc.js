let firstNumberOnScreen = ''; // first number
let secondNumberOnScreen = ''; // second number 
let sign = ''; // Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p'); // Экран куда выводятся результат и цифры (числа)

function clearAll()
{
    firstNumberOnScreen = '';
    secondNumberOnScreen = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent; // Получили нажатую кнопку

    if(digit.includes(key)) // Проверка на нажатие кнопок 0-9 или .
    {
        if(secondNumberOnScreen === '' && sign === '')
        {
            firstNumberOnScreen+= key;
            out.textContent = firstNumberOnScreen;
        }
        else if(firstNumberOnScreen !== '' && secondNumberOnScreen !== '' && finish)
        {
            secondNumberOnScreen = key;
            finish = false;
            out.textContent = secondNumberOnScreen;
        }
        else
        {
            secondNumberOnScreen +=key;
            out.textContent = secondNumberOnScreen;
        }
    }

    if(action.includes(key)) // Проверка на нажатие знаков
    {
        sign = key;
        out.textContent = sign;
        return;
    }

    if(key === '=')
    {
        if(secondNumberOnScreen === '') secondNumberOnScreen = firstNumberOnScreen;
        switch(sign)
        {
            case "+":
                firstNumberOnScreen = (+firstNumberOnScreen) + (+secondNumberOnScreen);
                break;
            case "-":
                firstNumberOnScreen = firstNumberOnScreen - secondNumberOnScreen;
                break;
            case "/":
                if(secondNumberOnScreen === '0') 
                {
                    out.textContent = "Error";
                    firstNumberOnScreen = '';
                    secondNumberOnScreen = '';
                    sign = '';
                    return;
                }
                firstNumberOnScreen = firstNumberOnScreen / secondNumberOnScreen;
                break;
            case "X":
                firstNumberOnScreen = firstNumberOnScreen * secondNumberOnScreen;
                break; 
        }
        finish = true;
        out.textContent = firstNumberOnScreen;
    }
}
































