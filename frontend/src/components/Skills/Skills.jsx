import React from 'react'


import SkillsCard from './SkillsCard';

import useFetch from './../../hooks/useFetch.js';
import { BASE_URL } from './../../utils/config.js';

const Skills = () => {

  const {data: getAllSkills} = useFetch(`${BASE_URL}/`)

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

          { getAllSkills.map((item, index)=> (
          <SkillsCard item={item} index={index} key={index}/>
          ))} 
        </div>
      </div>
    </section>
    
  )
}

export default Skills