import React from 'react'
import MainProjectCard from '../../../common/MainProjectCard'
import data from "../../../data/projects.json"

const MainProjects = () => {
    return (
        <div className=' flex flex-col gap-5'>
            {data.projects.map(pj => (
                <MainProjectCard title={pj.title} des={pj.description} date={pj.date} key={pj.id} src={pj.image} />
            ))}
        </div>
    )
}

export default MainProjects
