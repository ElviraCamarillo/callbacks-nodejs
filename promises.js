/** Constructor de una promesa
Promise((resolve,reject)=>{
    if(todo ok){
        resolve('ok')
        return
    }
    reject('error')
}) 
 */

//Si quiero crear una promesa
/**
const miPrimerPromesa = new Promise((resolve,reject)=>{
    if(todo mal){
        reject('todo mal')
        return
    }
    resolve('ok')
})
miPrimerPromesa
    .then((resultado)=>{ //recibe lo que se pasa en resolve
        console.log('resultado; ',resultado) //resultado: ok
    })
    .catch((error)=>{
        console.log('error: 'error) //error:'todo mal'
    })
 */

/*
function cinco(){return 5}
console.log(cinco()) //5
const suma = cinco() + cinco() //10


    function  miPrimerPromesa (){
        return newPromise((resolve,reject)=>{
            if(todo mal){
                reject('Todo esta en llamas!!')
                return
            }
            resolve('Todo cool')
        })
    }

    
    miPrimeraPromesa()
        .then((result)=>{console.log(result)})
        .catch((error)=>{console.log(error)})


 */

const muro ={
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

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

//PROMIFICACION
//El proceso de wrappear una función que hace el uso de callbacks para que ahora sea una promesa

function construirPromificada(muroAConstruir){
    return new Promise((resolve,reject)=>{
        construir(muroAConstruir,(error,muroConstruido)=>{
            if(error){
                reject(error)
                return
            }
            resolve(muroConstruido)
        })
    })
}

function aplanarPromificada(muroAAplanar){
    return new Promise((resolve,reject)=>{
        aplanar(muroAAplanar,(error,muroAplanado)=>{
            if(error){
                reject(error)
                return
            }
            resolve(muroAplanado)
        })
    })
}

function pintarPromificada(muroAPintar){
    return new Promise((resolve,reject)=>{
        pintar(muroAPintar,(error,muroPintado)=>{
            if(error){
                reject(error)
                return
            }
            resolve(muroPintado)
        })
    })
}

/* construirPromificada(muro)
    .then(muroConstruido => {
        console.log('muroConstruido: ',muroConstruido)
        aplanarPromificada(muroConstruido)
            .then(muroAplanado => {
                console.log('muroAplanado: ',muroAplanado)
                pintarPromificada(muroAplanado)
                    .then(muroPintado => {
                        console.log('muroPintado: ',muroPintado)
                    })
                    .catch(error => console.error('error pintado: ',error))
            })
            .catch(error => console.error('error aplanado: ',error))
    })
    .catch(error => console.error('error: ',error))
 */

// async/await
// Donde use await, la función debe estar marcada como asincrona
// Las funciones marcadas con awair, regresan una promesa.
// await construirPromificada(muro) -->Así no sirve

/**
async function principal(){
    await construirPromificada(muro)
}
 */

async function principal(){
    const muroConstruido = await construirPromificada(muro)
    console.log('murocConstruido: ',muroConstruido)
    const muroAplanado = await aplanarPromificada(muroConstruido)
    console.log('muroAplanado: ',muroAplanado)
    const muroPintado = await pintarPromificada(muroAplanado)
    console.log('muroPintado: ',muroPintado)
    return muroPintado
 }

principal()
    .then(resultado => {
        console.log('resultado: ',resultado)
        console.log('FIN')
    })
    .catch(error => console.error('ERROR: ',error))

