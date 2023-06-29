/* Revisão JavaScript

-----------------------------------------

Bases principais:
-Program. Orientada a Objetos
-Program. Funcional

-----------------------------
Tipos de dados:

-Number (engloba int e float)
-BigInt

	*arithmetic operators

	*Math object = funções matematicas e constantes
		Math.sin(3.5)
		Math.PI

	*String -> Number
		1. parseInt()
		2. parseFloat()
		3. Number()

	*NaN e Infinity
--------------------------------
-String (armaz. texto, engloba char)

	" " ou ' '

	*compr. da string = string.length

	*utility methods

	*
		const age = 25;

		Concatenação de Stings:
		console.log("I am "+ age + " years old. ");

		Template literal:
		console.log(`I am ${age} years old.`)
--------------------------------
-Boolean (true - false)

false, 0, "", NaN, null, undefined ===> false
other values ===> true

Boolean("") => false
Boolean(234) => true
--------------------------------
-Symbol: criar identificadores únicos

registered symbols
well-known symbols
--------------------------------
-Undefined: ausência de valor
-Null : non-value

Tipos de Objetos:
-Function
-Array
-Date
-RegExp
-Error


Operadores lógicos(ou bit a bit):
	&&: AND
	||: OR
	!: NOT


Variáveis:
	-LET: variaveis a nivel de bloco
	(pode-se mudar sempre o tipo=> dinamicamente tipada)
	-CONST: valores nunca mudam
	-VAR: ultrapassadas para o JS moderno

Operadores:
	+
	-
	*
	/
	% : resto
	** : exponenciação

	=
	+=
	-=

	x+=5 => x= x + 5
	++: incremento
	--: decremento

	*Comparadores (strings e numeros):
	>
	<
	<=
	>=

	== : coerção de tipo
	!=

	===: não tem coerção de tipo
    !==



Gramática:
	-Ident. não podem ser uma das palavras reservadas
	-Ponto e vírgula são OPCIONAIS



Estruturas de controle:

	* IF - ELSE
	let name = "kittens";
	if (name === "puppies") {
	  name += " woof";
	} else if (name === "kittens") {
	  name += " meow";
	} else {
	  name += "!";
	}
	name === "kittens meow";

	Não tem ELIF!


	*SWITCH
	switch (action) {
	  case "draw":
	    drawIt();
	    break;
	  case "eat":
	    eatIt();
	    break;
	  default:
	    doNothing();
	}


Estruturas de repetição:

	*WHILE
	while(true){

	}

	*DO WHILE
	let input;
	do {
	  input = get_input();
	} while (inputIsNotValid(input));


	*FOR
	for (let i = 0; i < 5; i++) {
	  // Will execute 5 times
	}

	*FOR OF
	for (const value of array) {
	  // do something with value
	}

	*FOR IN
	for (const property in object) {
	  // do something with object property
	}




JS ERRORS:


	*TRY...CATCH
	try {
	  buildMySite("./website");
	} catch (e) {
	  console.error("Building site failed:", e);
	}

	*THROW
	function buildMySite(siteDirectory) {
	  if (!pathExists(siteDirectory)) {
	    throw new Error("Site directory does not exist");
	  }
	}

	*use of TypeError / RangeError

	try {
	  buildMySite("./website");
	} catch (e) {
	  if (e instanceof RangeError) {
	    console.error("Seems like a parameter is out of range:", e);
	    console.log("Retrying...");
	    buildMySite("./website");
	  } else {
	    // Don't know how to handle other error types; throw them so
	    // something else up in the call stack may catch and handle it
	    throw e;
	  }
	}



OBJECTS: (possui propriedades e métodos)
	coleções de pares chave-valor

	*SINTAXE LITERAL (Objeto Literal)
	const obj = {
	  name: "Carrot",
	  for: "Max",
	  details: {
	    color: "orange",
	    size: 12,
	  },
	};

	Acesso às propriedades do objeto:

	1. DOT (PONTO)
		obj.name = "Simon";
		const name = obj.name;

	2. BRACKETS (COLCHETES)
		obj["name"] = "Simon";
		const name = obj["name"];

	const userName = prompt("what is your key?");
	obj[userName] = prompt("what is its value?");


	Encadeamento de propriedades
	obj.details.color; // orange
	obj["details"]["size"]; // 12


	-Two separately created objects will never be equal (!==), because they are different references.
	-If you hold two references of the same object, mutating one would be observable through the other.


	*CONSTRUTORES
	function Person(name) {
	  this.name = name;
	  this.introduceSelf = function () {
	    console.log(`Hi! I'm ${this.name}.`);
	  };
	}

	const salva = new Person("Salva");
	salva.name;
	salva.introduceSelf(); // "Hi! I'm Salva."

	const frankie = new Person("Frankie");
	frankie.name;
	frankie.introduceSelf(); // "Hi! I'm Frankie."




CLASSES:

	class Person {
	  name;

	  constructor(name) {
	    this.name = name;
	  }

	  introduceSelf() {
	    console.log(`Hi! I'm ${this.name}`);
	  }
	}

	const giles = new Person("Giles");
	giles.introduceSelf(); // Hi! I'm Giles


	*SUBCLASSES(HERANÇA):
		class Professor extends Person {
		  teaches;

		  constructor(name, teaches) {
		    super(name);
		    this.teaches = teaches;
		  }

		  introduceSelf() {
		    console.log(
		      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
		    );
		  }

		  grade(paper) {
		    const grade = Math.floor(Math.random() * (5 - 1) + 1);
		    console.log(grade);
		  }
		}

		const walsh = new Professor("Walsh", "Psychology");
		walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

		walsh.grade("my paper"); // some random grade



	*ENCAPSULAMENTO:

		-atributos privados
		-métodos privados
		uso do #



ARRAYS:

	*Array literal:
		const a = ["dog", "cat", "hen"];


	*USO DO LENGTH:
		a.length; // 3


	*Out-of-bounds indexing doesn't throw. If you query a non-existent array index,
	you'll get a value of UNDEFINED in return


	*Arrays can have any elements and can GROW or SHRINK arbitrarily.
	grow: push() : adiciona ao fim
	      unshift(): adiciona ao inicio

	shrink: pop(): remove do fim
			shift(): remove do início
			splice(): remove do indice

	*for (let i = 0; i < a.length; i++) {
  		// Do something with a[i]
	}

	*for (const currentValue of a) {
  		// Do something with currentValue
	}

	*ARRAY METHODS



FUNCTIONS:

	function add(x, y) {
  		const total = x + y;
  		return total;
	}

	-Can take 0 or more parameters.
	-The function body can contain as many statements as you like and can declare its own variables which are local to that function.
	-The return statement can be used to return a value at any time, terminating the function. If no return statement is used (or an empty return with no value),
	JavaScript returns undefined.


	argumentos -> array
	*USO DO ...ARGS (rest parameter syntax)
	function avg(...args) {
	  let sum = 0;
	  for (const item of args) {
	    sum += item;
	  }
	  return sum / args.length;
	}

	avg(2, 3, 4, 5); // 3.5


	array -> list of elements
	*USO DO SPREAD SYNTAX
	avg(...numbers)


	*NAMED PARAMETERS (por meio de object destructuring)
		// Note the { } braces: this is destructuring an object
		function area({ width, height }) {
		  return width * height;
		}

		// The { } braces here create a new object
		console.log(area({ width: 2, height: 3 }));

	*DEFAULT PARAMETER SYNTAX
		function avg(firstValue, secondValue, thirdValue = 0) {
  			return (firstValue + secondValue + thirdValue) / 3;
		}

		avg(1, 2); // 1, instead of NaN


	*FUNÇÕES ANÔNIMAS

	-geralmente usadas como argumentos para outras funções


	1. Assigned to a variable that can be used to invoke the function, or returned from another function.

	// Note that there's no function name before the parentheses
	const avg = function (...args) {
	  let sum = 0;
	  for (const item of args) {
	    sum += item;
	  }
	  return sum / args.length;
	};

	2. Arrow function expression

	// Note that there's no function name before the parentheses
	const avg = (...args) => {
	  let sum = 0;
	  for (const item of args) {
	    sum += item;
	  }
	  return sum / args.length;
	};

	// You can omit the `return` when simply returning an expression
	const sum = (a, b, c) => a + b + c;

	3. Immediately invoked function expression(IIFE):
		(function () {
		  // …
		})();



	*FUNÇÕES RECURSIVAS
	-> dealing with tree structures

	function countChars(elm) {
	  if (elm.nodeType === 3) {
	    // TEXT_NODE
	    return elm.nodeValue.length;
	  }
	  let count = 0;
	  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
	    count += countChars(child);
	  }
	  return count;
	}



PROGRAMAÇÃO ASSÍNCRONA

	1- Callback-based
	fs.readFile(filename, (err, content) => {
	  // This callback is invoked when the file is read, which could be after a while
	  if (err) {
	    throw err;
	  }
	  console.log(content);
	});


	2- Promise-based

	  fs.readFile(filename)
	  .then((content) => {
	    // What to do when the file is read
	    console.log(content);
	  })
	  .catch((err) => {
	    throw err;
	  });


	3- async/await
	async function readFile(filename) {
	  const content = await fs.readFile(filename);
	  console.log(content);
	}


MÓDULOS:

	Módulos são arquivos, identificados pelo path ou URL
	-import
	-export

















/*






















