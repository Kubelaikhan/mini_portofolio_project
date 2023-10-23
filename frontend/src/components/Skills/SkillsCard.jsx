/* eslint-disable react/prop-types */
import React from 'react'

const SkillsCard = ({item, index}) => {


    const {title, quote, foto_name} = item;

  return (
    <div className=' flex flex-col items-center rounded-[20px] p-[20px] border-[2px] odd:py-[20px]  lg:px-5'>
        <div><img src={`/src/assets/skills/${foto_name}.png`} alt="" /></div>
        <h2 className='text-[26px] leading-9 text-headingColor'>{title}</h2>
        <p className='text-gray-500 text-[16px]'>{quote}</p>
    </div>

  )
}

export default SkillsCard