const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");





async function animAlice() {

  try
  {
    const animObject = alice1.animate(aliceTumbling,aliceTiming);

    const Anim1Promise = await animObject.finished;

    const animObject2 = alice2.animate(aliceTumbling,aliceTiming);

    const Anim2Promise = await animObject2.finished;

    const animObject3 =  alice3.animate(aliceTumbling,aliceTiming);

    const Anim3Promise = await animObject3.finished;


 }
    catch(error) {
        console.error(`Could not animate: ${error}`);
    }
}



animAlice();