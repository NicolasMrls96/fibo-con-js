let input = prompt("Ingrese un número para generar la serie de Fibonacci:");

while (isNaN(input)) {
    alert("El valor ingresado no es un número")
    input = prompt("El valor ingresado no es un número. Por favor ingrese un número:");
}

let num = parseInt(input);

function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let result = fibonacci(num);
console.log(result);