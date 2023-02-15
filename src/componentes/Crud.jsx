import React, { Fragment } from "react";
import { useState } from "react";


function Crud(){
    
  const [nombre, SetNombre] = useState('');
  const [apellido, SetApellido] = useState('');
  const [estado, SetEstado] = useState('');


  function adicionarUsuario(e){
    e.preventDefauld();
    let usuario ={
      nombre: nombre,
      apellido: apellido
    }
    SetEstado([...estado,usuario]);
   if(nombre = SetNombre){
      repetido
   }
  }
  
function Mostrar(props){
  // const nombres = props.nombres;
  // const list = 
  // nombres.map(nombre)=>
   

  return(
      <p>EL NUEVO USUARIO ES: {nombre} {apellido}</p>
    );
}

  return(
  <Fragment>
    <form action="" >
          <label htmlFor="">Nombre&nbsp;
          <input type="text"  className='inpu' id='nombre' name='nombre' onChange={(e) => SetNombre(e.target.value)}/>
          </label> <br />
          <label htmlFor="">Apellido&nbsp; 
          <input type="text"  className='inpu'id='apellido' name='apellido' onChange={(e) => SetApellido(e.target.value)}/>
          </label> <br /> <br />
          <input type="submit" value="agregar" className='boton' onSubmit={(e) => adicionarUsuario(e)}/>
          {/* <p>EL NUEVO USUARIO ES:<Mostrar/></p> */}
          <Mostrar/>

    </form>

    {/* <Mostrar user={estado}/> */}

  </Fragment>
    );

  
}
export default Crud;