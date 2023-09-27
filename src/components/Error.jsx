import React from 'react'

function Error({mensajeError}) {
  return (
    <div className=' bg-red-800 text-white text-center p-3 font-bold mb-3 rounded uppercase'>
    <p>{mensajeError}</p>
    </div>
  )
}

export default Error