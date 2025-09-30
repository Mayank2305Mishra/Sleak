import Image from 'next/image'
import React from 'react'
import SIcon from '@/public/Sleak_icon.png'
export function Icon ({h, w }:{h:number , w:number}) {
  return (
    <div>
        <Image src={SIcon} alt='.' priority height={h} width={w}/>
    </div>
  )
}

