import React from 'react'
import Paciente from './Paciente'
import {useEffect} from 'react'
//rcfe
///rafce
//npm run dev

function ListadoPacientes({pacientes, setPaciente, funcionEliminarPaciente}) {
  console.log(pacientes && pacientes.length)

  useEffect(() => {
    pacientes && pacientes.length ? console.log("Se inserto un nuevo paciente"):console.log("No hay pacientes")
    
  }, [pacientes])
  

  return (
    <div className=' md:w-1/2 lg:w-3/5'>

        {pacientes && pacientes.length ? (
        
          <>

          <h2 className=' font-black text-3xl text-center'>Listado de Pacientes</h2>
          <p className=' text-xl mt-5 text-center'>Administra tus {' '}
            <span className=' text-indigo-600 font-bold text-xl'>pacientes y citas</span>
          </p>
          <div className=' md:h-screen overflow-y-scroll'>
            {pacientes.map((paciente)=>{
              return(
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  funcionEliminarPaciente={funcionEliminarPaciente}
                />
              )
            })}

            
          </div>
          
          </>):(
          <>
          
          <h2 className=' font-black text-3xl text-center'>Aun no hay Pacientes</h2>
          <p className=' text-xl mt-5 text-center'>Comienza a agregarlos {' '}
            <span className=' text-indigo-600 font-bold text-xl'>y apareceran aqui.</span>
          </p>
          
          </>)}

        
       
    </div>
    
  )
}

export default ListadoPacientes