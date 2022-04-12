/* Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) prendendo 
alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */

const numbers = [1,2,3]
const letters = ['a','b','c']

const result = []

/* if (array1.length == array2.length){
    for (let i=0; i < array1.length; i++){
        result.push(array1[i], array2[i])
    }
}else {
    alert('I due array non hanno la stessa lunghezza!')
} */

function concatAlternative(array1, array2, final_array) {
    if (array1.length == array2.length){
      array1.forEach((element, i) =>{
        final_array.push(array1[i], array2[i])
    })  
    } else {
        alert('I due array non hanno la stessa lunghezza!')
    }
    
}

concatAlternative(numbers, letters, result)
console.log(result);