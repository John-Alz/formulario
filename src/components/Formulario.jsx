import React, { useState } from 'react'
import { areas, sedes, numerales, listaNum, optionN3} from "./Formualrio_types"

export default function Formulario() {

    const [form, setForm] = useState({
        n1: "N1"
    })

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <div>
    <form class="w-full max-w-2xl mt-24 ml-96" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 ">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Archivo
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="file"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  <di class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Titulo
      </label>
      <input name='titulo' value={form.titulo} onChange={handleOnChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Area
      </label>
      <div class="relative">
        <select name='area' value={form.area} onChange={handleOnChange}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value='All'>Areas</option>
        {
            areas && areas.map((ar) => (
            <option className='text-black' value={ar.area} key={ar.id}>{ar.area}</option>
        ))
        }
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Sede
      </label>
      <div class="relative">
        <select name='sede' value={form.sede} onChange={handleOnChange}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value='All'>Sedes</option>
        {
            sedes && sedes.map((sed) => (
            <option className='text-black' value={sed.sede} key={sed.id}>{sed.sede}</option>
        ))
        }
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </di>
  <div class="flex flex-wrap -mx-3 mb-2">
  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        N1
      </label>
      <div class="relative">
        <select name='n1' value={form.n1} onChange={handleOnChange}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option className='text-gray-200' disabled selected>Options</option>
        {
            listaNum && listaNum.map((num) => (
            <option className='text-black' value={num} key={num}>{num}</option>
            
        ))
        }
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        N2
      </label>
      <div class="relative">
        <select name='n2' value={form.n2} onChange={handleOnChange}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option className='text-gray-200' disabled selected>options</option>
        {
            form.n1 && numerales[form.n1].options.map((cs) => (
                <option className='text-black' value={cs} key={cs}>{cs}</option>
            ))
        }
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        N3
      </label>
      <div class="relative">
        <select name='n3' value={form.n3} onChange={handleOnChange}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option className='text-gray-200' disabled selected>options</option>
        {
            form.n2 && optionN3[form.n2].options.map((cs) => (
                <option className='text-black' value={cs} key={cs}>{cs}</option>
            ))
        }
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
  <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Año...
      </label>
      <div class="relative">
        <input type="date" 
       min="1970-01-01" max="2022-12-31" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Fecha de vencimiento
      </label>
      <div class="relative">
        <input type="date" min="2022-10-28" max="2023-01-28" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-3 ml-8 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Observaciones
      </label>
      <textarea name='observaciones' value={form.observaciones} onChange={handleOnChange}   class="appearance-none block w-full resize-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0 absolute mt-20">
      {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Fecha de vencimiento
      </label> */}
      <div class="relative">
        <input type="checkbox" class="w-4 h-4" />
        <label for="vue-checkbox" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Permisos unicos</label>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0 absolute mt-28">
      {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Fecha de vencimiento
      </label> */}
      <div class="relative">
        <input type="checkbox" class="w-4 h-4" />
        <label for="vue-checkbox" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">abierto a la organización</label>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0 absolute mt-36">
      {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Fecha de vencimiento
      </label> */}
      <div class="relative">
        <input type="checkbox" class="w-4 h-4" />
        <label for="vue-checkbox" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Vigente</label>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Enviar
      </button>
    </div>
  </div>
</form>
</div>
  )
}
