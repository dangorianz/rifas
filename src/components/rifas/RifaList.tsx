'use client'
import { Rifa } from '@/interfaces/rifas'
import React, { useEffect, useState } from 'react'

export const RifaList = () => {

  const [rifasSelected, setRifasSelected] = useState<Array<Rifa>>([])
  const [rifas, setRifas] = useState<Array<Rifa>>([])

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    console.log('se lanza todo');
    const newRifas = [];
      for (let index = 1; index <= 500; index++) {
          const stripe = index % 2 === 0
          newRifas.push({ number: index, bgColor: getRandomColor(), stripe, enable: true });
      }
    setRifas(newRifas);
  }, [])
  

  const selectRifa = (rifa: Rifa) => {
    const rifasNew = rifas.map( r => {
      if (r.number === rifa.number) {
          r.enable = false
          return r
      }
      return r;
    })
    setRifasSelected(prev => ([...prev, rifa]))
    setRifas(rifasNew);
    
  }

  const deleteRifaSelect = (rifa:Rifa) => {
    const rifasNew = rifas.map( r => {
      if (r.number === rifa.number) {
          r.enable = true
          return r
      }
      return r;
    })
    setRifasSelected(prev => (prev.filter(p => p.number !== rifa.number)))
    setRifas(rifasNew);
  }
  
  return (
    <div className="">
      <h1 className='text-5xl text-center font-bold my-20'>Todos por Ander</h1>
      <div className='border-b border-red-500 pb-5 min-h-28 my-5 flex flex-wrap'>
        <div className='flex-1'>

        </div>
        <div className='flex-1 flex-col'>
          <p className='text-2xl font-bold text-center mb-5'>Rifas Elegidas</p>
          <div className='flex flex-wrap justify-center'>
            {rifasSelected.map( (rifa: Rifa) => (
              <div key={`rifa-${rifa.number}`} className='relative'>
                  <div  style={{backgroundColor: rifa.stripe ? 'white' :rifa.bgColor }} className="w-16 m-2 h-16 border border-gray-400 rounded-full cursor-pointer shadow-lg flex justify-center items-center overflow-hidden">
                    <div className='w-full justify-center flex h-10 items-center' style={{backgroundColor: rifa.bgColor}}>
                      <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center shadow-lg">
                          {rifa.number}
                      </div>
                    </div>
                  </div>
                  <button onClick={ () => deleteRifaSelect(rifa)} className='text-white rounded-full flex items-center justify-center absolute top-2 right-2 bg-red-600 w-5 h-5 text-xs hover:scale-110 transition-all font-bold'>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className='text-4xl font-bold my-10'>Selecciona tus rifas</p>
      <div className='flex flex-wrap justify-center'>
          {rifas.map( (rifa: Rifa) => (
            <button disabled={!rifa.enable} key={`rifa-${rifa.number}`} onClick={() => selectRifa(rifa)} style={{backgroundColor: rifa.stripe ? 'white' :rifa.bgColor }} className="w-20 m-2 h-20 border border-gray-400 rounded-full cursor-pointer shadow-lg flex justify-center items-center transition-all hover:scale-110 overflow-hidden disabled:opacity-5">
              <div className='w-full justify-center flex h-12 items-center' style={{backgroundColor: rifa.bgColor}}>
                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-lg">
                    {rifa.number}
                </div>
              </div>
            </button>
          ))}
      </div>
    </div>
  )
}
