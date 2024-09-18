
import Image from 'next/image'; 
import { CirclePlay } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Mic } from 'lucide-react';
import { RotateCw } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Speech } from 'lucide-react';



const About = () => {
    return (
<section className=" lg:py-[100px]">
<h1 className="xl:flex xl:mx-auto mx-4 justify-center items-center mt-16 lg:text-[36px] text-[18px] uppercase font-extrabold font-playfair text-center"> the most effective way to <span className="text-blue-500 xl:mx-2">learn how to speak american!</span></h1>
<div className="container flex items-center mx-auto justify-center lg:mt-14">
  <div className="lg:flex justify-center xl:mx-20 lg:mx-8 mx-4"> 
    <div className="lg:w-[40%] w-full">
      <h1 className="xl:text-[72px] text-[60px] text-blue-500 font-bold text-center lg:text-left font-playfair">2D SOUND</h1>


      <h1 className="xl:text-[30px] text-[25px] text-black font-extrabold text-center lg:text-left uppercase font-playfair">motion technology</h1>
      
      <div className="flex items-center mx-4">
        <div >
        <Image 
          src="/Guranteed.svg" 
          height={100}
          width={100}
          alt="sheild"
          />
        </div>
        
      <p className=" uppercase xl:text-[36px] text-[28px] text-Pink text-center lg:text-left font-bold ">100% Results
       guarantee! </p>
      </div>
      <div className="lg:hidden block relative m-2">
      <Image src="/about.png" 
      width={400} 
      height={400}
      alt="about" 
      className="w-full h-auto block"
      />
        <div className="absolute inset-0 text-white p-2">
        <p >AI Empowered</p>
        <h1 className="lg:text-[48px] text-[30px] font-bold font-playfair -mt-2">2D SOUND</h1>
        <h1 className="lg:text-[20px] lg-[12px] uppercase font-playfair font-bold -mt-2">motion technology</h1>
       
        <div className="flex items-center justify-center cursor-pointer">
  
<CirclePlay size={30}
 />
        </div>

      </div>
      </div>
        
      <div className=" flex flex-col border-2 border-slate-300 shadow-md xl:mr-32 lg:mr-5 rounded-lg mt-4  lg:p-6 p-3 mx-2 font-playfair bg-white">

<div>
<h1 className="lg:text-[24px] text-[18px] text-blue-500 font-bold">24</h1>
<h1 className="lg:text-[20px] text-[18px] text-blue-500 font-bold capitalize">american </h1>
<h1 className="lg:text-[18px] text-[18px] text-black font-bold capitalize">consonants</h1>

</div>
<div className="lg:mt-4 mt-2">
<h1 className="lg:text-[24px] text-[18px] text-blue-500 font-bold">20</h1>
<h1 className="lg:text-[20px] text-[18px] text-blue-500 font-bold capitalize">american </h1>
<h1 className="lg:text-[18px] text-[18px] text-black font-bold capitalize">vowels</h1>

</div>
<div className="lg:mt-4 mt-2">
<h1 className="lg:text-[24px] text-[18px] text-blue-500 font-bold">30</h1>
<h1 className="lg:text-[20px] text-[18px] text-blue-500 font-bold capitalize"> unique american </h1>
<h1 className="lg:text-[18px] text-[18px] text-black font-bold capitalize">sound interactions</h1>

</div>
<div className=" lg:mt-6 mt-3">
<button className="bg-gradient-to-r from-Pink via-Purple to-Blue py-3 rounded-md text-white uppercase w-full  hover:translate-y-2 transition duration-700">
<h2 className="flex items-center justify-center">enroll today</h2>
</button>
</div>
      </div>
     
       
    
     
    
    </div>
  
    <div className="relative lg:w-[60%]  flex-shrink-0  z-10 "> 
      <div className="hidden lg:block">
      <Image src="/about.png" 
      width={400} 
      height={400}
      alt="about" 
      className="w-full h-auto block"
      />
        <div className="absolute inset-0 text-white p-5">
        <p >AI Empowered</p>
        <h1 className="text-[48px] font-bold font-playfair">2D SOUND</h1>
        <h1 className="text-[20px] uppercase font-playfair font-bold">motion technology</h1>
       
        <div className="flex items-center justify-center cursor-pointer">
  
<CirclePlay size={50}
 />
        </div>

      </div>
      </div>
    
      <div className="mt-5">
      <div className="bg-lightblue rounded-lg lg:p-3 p-2 mt-4 flex items-center justify-between">
        <div className="flex items-center lg:space-x-4">
        <span className="text-white bg-darkblue rounded-full p-2"><Eye size={30} /></span>
      <div className="text-white flex-col  mx-3 capitalize">
      <h1 className="  font-playfair font-bold lg:text-[20px] text-[16px]">see & learn</h1>

      <p className="lg:text-[18px] text-[14px]">Sound Pronunciation</p>
      </div>
      </div>
      <div className="lg:mx-4">
        <Image 
        src="/wave.svg"
        width={120}
        height={120}
        alt="sound"
        />
        </div>
      </div>

      <div className="bg-lightblue rounded-lg lg:p-3 p-2 mt-4 flex items-center justify-between">
        <div className="flex items-center lg:space-x-4">
        <span className="text-white bg-darkblue rounded-full p-2"><Mic size={30}/></span>
        <div className="flex-col mx-3 text-white capitalize ">
        <h1 className=" font-playfair font-bold lg:text-[20px] text-[16px]">repeat & practice</h1>
        <p className="lg:text-[18px] text-[14px] hidden lg:block">sound correctly with AI feedback</p>
        <p className=" text-[14px] lg:hidden block">sound correctly</p>

        </div>
        </div>
        <div className="lg:mx-4">
        <Image 
        src="/wave.svg"
        width={120}
        height={120}
        alt="sound"
        />
        </div>
       

        </div>
      <div className="bg-lightblue rounded-lg lg:p-3 p-2 mt-4 flex items-center mx-auto justify-between">
        <div className="flex items-center lg:space-x-4 space-x-2">
        <span className="text-white bg-darkblue rounded-full p-2"><RotateCw size={30} /></span>
        <div className=" flex-col capitalize text-white">
        <h1 className="font-playfair font-bold lg:text-[20px] text-[16px]">speak & pronounce</h1>
<p className="lg:text-[18px] text-[14px]"> english confidently</p>
        </div>
        </div>
        <div className="lg:mx-4">
        <Image 
        src="/wave.svg"
        width={120}
        height={120}
        alt="sound"
        />
        </div>
      
        
        
        </div>
      </div>
      <div className="mt-3 text-black lg:text-[22px] text-[18px] font-playfair font-normal capitalize text-center">      
        <h1>Research shows this program improves your American Accent by 80%</h1>

      </div>


    
    </div>
   
  </div>

</div>

<div className="container mx-auto lg:mt-20 mt-10 ">
  <div className="flex lg:flex-row flex-col items-center justify-center gap-5 xl:px-24  px-5">
  <div className="flex-col border-slate-400 shadow-md rounded-lg overflow-hidden bg-white ">
    <Image 
    src="/card-1.svg"
    height={450}
    width={450}
    alt="curriculum"
    />
    <div className="text-center m-4">
      <h1 className="capitalize text-black font-bold lg:text-[20px] text-[18px] font-playfair">accent reduction curriculum</h1>
    <p className="text-slate-500 lg:text-[14px] text-[12px]">American Accent Training modules; learn how to improve American consonants & vowels, intonation & emphasis to start speaking English fluently.</p>
    <button className=" w-full py-3 text-black border-2 border-Pink  rounded-md mt-4 hover:bg-Pink hover:text-white duration-700">
<h2 className="flex items-center justify-center capitalize font-playfair font-bold text-[18px]">learn more<ArrowRight /> </h2>
</button>
    </div>
  </div>
  <div className="flex-col border-slate-400 shadow-md rounded-lg overflow-hidden bg-white ">
    <Image 
    src="/card-2.svg"
  height={450}
  width={450}
  alt="community"
    />
    <div className="text-center m-4">
      <h1 className="capitalize text-black font-bold lg:text-[20px] text-[18px] font-playfair flex justify-center">in <span className="text-Pink mx-1"><Speech /></span> pronounci community</h1>
    <p className="text-slate-500 lg:text-[14px] text-[12px]">American Accent Training modules; learn how to improve American consonants & vowels, intonation & emphasis to start speaking English fluently.</p>
    <button className=" w-full py-3 text-black border-2 border-Pink  rounded-md mt-4 hover:bg-Pink hover:text-white duration-700">
<h2 className="flex items-center justify-center capitalize font-playfair font-bold text-[18px] ">join now<ArrowRight /> </h2>
</button>
    </div>
  </div>
  <div className="flex-col border-slate-400 shadow-md rounded-lg overflow-hidden bg-white">
    <Image 
    src="/card-3.svg"
    height={450}
    width={450}
    alt="subscription"
    
    />
    <div className="text-center m-4">
      <h1 className="capitalize text-black font-bold lg:text-[20px] text-[18px] font-playfair">american accent subscription</h1>
    <p className="text-slate-500 lg:text-[14px] text-[12px]">American Accent Training modules; learn how to improve American consonants & vowels, intonation & emphasis to start speaking English fluently.</p>
    <button className=" w-full py-3 text-black border-2 border-Pink  rounded-md mt-4 hover:bg-Pink hover:text-white duration-700">
<h2 className="flex items-center justify-center capitalize font-playfair font-bold text-[18px]">learn more<ArrowRight /> </h2>
</button>
    </div>
  </div>
  </div>

</div>
      
    
</section>
    );
}
export default About;