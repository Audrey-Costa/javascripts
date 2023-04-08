function geradorDeListaEncadeada(array){
  const lista = {
    proximo: null
  }
  let atual = lista;
  array.map((element) => {
    atual.proximo = {
      valor: element,
      proximo: null
    }
    atual = atual.proximo;
  })
  return lista;
}

function obterValorDaLista(array, positicao){
  const lista = geradorDeListaEncadeada(array);
  let atual = lista.proximo;
  let index = 0;
  while(atual && index < positicao){
    atual = atual.proximo;
    index++;
  }
  if(!atual === null){
    return atual.valor;
  }
  return null;
}

function inserirNo(array, valor, positicao){
  const lista = geradorDeListaEncadeada(array);
  const no = {
    valor,
    proximo: null
  }
  let atual = lista
  let index = 0;
  while(atual && index < positicao){
    atual = atual.proximo;
    index++;
  }
  if(!atual === null){
    no.proximo = atual.proximo;
    atual.proximo = no;
    }
  return lista;
}

function atualizarNo(array, valor, positicao){
  const lista = geradorDeListaEncadeada(array);
  let atual = lista.proximo;
  let index = 0;
  while(atual && index < positicao){
    atual = atual.proximo;
    index++;
  }
  if(!atual === null){
    atual.valor = valor;
  }
  return lista;
}

function removerNo(array, positicao){
  const lista = geradorDeListaEncadeada(array);
  let atual = lista;
  let index = 0;
  while(atual.proximo && index < positicao){
    atual = atual.proximo;
    index++;
  }
  if(atual.proximo){
    atual.proximo = atual.proximo.proximo;
  }
  return lista;
}

function listaEncadeadaParaArray(lista){
  let atual = lista.proximo;
  let index = 0;
  const array = [atual.valor];
  while(atual.proximo){
    atual = atual.proximo;
    array.push(atual.valor);
    index++;
  }
  return array;
}

// Lista encadeada
//console.log(JSON.stringify(geradorDeListaEncadeada([1,2,3])));
//console.log(JSON.stringify(inserirNo([1,2,3,4,5], "a", 9)));
//console.log(JSON.stringify(obterValorDaLista([1,2,3,4,5], 4)));
//console.log(JSON.stringify(atualizarNo([1,2,3,4,5], 6, 10)));
//console.log(JSON.stringify(removerNo([1,2,3,4,5], 7)));
//console.log(listaEncadeadaParaArray(valorgeradorDeListaEncadeada([1,2,3,4,5])));
//console.log(JSON.stringify(obterValorDaLista(listaEncadeadaParaArray(removerNo(listaEncadeadaParaArray(atualizarNo([1,2,3,4,5,6], "A", 3)), 2)), 1)));