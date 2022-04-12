/* Scrivi una funzione che accetti una stringa come argomento e 
la ritorni girata (es. Ciao -> oaiC)
 */

const str = 'Alessio'


console.log(reverseString(str));

function reverseString(string) {
    return str.split("").reverse().join("")
}