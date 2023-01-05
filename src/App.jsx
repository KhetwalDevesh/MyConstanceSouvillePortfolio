import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pl-[21px] pr-[21px] pt-[21px] bg-[#b2b2a8] top-0 h-full">
      <div className='bg-[#c1c0b6] rounded-[45px] h-full'>
      <header className='p-[3vh] pt-[4vh] mb-[calc(16vh + 10px)] '>
      <h1 className='m-0 text-[12rem] text-[#3f3b37] font-ppEditorialNew tracking-[-0.07em] leading-[.7] flex space-x-[24.5rem] '>
      <span>Constance</span> <span>Souville</span>
      </h1>
      <div className='grid grid-cols-4 gap-[24rem] grid-flow-dense mt-[1.5rem] pt-[1.3rem] text-[11px] tracking-[.06em] leading-[1] font-[700] border-t-[1px] border-[#3f3b37] text-[#3f3b37]'>
        <p>FRONT-END DEVELOPER</p>
        <p>AVAILABLE FOR FREELANCE</p>
        <p>EMAIL</p>
        <p>
          <span>MONTREAL</span>
        </p>
      </div>
      </header>
      <div className='pl-[3vh] pr-[3vh]  mt-[85px] '>
        <div className='flex space-x-[360px] justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37]'>
          <div className='h-[140px] w-80 rounded-br-[33px] bg-[#fbefdf] '></div>
          <div className='font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]'>French</div>
          <div className='h-[140px] w-80 rounded-br-[33px] bg-[#db4c44]'></div>
        </div>
        <div className='font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] flex  space-x-[520px] justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37]'>
            <span className='tracking-[-.03em]'>Frontend</span>
            <span className='tracking-[-.03em]'>Developer</span>
        </div>
        <div className='flex space-x-[185px]  justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37]'>
        <div className='font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]'>Based</div>
        <div className='h-[140px] w-80 rounded-br-[33px] bg-[#e7aa2c]'></div>
          <div className='font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]'>in Montreal</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
