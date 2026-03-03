function contactar(){
    //let nombre= document.getElementById('nombre').value;
    //let correo=document.getElementById('correo').value;
    //let mensaje=document.getElementById('mensaje').value;

    //if(!nombre || !correo || !mensaje ){
   //     alert("📍Error faltan datos ");
   // }
   // else{
   //     alert( nombre + " su mensaje a sido enviago. Gracias por contactarnos.")
   // }

   let bolsa=document.querySelectorAll('.form-control');

    nombre =bolsa[0].value;
    correo =bolsa[1].value;
    mensaje =bolsa[2].value;

    for (let index = 0; index < bolsa.length; index++) {
        const element = bolsa[index].value;  //el array se llama bolsa
        
        if(!nombre || !correo || !mensaje){
          Swal.fire({
             title: "Error, faltan datos.",
              icon: "error"
           });
            return; //si encuentra un campo vacio de una se sale
        }
        else{
            Swal.fire({
               title: element + " su mensaje a sido enviado, gracias por contactarnos.",
               icon: "success",
               draggable: true
           });
            return;
        }
    }
   

}