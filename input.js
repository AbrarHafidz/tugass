const prompt = require('prompt-sync')({sigint: true});
const number = prompt('Enter a  number: ');

var result;
if (number < 0){
    console.log('tidak bisa input bilangan negatif')
}else if (number % 2 != 0){
    console.log('tidak bisa input bilangan ganjil')
}else if (number % 2 != 1){
const result = Math.sqrt(number);

console.log('akar pangkat 2 dari number = ');

console.log(result);
}