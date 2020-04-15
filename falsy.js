//true false
// true --> truthy
// false --> falsy

//falsy --> Representación de la nada
const cadenaVacia = ''
const cero = 0
const valorNulo = null
const valorIndefinido = undefined

console.log('cadenaVacia:', !!cadenaVacia)
console.log('cero:',!!cero)
console.log('valorNulo: ', !!valorNulo)
console.log('valorIndefinido: ', !!valorIndefinido)

//truthy --> Existe algo
const cadenaConTexto = 'Hola'
const cualquierNumero = 5
const objetoVacio = {}
const arrayVacio = []

console.log('cadenaConTexto', !!cadenaConTexto)
console.log('cualquierNumero:',!!cualquierNumero)
console.log('objetoVacio: ', !!objetoVacio)
console.log('arrayVacio: ', !!arrayVacio)