import React from 'react'
import data from '../data/projects.json'
import ProjectPageCard from '../components/projectPageComponents/ProjectPageCard'

const Projects = () => {
  return (
    <div className=' w-screen flex justify-center items-center flex-col gap-5 p-16 dark:bg-black bg-[#F0F2F5]'>
      {data?.projects.map(pj => (
        <ProjectPageCard title={pj.title} des={pj.description} date={pj.date} key={pj.id} src={pj.image} />
      ))}
    </div>
  )
}

export default Projects
