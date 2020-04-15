/* 
*CONSTRUIR, APLANAR Y PINTAR UNA PARED.
* 1. Construir la pared
* 2. Aplanar la pared.
* 3. Pintar la pared.

 */

const muro ={
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}
 //Funciones que ejecutan callbacks
 //Function readdir(args,callback){} <-- Si

 //Declaracion de una función
 //function construir(){
//    ... comportamiento 
// }
// Implementación de la funcion
// construir()
//

 function construir (muroAConstruir,callback){
     setTimeout(()=>{
         let error = null
         muroAConstruir.estaConstruido = true
         if(muroAConstruir.estaConstruido === false){
             error = 'no se puedo construir el muro'
         }
         callback(error,muroAConstruir)
     },3000)
 }


function aplanar(muroAAplanar,callback){
    setTimeout(()=>{      
        muroAAplanar.estaAplanado = true
       let error=muroAAplanar.estaAplanado
        ? null 
        : 'no se pudo aplanar'
        callback(error,muroAAplanar)
    },3000)
}

function pintar(muroAPintar,callback){
    setTimeout(()=>{
        muroAPintar.estaPintado = true
        let error=muroAPintar.estaPintado 
        ? null 
        : 'no se pudo pintar'
        callback(error,muroAPintar)
    },3000
    )
}

construir(muro,(errorDeConstruccion,muroConstruido) =>{
    if(errorDeConstruccion){
        console.error('error de construcción: ',errorDeConstruccion)
        return
    }
    aplanar(muroConstruido,(errorDeAplanado,muroAplanado)=>{
        if(errorDeAplanado){
            console.error('error de aplanado: ',errorDeAplanado)
        return
        }
        pintar(muroAplanado,(errorDePintado,muroPintado)=>{
            if(errorDePintado){
                console.error('error de pintado: ',errorDePintado)
        return
            }
            console.log('muroPintado: ',muroPintado)
        })
    })
})

console.log('muro: ',muro)






 /* CUESTIONES DIDACTICAS
 
 console.log('muroPintado: ',muroPintado)
  function construir(muroAConstruir){
      muroAConstruir.estaConstruido = true
      return muroAConstruir
  }

  function aplanar(muroAAplanar){
      muroAAplanar.estaAplanado = true
      return muroAAplanar
      
  }

  function pintar (muroAPintar){
    muroAPintar.estaPintado = true
    return muroAPintar
  }

  const muroConstruido = construir(muro)
  const muroAplanado = aplanar(muroConstruido)
  const muroPintado = pintar(muroAplanado) */
