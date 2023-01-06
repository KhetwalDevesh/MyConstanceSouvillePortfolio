import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-[21px] pb-24 bg-[#b2b2a8] top-0 h-full ">
      <div className='bg-[#c1c0b6] rounded-[45px] h-full '>
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
        <div className='flex space-x-[360px] justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37] '>
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


      <div className='mt-[85px] px-[3vh] pb-[3vh]'>
      <div className=' h-44 border-b-[1px] border-[#3f3b37] flex items-center justify-center'>
      <div className=' flex items-center justify-center  h-44 font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]'>Projects</div>
      </div>
      <div className='pt-[3vh] grid grid-cols-15 pb-[21vw]'>
      <a href="" className='p-[20px] min-h-[16.8rem] col-start-1 col-span-6  rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col justify-end'>
        <div className='flex justify-between text-[40px]'>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium '>StalkTrendz</div>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium '>01</div>
        </div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-7 col-span-6 rounded-br-[2.8rem] bg-[#e7aa2c] h-[37.5rem] flex flex-col justify-end'>
        <div className='flex justify-between text-[40px]'>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium '>Utopia Farming</div>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium '>02</div>
        </div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-1 col-span-9 rounded-br-[2.8rem] bg-[#db4c44] h-[37.5rem] flex flex-col justify-end'>
        <div className='flex justify-between text-[40px]'>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium '>Creative Developer</div>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium '>03</div>
        </div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-10 col-span-6 rounded-br-[2.8rem] bg-[#fbefdf] h-[37.5rem]'>
        <div  ></div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-1 col-span-6 rounded-br-[2.8rem] bg-[#fbefdf] h-[37.5rem]'>
        <div  ></div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-7 col-span-9 rounded-br-[2.8rem] bg-[#e7aa2c] h-[37.5rem]'>
        <div  ></div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-4 col-span-6 rounded-br-[2.8rem] bg-[#db4c44] h-[37.5rem]'>
        <div  ></div>
        </a>
        <a href="" className='p-[20px] min-h-[16.8rem] col-start-10 col-span-6 rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem]'>
        <div  ></div>
        </a>
      </div>
      </div>

      <div className='bg-[#3f3b37] h-full w-full rounded-[3.2rem] p-[3vh] pt-[8rem] '>
                <div className='pl-52'>
                  <p className='pl-40 pb-40 pr-40 text-[#fbefdf] text-[4rem] font-neueHaasDisplayRoman leading-none tracking-[.05em] '>I'm currently looking for a web development
                   internship/job based on my skills. I am free and ready to join immediately. <br />Consider contacting me if you 
                  are interested to interview me. </p>
                </div>

      <div className='pt-[3vh] grid grid-cols-15 pb-[18rem]'>
      <a href="" className='min-h-[16.8rem] p-[20px] col-start-1 col-span-6 border-[1px] border-[#fbefdf]  rounded-br-[2.8rem]  h-[37.5rem] flex flex-col justify-between'>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium text-[20px]'>Twitter</div>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium text-[20px]'>@khetwal_devesh</div>
        </a>
        <a href="" className='min-h-[16.8rem] p-[20px] min-h-[16.8rem] col-start-7 col-span-6 border-[1px] border-[#fbefdf] rounded-br-[2.8rem]  h-[37.5rem] flex flex-col justify-between'>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium text-[20px]'>LinkedIn</div>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium text-[20px]'>Devesh Khetwal</div>
        </a>
        <a href="" className='min-h-[16.8rem] p-[20px] min-h-[16.8rem] col-start-1 col-span-9 border-[1px] border-[#fbefdf] rounded-br-[2.8rem]  h-[37.5rem] flex flex-col justify-between'>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium text-[20px]'>Email</div>
        <div className='text-[#fbefdf] font-ppNeueMontrealMedium text-[20px]'>deveshkhetwal05@gmail.com</div>
        </a>
      </div>
        <a href="" className='text-[#fbefdf] text-[11px] font-ppNeueMontrealBold'>BACK TO THE TOP</a>
      </div>
      </div>
    </div>
  )
}

export default App
