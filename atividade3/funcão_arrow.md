# **Função Arrow** 

As funções arrow são _functions_ escritas de maneira mais simplificada,para facilitar a leitura do código.

## Exemplo sem Arrow 
~~~~
function subtração (a,b){
    return a-b;
}
~~~~

~~~~
function somar2(a) {
    return a+2;
}
~~~~
~~~~
function diaDoMes() {
    return new Date().getDate();
}
~~~~

## Exemplo com Arrow

As funções arrow não utilizam a palavra-chave _function_ ou _return_. Utiliza-se a (seta) *=>* para definir o retorno da função. Exemplos:

```const subtracaoV2 = (a,b) => a-b;```

```const somar2V2 = (a) => a+2;```

```const diaDoMesV2 = () => new Date.getDate();```

## Funções com várias instruções

Apesar de possuir uma sintaxe mais enxuta,as **_arrow functions_** em funções maiores não apresenta uma diferença significativa.

### Exemplo sem arrow

~~~
function superFuncao(a, b) {
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}
~~~

~~~
const superFunçaoV2 = (a,b) => {
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}
~~~
