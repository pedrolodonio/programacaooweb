# Promise 
 
 Classe que permite a construção de funções de processamento assíncrono representando um valor que poderá estar disponível no futuro.

## Sintaxe

~~~
new Promise((resolve: Function, reject: Function) => void)
~~~

**resolve:** função para retornar o resultado da promise.

**reject:** função para retornar o erro da promise.

## Exemplos

Ex 1:
No exemplo abaixo executamos uma promise que resultou em uma falha, ou seja, nossa execução foi direcionada ao bloco _catch_. Veremos no bloco abaixo como esse tratamento é feito:
~~~
function getTodosOsUsuarios () {
  return new Promise((resolve, reject) => {
    reject(new Error('Não foi possível recuperar a lista de usuários'))
  })
}

getTodosOsUsuarios()
  .catch(err => console.log(err.message)) // Não foi possível recuperar a lista de usuários
~~~

Ex 2:

Vamos construir uma Promise a partir de um _setTimeout_ e em seguida resolve-la com o _then_.
~~~
const timeout = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

timeout(3000)
  .then(function() { // executa o bloco após 3 segundos
    console.log('passou 3 segundos')
  })
~~~

Na linha 2 retornamos uma instância de Promise que recebe os argumentos resolve e reject ambas funções que representam "resolvido" ou "rejeitado", respectivamente. Elas são utilizadas como retorno para o resultado ou um erro do tipo Error da Promise.

Na linha 7 executamos a função timeout que retorna a promise que construímos anteriormente. É importante lembrar que toda promise retorna dois métodos recursivamente, o then e catch: o primeiro é executado quando a promise tem sucesso e o segundo quando ocorre uma falha na execução.
