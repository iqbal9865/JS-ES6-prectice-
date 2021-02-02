const number = [10,20,32,43,13,53];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

const result = number.map(function(element){
   return element * element;
})
console.log(result);

const result2 = number.map(x => x*x);
console.log(result2);