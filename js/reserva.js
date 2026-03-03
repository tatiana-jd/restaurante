function reserva(){

  let reservas=document.querySelectorAll('.form-control');

  nombre=reservas[0].value;
  correo=reservas[1].value;
  fecha=reservas[2].value;
  hora=reservas[3].value;
  

  for (let i = 0; i < reservas.length; i++) {
    const element = reservas[i].value;  //el array se llama bolsa
        
   if(!nombre || !correo || !fecha ||!hora ||!personas){

   Swal.fire({
     title: "Error, faltan datos.",
   
     icon: "error"
    });
    return;
    }
    else{

      Swal.fire({
        title: "Desea confirma su reserva?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Gracias por su reserva.",
            text: "Reserva confimada.",
            icon: "success"
          });
        }
      });
    }
    return;
  }
  
}

