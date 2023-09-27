import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'



function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  

  // useEffect(() => {
  //   const obtenerPacientesLS = ()=>{
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //     console.log('Arreglo pacientes LS')
  //     console.log(pacientesLS)
  //   }
  //   obtenerPacientesLS();
    
  // }, [])
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  const funcionEliminarPaciente = (id)=>{
    console.log(`Eliminando el id ${id}`)
    const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizado)
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header/>
      <div className=' mt-12 md:flex'>
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        funcionEliminarPaciente={funcionEliminarPaciente}
        />
      </div>
     
    </div>
  )
}

export default App
