/**
 * La practica para mañana es la siguiente:
 * Usando el metodo que aprendimos en clase para definir funciones que usan callbacks,
 * replicar el ejercicio del muro pero con el proceso de inscripcion de un koder que pasa por estas 4 etapas:
 * Llamada
 * Entrevista
 * Apartado
 * Primer clase
 * Hacer uso de las funciones implementando los callbacks :guiño:
 *
 */

 const koder ={
     contactado: false,
     entrevistado: false,
     lugarApartado: false,
     asistenciaPrimerClase: false
 }

function llamada(koderAContactar,callback){
    setTimeout(()=>{
        koderAContactar.contactado = true
        let error = koderAContactar.contactado
        ? null
        :'No se le puede contactar a este koder'
        callback(error,koderAContactar)
    },2000
    )
}

function entrevista(koderAEntrevistar, callback){
    setTimeout(()=>{
        koderAEntrevistar.entrevistado = true
        let error = koderAEntrevistar.entrevistado 
        ? null
        :'No se puede entrevistar a este koder'
        callback(error,koderAEntrevistar)
    },2000)
}

function inscripcion(koderAInscribir, callback){
    setTimeout(()=>{
        koderAInscribir.lugarApartado = true
        let error = koderAInscribir.lugarApartado 
        ? null
        :'No se puede inscribir a este koder'
        callback(error,koderAInscribir)
    },2000)
}

function primerClase(claseATomar, callback){
    setTimeout(()=>{
        claseATomar.asistenciaPrimerClase = true
        let error = claseATomar.asistenciaPrimerClase 
        ? null
        :'Este koder no ha entrado a clase'
        callback(error,claseATomar)
    },2000)

}

llamada(koder,(errorDeContacto,koderContactado) =>{
    if(errorDeContacto){
        console.error('Error de contacto: ',errorDeContacto)
        return
    }
    entrevista(koderContactado,(errorDeEntrevista,koderEntrevistado)=>{
        if(errorDeEntrevista){
            console.error('Error de entrevista: ',errorDeEntrevista)
            return
        }
        inscripcion (koderEntrevistado,(errorDeInscripcion,koderInscrito)=>{
            if(errorDeInscripcion){
                console.error('Error de inscripción: ',errorDeInscripcion)
                return
            }
            primerClase(koderInscrito,(errorDeClase,claseTomada)=>{
                if(errorDeClase){
                    console.error('Error de clase: ',errorDeClase)
                    return
                }
                console.log('Koder inscrito?: ',claseTomada)
            })
        })
    })
})

console.log('koder: ',koder)