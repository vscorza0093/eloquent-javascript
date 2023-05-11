## Definindo Uma Função

Uma definição de função nada mais é do que uma definição normal de uma variável, na qual o valor recebido pela variável é uma função. Por exemplo, o código a seguir define uma variável square que se refere a uma função que retorna o quadrado do número dado:
```js
var square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```
Uma função é criada por meio de uma expressão que se inicia com a palavra-chave function. Funções podem receber uma série de parâmetros (nesse caso, somente x) e um "corpo", contendo as declarações que serão executadas quando a função for invocada. O "corpo" da função deve estar sempre envolvido por chaves, mesmo quando for formado por apenas uma simples declaração (como no exemplo anterior).

Uma função pode receber múltiplos parâmetros ou nenhum parâmetro. No exemplo a seguir, makeNoise não recebe nenhum parâmetro, enquanto power recebe dois:
```js
var makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024
```
Algumas funções produzem um valor, como as funções power e square acima, e outras não, como no exemplo de makeNoise, que produz apenas um “efeito colateral”. A declaração return é usada para determinar o valor de retorno da função. Quando o controle de execução interpreta essa declaração, ele sai imediatamente do contexto da função atual e disponibiliza o valor retornado para o código que invocou a função. A palavra-chave return sem uma expressão após, irá fazer com que o retorno da função seja undefined.

Parâmetros e Escopos
Os parâmetros de uma função comportam-se como variáveis regulares. Seu valor inicial é informado por quem invocou a função e não pelo código da função em si.

Uma propriedade importante das funções é que variáveis definidas dentro do "corpo" delas, incluindo seus parâmetros, são locais à própria função. Isso significa, por exemplo, que a variável result no exemplo power será criada novamente toda vez que a função for invocada, sendo que as diferentes execuções não interferem umas nas outras.

Essa característica de localidade das variáveis se aplica somente aos parâmetros e às variáveis que forem declaradas usando a palavra-chave var dentro do "corpo" de uma função. Variáveis declaradas fora do contexto de alguma função são chamadas de globais (não locais), pois elas são visíveis em qualquer parte da aplicação. É possível acessar variáveis globais dentro de qualquer função, contanto que você não tenha declarado uma variável local com o mesmo nome.

O código a seguir demonstra esse conceito. Ele define e executa duas funções em que ambas atribuem um valor à variável x. A primeira função f1 declara a variável como local e então muda apenas seu valor. Já a segunda função f2 não declara x localmente, portanto sua referência a x está associada à variável global x definida no topo do exemplo:
```js
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);
// → outside

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);
// → inside f2
```
Esse comportamento ajuda a prevenir interferências acidentais entre funções. Se todas as variáveis fossem compartilhadas por toda a aplicação, seria muito trabalhoso garantir que o mesmo nome não fosse utilizado em duas situações com propósitos diferentes. Além disso, se fosse o caso de reutilizar uma variável com o mesmo nome, talvez você pudesse se deparar com efeitos estranhos de códigos que alteram o valor da sua variável. Assumindo que variáveis locais existem apenas dentro do contexto da função, a linguagem torna possível ler e entender funções como “pequenos universos”, sem termos que nos preocupar com o código da aplicação inteira de uma só vez.

Escopo Aninhado
O JavaScript não se distingue apenas pela diferenciação entre variáveis locais e globais. Funções também podem ser criadas dentro de outras funções, criando vários níveis de “localidades”.

Por exemplo, a função landscape possui duas funções, flat e mountain, declaradas dentro do seu corpo:
```js
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// → ___/''''\______/'\_
```

As funções flat e mountain podem “ver” a variável result porque elas estão dentro do mesmo escopo da função que as definiu. Entretanto, elas não conseguem ver a variável count uma da outra (somente a sua própria), pois elas estão definidas em escopos diferentes. O ambiente externo à função landscape não consegue ver as variáveis definidas dentro de landscape.

Em resumo, cada escopo local pode também ver todos os escopos locais que o contêm. O conjunto de variáveis visíveis dentro de uma função é determinado pelo local onde aquela função está escrita na aplicação. Todas as variáveis que estejam em blocos ao redor de definições de funções, são visíveis aos corpos dessas funções e também àqueles que estão no mesmo nível. Essa abordagem em relação à visibilidade de variáveis é chamada de escopo léxico.

Pessoas com experiência em outras linguagens de programação podem talvez esperar que qualquer bloco de código entre chaves produza um novo “ambiente local”. Entretanto, no JavaScript, as funções são as únicas coisas que podem criar novos escopos. Também é permitido a utilização de “blocos livres”:
```js
var something = 1;
{
  var something = 2;
  // Do stuff with variable something...
}
// Outside of the block again...
```
Entretanto, a variável something dentro do bloco faz referência à mesma variável fora do bloco. Na realidade, embora blocos como esse sejam permitidos, eles são úteis somente para agrupar o corpo de uma declaração condicional if ou um laço de repetição.

Se você acha isso estranho, não se preocupe, pois não está sozinho. A próxima versão do JavaScript vai introduzir a palavra-chave let, que funcionará como var, mas criará uma variável que é local ao bloco que a contém e não à função que a contém. 
### Essa mudança já foi feita, anotação para rever o conteúdo e entender as diferenças entre let e var


## Notação Por Declaração

Existe uma maneira mais simples de expressar “var square = function…”. A palavra-chave function também pode ser usada no início da declaração, como demonstrado abaixo:
```js 
function square(x) {
  return x * x;
}
```
Isso é uma declaração de função. Ela define a variável square e faz com que ela referencie a função em questão. Até agora tudo bem, porém existe uma pequena diferença nessa maneira de definir uma função.
```js
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}
```
O exemplo acima funciona, mesmo sabendo que a função foi definida após o código que a executa. Isso ocorre porque as declarações de funções não fazem parte do fluxo normal de controle, que é executado de cima para baixo. Elas são conceitualmente movidas para o topo do escopo que as contém e podem ser usadas por qualquer código no mesmo escopo. Isso pode ser útil em algumas situações, porque nos permite ter a liberdade de ordenar o código de uma maneira que seja mais expressiva, sem nos preocuparmos muito com o fato de ter que definir todas as funções antes de usá-las.

O que acontece quando definimos uma declaração de função dentro de um bloco condicional (if) ou um laço de repetição? Bom, não faça isso. Diferentes plataformas JavaScript usadas em diferentes navegadores têm tradicionalmente feito coisas diferentes nessas situações, e a última versão basicamente proíbe essa prática. Se você deseja que seu programa se comporte de forma consistente, use somente essa forma de definição de função no bloco externo de uma outra função ou programa.
```js
function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}
```

## Argumentos Opcionais

O código abaixo é permitido e executa sem problemas:
```js
alert("Hello", "Good Evening", "How do you do?");
```
A função alert, oficialmente, aceita somente um argumento. No entanto, quando você a chama assim, ela não reclama. Ela simplesmente ignora os outros argumentos e lhe mostra o seu "Hello".

O JavaScript é extremamente tolerante com a quantidade de argumentos que você passa para uma função. Se você passar mais argumentos que o necessário, os extras serão ignorados. Se você passar menos argumentos, os parâmetros faltantes simplesmente receberão o valor undefined.

A desvantagem disso é que, possivelmente - e provavelmente - você passará um número errado de argumentos, de forma acidental, para as funções e nada irá alertá-lo sobre isso.

A vantagem é que esse comportamento pode ser usado em funções que aceitam argumentos opcionais. Por exemplo, a versão seguinte de power pode ser chamada com um ou dois argumentos. No caso de ser invocada com apenas um argumento, ela assumirá o valor 2 para o expoente e a função se comportará com um expoente ao quadrado.
```js
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
```

## Closure

A habilidade de tratar funções como valores, combinada com o fato de que variáveis locais são recriadas toda vez que uma função é invocada; isso traz à tona uma questão interessante.

O que acontece com as variáveis locais quando a função que as criou não está mais ativa?

O código a seguir mostra um exemplo disso. Ele define uma função wrapValue que cria uma variável local e retorna uma função que acessa e retorna essa variável.
```js
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```
Isso é permitido e funciona como você espera: a variável ainda pode ser acessada. Várias instâncias da variável podem coexistir, o que é uma boa demonstração do conceito de que variáveis locais são realmente recriadas para cada nova chamada, sendo que as chamadas não interferem nas variáveis locais umas das outras.

A funcionalidade capaz de referenciar uma instância específica de uma variável local após a execução de uma função é chamada de closure. Uma função que closes over (fecha sobre) variáveis locais é chamada de closure.

Esse comportamento faz com que você não tenha que se preocupar com o tempo de vida das variáveis, como também permite usos criativos de valores de função.

Com uma pequena mudança, podemos transformar o exemplo anterior, possibilitando a criação de funções que se multiplicam por uma quantidade arbitrária.
```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10
```
A variável explícita localVariable do exemplo na função wrapValue não é necessária, pois o parâmetro em si já é uma variável local.

Pensar em programas que funcionam dessa forma requer um pouco de prática. Um bom modelo mental é pensar que a palavra-chave function "congela" o código que está em seu corpo e o envolve em um pacote (o valor da função). Quando você ler return function(...) {...}, pense como se estivesse retornando um manipulador que possibilita executar instruções computacionais que foram "congeladas" para um uso posterior.

No exemplo, multiplier retorna um pedaço de código "congelado" que fica armazenado na variável twice. A última linha do exemplo chama o valor armazenado nessa variável, fazendo com que o código "congelado" (return number * factor;) seja executado. Ele continua tendo acesso à variável factor que foi criada na chamada de multiplier e, além disso, tem acesso ao argumento que foi passado a ele (o valor 5) por meio do parâmetro number.

