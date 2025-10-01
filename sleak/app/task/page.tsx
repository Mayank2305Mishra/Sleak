import { Calendar1Icon, ListTodo } from 'lucide-react'
import React from 'react'

const page = () => {
  const features = [
    {
      name: 'Todo',
      icon: <ListTodo />,
      about: 'Add in your task to todo list'
    },
    {
      name: 'Calender',
      icon: <Calendar1Icon/>,
      about: 'Check all of you calender events'
    },
  ]
  return (
    <div className='p-1'>
      <h1 className='p-3 text-3xl font-bold'><b className='text-gray-500'>Task</b> Planner</h1>
      <div className='flex-1 flex-col gap-4 p-2 pt-0 grid auto-rows-min md:grid-cols-3'>
        {features.map((item) => (
          <div key={item.name} className={`h-full  shadow-lg hover:shadow-xl bg-cyan-200/50 gap-2 flex flex-col aspect-video rounded-xl `}>
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
    </div>
  )
}

export default page