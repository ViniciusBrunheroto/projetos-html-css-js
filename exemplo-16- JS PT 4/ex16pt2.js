var select = document.querySelector('select');
var html = document.querySelector('.output');


select.addEventListener("change", teste)

function teste() {
  var choice = select.value;

  // ADD SWITCH STATEMENT
  switch(choice)
  {
    case 'white':
      update('white','black');
      break;

    case 'black':
      update('black','white');
      break;
      
    case 'purple':
      update('purple','white');
      break;
      
    case 'yellow':
      update('yellow','white');
      break;

    case 'psychdelic':
      update('black','red');
      break;      
  }



}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}