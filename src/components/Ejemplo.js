import React, {useState} from 'react'

export const Ejemplo = ()=>{
    const [objeto,setObjeto] = useState({usuario:'Pedro', clave:'123456'})

    const handleChangeInput = (e)=>{
        setObjeto ({...objeto,[e.target.name]:e.target.value})
    }

    return <div>

        <input type="text" name="usuario" value={objeto.usuario} onChange={handleChangeInput} placeholder='Usuario' />
        
        <input type="text" name="clave" value={objeto.clave} onChange={handleChangeInput} placeholder='Clave'/>
    
        <h5>Usuario: {objeto.usuario}</h5>
        <h5>Clave: {objeto.clave}</h5>

    </div>

}