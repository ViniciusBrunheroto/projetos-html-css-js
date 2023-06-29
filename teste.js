var output = document.querySelector('.output');
output.innerHTML = '';

var i;
for (i= 10 ; i > 0;i--)
{
  var para = document.createElement('p');

   if (i === 10){
	para.textContent = 'Contagem regressiva' + i;
   } else if (i === 0){
	para.textContent = 'Lançar!';
   } else { 
	para.textContent = i;
   }	
  output.appendChild(para);
}