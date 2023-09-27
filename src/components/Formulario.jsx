import React from 'react'
import {useState, useEffect} from 'react'
import Error from "./Error"

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false)

    useEffect(() => {
      if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      } 
    }, [paciente])
    

    const limpiarFormulario = ()=>{
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }

    const generarId = ()=>{
        const random = Math.random().toString(36).substring(2)
        const fechaRan = Date.now().toString(36)

        return random+fechaRan
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando Formulario....")
        if([nombre, propietario, email, fecha, sintomas].includes("")){
            console.log("Al menos uno de los campos esta vacio")
            setError(true)
        }else{
            console.log("Todos los campos estan completos")
            setError(false)

            const nuevoPaciente = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas
            }

            if(paciente.id){
                //editando un paciente
                nuevoPaciente.id = paciente.id
                
                const arrayPacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? nuevoPaciente : pacienteState)
                setPacientes(arrayPacientesActualizados)
                setPaciente({})

            }else{
                //agregando un paciente nuevo.
                nuevoPaciente.id = generarId()
                setPacientes([...pacientes, nuevoPaciente])
            }

            console.log(nuevoPaciente)

           
            limpiarFormulario()
        }
    }

  return (
    <div className=' md:w-1/2 lg:w-2/5'>
         <h2 className=' font-black text-3xl text-center'>Seguimiento Pacientes</h2>
         <p className='text-lg mt-5 text-center'>Añade pacientes y {' '}
            <span className='text-indigo-600 font-bold text-lg'>administralos</span>
         </p>
         <form onSubmit={handleSubmit} className=' bg-white shadow-md mt-2 rounded-lg py-10 px-5 mx-5'>
            {error &&  <Error mensajeError="Todos los campos son obligatorios"/>}
            <div className=' mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la mascota</label>
                <input
                    id='mascota'
                    type="text"
                    placeholder='Nombre de la mascota'
                    className=' border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={(e)=>{setNombre(e.target.value)}}
                />
            </div>
            <div className=' mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
                <input
                    id='propietario'
                    type="text"
                    placeholder='Nombre del propietario'
                    className=' border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                    value={propietario}
                    onChange={(e)=>{setPropietario(e.target.value)}}
                />
            </div>
            <div className=' mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
                <input
                    id='email'
                    type="email"
                    placeholder='Email contacto propietario'
                    className=' border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className=' mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
                <input
                    id='alta'
                    type="date"
                    className=' border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={(e)=>{setFecha(e.target.value)}}
                />
            </div>
            <div className=' mb-5'>
                <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                <textarea
                    id='sintomas'
                    type="textarea"
                    placeholder='Describe los sintomas'
                    className=' border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                    value={sintomas}
                    onChange={(e)=>{setSintomas(e.target.value)}}
                />
            </div>
            <input
                type="submit"
                className=' bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all'
                value={paciente.id ? `Guardar cambios al paciente ${paciente.nombre}` : "Agregar paciente"}

            />
         </form>
    </div>
   
  )
}

export default Formulario