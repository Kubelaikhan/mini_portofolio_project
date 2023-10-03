import React from 'react'

const Qualification = () => {
  return (
    <section>
      <div className="container">
        <div className='flex items-center justify-center'>
          <img src="src/assets/qualifications/edu.png" alt="Edu" />
          <p className='font-[800]'>Education</p>
          <img className='pl-[30px]' src="src\assets\qualifications\exp.png" alt="Exp" />
          <p className='font-[800]'>Experience</p>
        </div>

        <div className='flex flex-row items-center justify-evenly mt-[40px]'>
          <div className='Edu flex flex-column items-start'>
            <div className=' border-2 rounded-[20px] p-[30px] flex flex-col'>
              <h3 className='font-[800] text-[25px]'>Web Designs</h3>
              <p className='text-[16px]'> India - Institute </p>
              <p className='flex text-[12px] text-gray-500'> <img className='mr-[10px]' src="src\assets\date.png" alt="date" /> 2023 - Presents</p>
            </div>
            <div className='border-2 rounded-[20px] p-[30px] flex flex-col mt-[390px] border-1'>
              <h3 className='font-[800] text-[25px]'>Web Developer</h3>
              <p className='text-[16px]'>India - Institute </p>
              <p className='flex text-[12px] text-gray-500'> <img className='mr-[10px]' src="src\assets\date.png" alt="date" />  2017 - 2023</p>
            </div>
          </div>

          <div className="vertical-line"></div>

          <div className='Exp flex flex-column items-start'>
            <div className='border-2 rounded-[20px] p-[30px] flex flex-col'>
                <h3 className='font-[800] text-[25px]'>Art Designs</h3>
                <p className='text-[16px]'>India - Institute </p>
                <p  className='flex text-[12px] text-gray-500'> <img className='mr-[10px]' src="src\assets\date.png" alt="date" />  2023 - Presents</p>
              </div>
              <div className='border-2 rounded-[20px] p-[30px] mt-[390px] flex flex-col'>
                <h3 className='font-[800] text-[25px]'>Web Developer</h3>
                <p className='text-[16px]'>India - Institute </p>
                <p  className='flex text-[12px] text-gray-500'> <img className='mr-[10px]' src="src\assets\date.png" alt="date" />  2019 - 2022</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification