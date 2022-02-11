import React, {useState} from 'react'

interface Interfaceobjeto {
    usuario:string,
    clave:string,
   [key: string]: any
}

export const EjemploTSP = ()=>{
    const [objeto,setObjeto] = useState<Interfaceobjeto>({usuario:'Pedro', clave:'123456'})

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{

        const verName = objeto[e.target.name]

        alert(verName)
        setObjeto ({...objeto,[e.target.name]:e.target.value})
    }

    return <div>

        <input type="text" name="usuario" value={objeto.usuario} onChange={handleChangeInput} placeholder='Usuario' />
        
        <input type="text" name="clave" value={objeto.clave} onChange={handleChangeInput} placeholder='Clave'/>
    
        <h5>Usuario: {objeto.usuario}</h5>
        <h5>Clave: {objeto.clave}</h5>

    </div>

}