function geradorDeListaDuplamenteEncadeada(array){
  const lista = {
    proximo: null,
    anterior: null
  }
  let atual = lista;
  array.map((element) => {
    const no = {
      valor: element,
      proximo: atual.proximo,
      anterior: atual.proximo? atual.proximo.anterior : lista.anterior
    }
    if(!atual.proximo){
      lista.anterior = no;
    }else{
      atual.proximo.anterior = no;
    }
    atual.proximo = no;
    atual = atual.proximo;
  })
  return lista;
}

function printValores(lista){
  let atual = lista.proximo;
  while(atual){
    console.log(atual.valor);
    atual = atual.proximo;
  }
}

function printValoresReverso(lista){
  let atual = lista.anterior;
  while(atual){
    console.log(atual.valor);
    atual = atual.anterior;
  }
}


//printValores(geradorDeListaDuplamenteEncadeada([5,6,2,7,3]));
//printValoresReverso(geradorDeListaDuplamenteEncadeada([5,6,2,7,3]));