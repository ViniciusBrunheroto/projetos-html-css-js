
const x = document.getElementsByClassName('btn')

for (let i = 0; i < x.length; i++) {
  const ev = x[i].id
  atribuirEvento(ev)
}

function random (number) {
  return Math.floor(Math.random() * (number + 1))
}

function atribuirEvento (id) {
  document.getElementById(id).addEventListener('click', function (e) {
    const oe = document.getElementById('textinput1').value
    console.log(oe)
    // PARTE 1: Mudando a cor de fundo e do botão ao clicar no botão
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
    document.body.style.backgroundColor = rndCol
    e.target.style.backgroundColor = rndCol

    // PARTE 2: Verificar se é para limpar tudo
    if (id === 'b7') {
      limpartd()
    }
    // PARTE 3: Verificar se todos os campos já estão preenchidos
    let cont = 0
    let tes
    for (let i = 0; i < x.length - 2; i++) {
      tes = 'textinput' + (i + 1)
      if (document.getElementById(tes).value !== '') {
        cont++
      }
    }
    // PARTE 4: Verificar se é uma condição de embaralhamento
    if (cont === 5 || id === 'b6') {
      window.alert('Será feito um embaralhamento!')
      randomize()
    } else if (id !== 'b7') {
      // PARTE 5: Randomizando os textos entre as caixas de texto
      const texto = document.getElementById('textinput1').value
      const rndm = Math.floor(Math.random() * 4 + 2)
      const strla = 'textinput' + rndm
      if (!oe.trim()) {
        termExecucao()
      } else if (document.getElementById(strla).value === '') {
        document.getElementById(strla).value = texto
      } else {
        window.alert('Você tentou inserir na caixa de texto ' + strla + ', que já está preenchida!')
      }
    }
  }
  )
}
function limpartd () {
  for (let i = 0; i < x.length - 2; i++) {
    const pos = 'textinput' + (i + 1)
    document.getElementById(pos).value = ''
  }
}

//  Função para embaralhar um vetor de elementos
function fisherYatesShuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [arr[i], arr[j]] = [arr[j], arr[i]] // swap
  }
}

function randomize () {
  const arr = []
  let tes
  // 1ª Parte
  for (let i = 0; i < x.length - 2; i++) {
    tes = 'textinput' + (i + 1)
    arr[i] = document.getElementById(tes).value
  }
  // embaralhar vetor
  fisherYatesShuffle(arr)
  // 2ª Parte
  for (let i = 0; i < x.length - 2; i++) {
    tes = 'textinput' + (i + 1)
    document.getElementById(tes).value = arr[i]
  }
}

function termExecucao () {
  window.alert('Não foi possível fazer a randomização de textos pois não há conteúdo na caixa de texto 1')
}
