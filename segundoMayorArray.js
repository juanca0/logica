let arreglo = [8,4,6,10,9,11,20];


// function secondLargesNum(numbers){
//   let first = numbers[0];
//   let second =0;
//   for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]> first){
//       second = first;
//       first = numbers[i]
//     }
//     if(numbers[i]> second && numbers[i]< first ){
//       second = numbers[i]
//     }
    
//   }
//   return second
// }

// console.log(secondLargesNum(arreglo));

function secondLargesNum (arreglo){
  // dependie
  console.log(arreglo.sort((a,b) => b - a));
  return arreglo[1];
}
console.log(secondLargesNum(arreglo));