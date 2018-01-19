var name = process.argv[2] || 'Jogendra';
console.log('Hello : ' + name);


/*
To Run-
> node Ex01
> Hello: Jogendra

> node Ex01 Jais
> Hello Jais

*/
var getRandomNumber = function getRandomNumber(){
    return Math.ceil(10 * Math.random());
};

var frn = getRandomNumber();
var srn = getRandomNumber();

console.log('First Random Number : ' + frn);
console.log('Second Random Number : ' + srn);