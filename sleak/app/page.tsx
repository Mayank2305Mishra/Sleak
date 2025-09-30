import React from 'react'
import Code from '@/public/Code.png'
import CalendarIcon from '@/public/Calendar.png'
import Design from '@/public/Design.png'
import ImageGEN from '@/public/ImageGEN.png'
import RAG from '@/public/RAG.png'
import Research from '@/public/Research.png'
import Image from 'next/image'

const page = () => {
  const agents = [
    {
      name: 'Coding Agent',
      bg: 'bg-orange-200/90',
      icon : Code
    },
    {
      name: 'Scheduling Agent',
      bg: 'bg-lime-300/90',
      icon: CalendarIcon
    },
    {
      name: 'ImageGEN Agent',
      bg:'bg-gray-400/90',
      icon: ImageGEN
    },
    {
      name: 'Design Agent',
      bg:'bg-red-200/90',
      icon: Design
    },
    {
      name: 'Research Agent',
      bg:'bg-violet-200/90',
      icon: Research
    },
    {
      name: 'RAG System Agent',
      bg:'bg-rose-300/90',
      icon : RAG
    }
  ]
  return (
    <div className=' p-3'>
      <div className='p-5'>
      <h1 className='text-3xl font-semibold'>AI Agents</h1>
      </div>
      <div className='flex-1 flex-col gap-4 p-4 pt-0 grid auto-rows-min md:grid-cols-3'>
        {agents.map((agent) => (
          <div key={agent.name} className={` ${agent.bg} flex flex-col  items-center justify-center   aspect-video rounded-xl `}>
            <Image src={agent.icon} alt='.' height={110} width={110}/>
            <h1 className='text-xl font-semibold'>{agent.name}</h1>
          </div>
        ))}
      </div>
      <br />
      
    </div>
  )
}

export default page