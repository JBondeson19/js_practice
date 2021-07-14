const sayHello = name  => console.log('Hi ' + name);

const sayHello2 = (name, phrase)  => console.log(phrase + ' ' + name);
const sayHello3 = ()  => console.log('Hi James' );
const sayHello4 = name  => 'Hi ' + name;


sayHello('James');
sayHello2("James", "Sup ");
sayHello3();
console.log(sayHello4("James"));