import React from 'react'

import { skills } from './../../assets/data/skills';
import SkillsCard from './SkillsCard';

const Skills = () => {


  return (
    <section>
      <div className="container">
        <div className='grid 
        grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3
        gap-5
        lg:gap-[30px]
        mt-[30px]
        lg:mt-[55px]
        '>

          { skills.map((item, index)=> (
          <SkillsCard item={item} index={index} key={index}/>
          ))} 
        </div>
      </div>
    </section>
    
  )
}

export default Skills