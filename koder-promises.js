const koder ={
    contactado: false,
    entrevistado: false,
    lugarApartado: false,
    asistenciaPrimerClase: false
}

function llamarKoder(koderAContactar,callback){
    setTimeout(()=>{
        koderAContactar.contactado = true
        let error = koderAContactar.contactado
        ? null
        :'No se le puede contactar a este koder'
        callback(error,koderAContactar)
    },2000
    )
}

function entrevistarKoder(koderAEntrevistar, callback){
    setTimeout(()=>{
        koderAEntrevistar.entrevistado = true
        let error = koderAEntrevistar.entrevistado 
        ? null
        :'No se puede entrevistar a este koder'
        callback(error,koderAEntrevistar)
    },2000)
}

function inscribirKoder(koderAInscribir, callback){
    setTimeout(()=>{
        koderAInscribir.lugarApartado = true
        let error = koderAInscribir.lugarApartado 
        ? null
        :'No se puede inscribir a este koder'
        callback(error,koderAInscribir)
    },2000)
}

function tomarPrimerClase(claseATomar, callback){
    setTimeout(()=>{
        claseATomar.asistenciaPrimerClase = true
        let error = claseATomar.asistenciaPrimerClase 
        ? null
        :'Este koder no ha entrado a clase'
        callback(error,claseATomar)
    },2000)

}
//PROMIFICACION
//El proceso de wrappear una función que hace el uso de callbacks para que ahora sea una promesa

function llamarKoderPromificada(koderAContactar){
    return new Promise((resolve,reject)=>{
        llamarKoder(koderAContactar,(error,koderContactado)=>{
            if(error){
                reject(error)
                return
            }
            resolve(koderContactado)
        })
    })
}

function entrevistarKoderPromificada(koderAEntrevistar){
    return new Promise((resolve,reject)=>{
        entrevistarKoder(koderAEntrevistar,(error,koderEntrevistado)=>{
            if(error){
                reject(error)
                return
            }
            resolve(koderEntrevistado)
        })
    })
}

function inscribirKoderPromificada(koderAInscribir){
    return new Promise((resolve,reject)=>{
        inscribirKoder(koderAInscribir,(error,koderInscrito)=>{
            if(error){
                reject(error)
                return
            }
            resolve(koderInscrito)
        })
    })
}

function tomarPrimerClasePromificada(primerClase){
    return new Promise((resolve,reject)=>{
        tomarPrimerClase(primerClase,(error,claseTomada)=>{
            if(error){
                reject(error)
                return
            }
            resolve(claseTomada)
        })
    })
}

async function principal(){
    const koderContactado = await llamarKoderPromificada(koder)
    console.log('koderContactado: ', koderContactado)
    const koderEntrevistado = await entrevistarKoderPromificada(koderContactado)
    console.log('koderEntrevistado: ',koderEntrevistado)
    const koderInscrito = await inscribirKoderPromificada(koderEntrevistado)
    console.log('koderInscrito: ', koderInscrito)
    const claseTomada = await tomarPrimerClasePromificada(koderInscrito)
    console.log('claseTomada: ',claseTomada)
    return claseTomada

}

principal()
    .then(resultado => {
        console.log('resultado: ',resultado)
        console.log('FIN')
    })
    .catch(error => console.error('ERROR: ',error)) 


/* llamarKoderPromificada(koder)
    .then(koderContactado=>{
        console.log('Kodercontatado: ',koderContactado)
        entrevistarKoderPromificada(koderContactado)
            .then(koderEntrevistado=>{
                console.log('koderEntrevistado: ',koderEntrevistado)
                inscribirKoderPromificada(koderEntrevistado)
                    .then(koderInscrito=>{
                        console.log('koderInscrito: ',koderInscrito)
                        tomarPrimerClasePromificada(koderInscrito)
                            .then(claseTomada=>{
                            console.log('claseTomada: ',claseTomada)
                            })
                            .catch(error=>console.error('claseTomada: ',error))       
                    })
                    .catch(error=>console.error('koderInscrito: ',error))
            })
            .catch(error=>console.error('errorEntrevistado: ',error))
    })
    .catch(error=>console.error('error: ',error)) 
 */