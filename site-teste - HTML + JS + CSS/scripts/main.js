let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
     if(meuSrc === 'imagens/refrigerante-colorido-bebe-tiro-macro.jpg') {
      minhaImagem.setAttribute ('src','imagens/bala-delicado-jelly-bens-anos-80.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/refrigerante-colorido-bebe-tiro-macro.jpg');
    }

}


let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {

   let meuNome = prompt('Por favor, digite seu nome.');

   if(!meuNome || meuNome === null) {
   	alert('Digite um nome válido.');
   	defineNomeUsuario();
   }
   else
   {
   		// localStorage é uma API que nos permite guardar dados no navegador
   		 localStorage.setItem('nome', meuNome);
   		 meuCabecalho.innerHTML = 'Seja bem vindo ao site, ' + meuNome;
   }


 }



if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Seja bem vindo ao site, ' + nomeGuardado;
}

meuBotao.onclick = function() { 
	defineNomeUsuario();
}