"use client"
import { googleLogin } from '@/lib/appwrite/user.action'
import { PlusIcon, Settings, StarIcon, } from 'lucide-react'
import React from 'react'

const page = () => {
  const features = [
    {
      name: 'New',
      icon: <PlusIcon />,
      about: 'Create a new Playground'
    },
    {
      name: 'Starred',
      icon: <StarIcon />,
      about: 'Check all of your starred playground projects'
    },
    {
      name: 'Settings',
      icon: <Settings/>,
      about: 'Change the playground settings'
    }
  ]
  return (
    <div className='p-1'>
      <h1 className='p-3 text-3xl font-bold'><b className='text-gray-500'>Play</b>ground</h1>
      <div className='flex-1 flex-col gap-4 p-2 pt-0 grid auto-rows-min md:grid-cols-3'>
        {features.map((item) => (
          <div key={item.name} className={`h-full  shadow-lg hover:shadow-xl bg-orange-200/50 gap-2 flex flex-col aspect-video rounded-xl `}>
            <div className='p-4'>
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.about}</p>
            </div>

            <div className="flex flex-col justify-end items-end text-end p-4 h-full ">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <button onClick={googleLogin}>
        Login
      </button>
    </div>
  )
}

export default page