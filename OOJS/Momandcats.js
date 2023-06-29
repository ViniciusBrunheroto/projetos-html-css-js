const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let i = 1;
// Add your code here

 const catInfo = JSON.parse(catString);


for (const mother of catInfo)
{
  if (catInfo.lastIndexOf(mother) === (catInfo.length-1))
     motherInfo = motherInfo + 'and ' + mother.name + '.';
  else
     motherInfo = motherInfo + mother.name + ',';


   for (const kit of mother.kittens)
   {
        total = total + 1;
        if (kit.gender === "m")
        {       
          male = male + 1;
        }
    }
   i++;
}

 kittenInfo = 'Total of cats: ' + total + ' | Males: '+ male + ' | Female: ' + (total - male); 



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    