# Javascripts

Alguns scripts simples feitos para testes técnicos ou prática de novos conceitos em javascript.

    - [Buscador de Números Primos](#buscador-de-números-primos)
    - [Buscador de Números Primos](#buscador-de-números-primos)
- [](#)
- [Buscador de Números Primos](#buscador-de-números-primos)
- [](#)
- [Conversor de Bytes](#conversor-de-bytes)
- [](#-1)
    - [Verificador de Palindromos](#verificador-de-palindromos)
    - [Verificador de Palindromos](#verificador-de-palindromos)
- [](#-2)
- [Verificador de Palindromos](#verificador-de-palindromos)
- [](#-2)
- [Yield](#yield)
### Buscador de Números Primos

> ***Script para encontrar e operar números primos.***<br>

1. `findAllPrimes`

    Faz uma busca por todos os números primos existentes menores ou igual ao número de entrada.

    ```js
    function findAllPrimes(num) {
      let i = 2;
      let primes = [2];
      while (i <= num) {
        let p = true;
        for(const element of primes){
          if(i%element===0){
            p = false;
            i++;
            break;
          }
        }
        if(!p){
          continue;
        }
        if(i > num){
          break;
        }
        primes.push(i);
        i++
      }
      return primes;
    };
    ```


2. `isPrime`

   
    Retorna `true` se o número `num` for um número primo, e `false` caso não seja.

    ```js
    function isPrime(num){
      const primes = findAllPrimes(num);
      if (primes[primes.length - 1] === num){
        console.log(`O número ${num} é primo!`);
        return true;
      }
      console.log(`O número ${num} não é primo!`);
      return false;
    }
    ```
3. `sumPrimeNumbers`

    Soma todos os números primos encontrados menores que o número fornecido `num`.
    ```js
    function sumPrimeNumbers(num){
      const primes = findAllPrimes(num);
      let initialValue = 0;
      const sum = primes.reduce((sum, currentValue) => sum + currentValue, initialValue);
      console.log(sum);
      return sum;
    }
    ```

#

### Conversor de Bytes

> ***Script que converte o valor em bytes para B, KB, MB, GB ou TB de acordo com o valor de entrada.***<br>

```js
console.log("Digite o Número de Bytes");
function conversor(Bytes){
  let units = ["B", "KB", "MB", "GB", "TB"];
  let size = Bytes;
  let unit = units[0];
  for(const element of units){
    if(size/1024>=1){
      size /= 1024;
    }else{
      unit = element;
      break
    }
  }
  size = size.toFixed(2);
  console.log(size + " " + unit);
}
```
#

### Verificador de Palindromos
#
### Yield

> ***Script de teste de funções geradoras.***<br>

```js
function* g4() {
  yield* [1, 2, 3];
  return 'foo';
}

var result = "boo";

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(result);
```
