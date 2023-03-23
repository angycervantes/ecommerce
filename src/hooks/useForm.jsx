// reglas para crear un Hook de React
// custom hook es una función que utiliza otros hooks de react.
// 1. Siempre debemos usar la palabraa 'use' al nombrar el archivo que contiene el hook
// 2. Siempre deben ser funciones. (apartir de la versión 16.8 de react usamos hooks y dejaron de usarse clases. los hooks son funciones)

// 3. Siempre debe usar al menos un hook de React (useState, useEffect, useContext, useRef, etc.)
// 4. Deben ser REUTILIZABLES, podría usarse en un proyecto diferente.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estaado único prara guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // cargar valores por defecto
  // use effect se utiliza para manejar efectos secundarios en los componentes de react (manejar APIS)
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
    console.log('holi')
  }

  const handleSubmit = (event) => {
    // evitar que se recargue la página y se rompa el SPA
    event.preventDefault()
    callback(input)
    console.log('hola')
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}
export default useForm
