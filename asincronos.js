// --------callbacks---------------

// let request = require('request');

// request('pagina web'); // peticion web en el primer argumento

// request('pagina web', function(){
//     console.log('hola');
// });// peticion se ejecuta cuando la web da respuesta 

// ----------promesas------------- 

// let request = require('request-promise');

// request('pagina web')
// .them( // se ejecuta despues de la peticion
//     function(){
//         console.log("hola");
//     }
// )//promesa exitosa
// .catch( // se ejecuta en caso de error 
//     function (er){
//         console.log(er);
//     }
// )

// // --------- callbacks de las promesas ----------------

// let request = require('request-promise');

// request('pagina web')
// .them( // se ejecuta despues de la peticion
//     function(){
//         console.log("hola");
//     }
// )//promesa exitosa
// .catch( // se ejecuta en caso de error 
//     function (er){
//         console.log(er);
//     }
// )
// .finally(
//     function(err){
//         console.log("final");
//     }
// )


// -------- crear promesas -----------

// let promesa = new promise(
//     function(res,rej){
//         request(url, function(error,response){
//             if (error) return rej(error);
//             res(response)
//         });
//     }
// )

// ---------- multiples promesas -------------

// Promise.all([p1,p2])
// .then(
//     function(resultados){
//         console.log(resultados);
//         finalizado();
//     }
//     ).catch(err => console.log(err));

// ---------- encadenar promesas ---------------- 

// promesa().then(segundapromesa).then(function(r){ console.log(r);})

// ----------- funciones asincronas ----------------

//-------------- async ---------------

// async function suma (vlor1, vlor2){
//     return vlor1+vlor2;
// }

/// ----------- await --------------

// async function tiempo() {
//     let promesa = await new Promise((res,rej)=>{
//         setTimeout(res, 400, 5)
//     });

//     console.log(promesa);
// }

/// -------- manejo errores en promesas ------------

// try {
    
// } catch (error) {
    
// }













