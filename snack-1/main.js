/* Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */


const zucchine = [
    {tipo: 'verde', peso: 50, lunghezza: 30},
    {tipo: 'giallo', peso: 40, lunghezza: 20},
    {tipo: 'verde_2', peso: 60, lunghezza: 35},
    {tipo: 'giallo', peso: 50, lunghezza: 40},
    {tipo: 'verde chiaro', peso: 70, lunghezza: 60},
    {tipo: 'verde chiaro', peso: 70, lunghezza: 60},
    {tipo: 'giallo chiaro', peso: 40, lunghezza: 60},
    {tipo: 'faenza', peso: 30, lunghezza: 40},
    {tipo: 'faenza', peso: 70, lunghezza: 35},
    {tipo: 'faenza', peso: 20, lunghezza: 25},
    {tipo: 'faenza', peso: 15, lunghezza: 50}
]

let sum = 0
zucchine.forEach((zucchina) => {
    return sum += zucchina.peso
})

console.log(sum);