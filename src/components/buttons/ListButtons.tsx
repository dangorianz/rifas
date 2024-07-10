'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ListButtons = () => {
    
    const router = useRouter();
    
    const handleClick = (path:string) => {
        router.push(path)    
    }

    return (
        <div className="flex flex-wrap justify-center">
            <Button onClick={()=>handleClick('/rifas')} className='bg-slate-700 hover:bg-slate-700 py-3 mx-5 mt-5 md:mt-0 rounded-xl' variant='contained'>Comprar rifa</Button>
            <Button onClick={()=>handleClick('/platos')} className='bg-slate-700 hover:bg-slate-700 py-3 mx-5 mt-5 md:mt-0 rounded-xl' variant='contained'>Comprar plato</Button>
            <Button onClick={()=>handleClick('/donaciones')} className='bg-slate-700 hover:bg-slate-700 py-3 mx-5 mt-5 md:mt-0 rounded-xl' variant='contained'>Donar</Button>
        </div>
    )
}
