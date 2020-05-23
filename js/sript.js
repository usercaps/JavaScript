// первая кнопка переход на другую страницу
function firstButton()
{
	document.location.href = "second.html";
};
// вторая кнопка меняет цвет
let parag = document.getElementById("some__text");

function secondButton() 
{
    if(parag.style.color === 'red', parag.style.fontSize === '15px'){
        parag.style.color = 'blue';
        parag.style.fontSize = '50px';
    } else{
        parag.style.color = 'red';
        parag.style.fontSize = '15px';
    }
};

// третья кнопка удаление содержимого и отрисовка макета flexbox
let some = document.getElementById("flex-Blox");

function thirdButton()
{
    if(some.style.display === 'none'){
        some.style.display = 'flex';
    } else{
        some.style.display = 'none';
    }
};
 

// четвертая кнопка обновляет страницу
function forthButton()
{
    location.reload();
};


// вывод среднего значения температуры

    function sum( term ) {
        var sum = 0;
        for( var el in term ) {
          if( term.hasOwnProperty( el ) ) {
            sum += parseFloat( term[el] );
          }
        }
        return sum;
      }

      var term = {Canada: 10, Germany: 13, Spain: 22, InMyHouse: -10}
      var summed = sum( term );
      document.write('temperature is - '+ summed/4);

    //   возвращает максимальную температуру.

    var term = {
        Canada: 10, 
        Germany: 13,
        Spain: 22, 
        InMyHouse: -10
    }
    var max = getMaxValue
    function getMaxValue(term){
        var max = term[0]; // берем первый элемент массива
        for (var i = 0; i < term.length; i++) { // переберем весь массив
            // если элемент больше, чем в переменной, то присваиваем его значение переменной
            if (max < term[i]) max = term[i]; 
        }
        // возвращаем максимальное значение
        return max;
    }
    
   document.write('<br>Max value is ' + Math.max(term));