/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {tipo: 'verde', peso: 50, lunghezza: 30},
    {tipo: 'giallo', peso: 40, lunghezza: 20},
    {tipo: 'verde_2', peso: 60, lunghezza: 35},
    {tipo: 'giallo', peso: 50, lunghezza: 40},
    {tipo: 'verde chiaro', peso: 70, lunghezza: 60},
    {tipo: 'verde chiaro', peso: 70, lunghezza: 60},
    {tipo: 'giallo chiaro', peso: 40, lunghezza: 60},
    {tipo: 'faenza', peso: 30, lunghezza: 14},
    {tipo: 'faenza', peso: 70, lunghezza: 11},
    {tipo: 'faenza', peso: 20, lunghezza: 25},
    {tipo: 'faenza', peso: 15, lunghezza: 10}
]

const bigZucchine = zucchine.filter((zucchina) =>{
    return zucchina.lunghezza > 15
})

const littleZucchine = zucchine.filter((zucchina) =>{
    return zucchina.lunghezza < 15
})

console.log(bigZucchine, littleZucchine);
sumPeso(bigZucchine)
sumPeso(littleZucchine)

function sumPeso(array) {
    let sum = 0
    array.forEach((element) => {
        sum += element.peso
    });
    console.log(sum);
}