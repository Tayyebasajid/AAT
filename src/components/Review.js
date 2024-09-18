import Image from 'next/image'; 
import { ArrowRight } from 'lucide-react';
import { Video } from 'lucide-react';

const Review = () => {
    return (
      <section>
       <div className="container flex lg:flex-row flex-col items-center justify-center mx-auto lg:py-[100px] py-[50px]">
<div className="flex flex-col justify-center mx-auto lg:w-1/2 items-center"> 
    <h1 className="uppercase lg:text-[70px] text-[50px] font-extrabold text-black font-playfair">love<span className="text-Pink mx-2">from</span>
    </h1>
    <span className="uppercase  text-lightblue font-extrabold lg:text-[80px] text-[60px] -mt-5 font-playfair ">students</span>

    <p className="lg:text-[30px] text-[20px] text-center capitalize lg:flex flex-col items-center">Students’ Reviews & Results 
        <span className="mx-1">on American Accent Training</span> </p>
        <div>
        <div className="flex flex-col gap-5 mt-12 mx-4">
<div className="max-w-lg bg-gray-100 border-l-8 border-Pink rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review1.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“I feel blessed ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
   <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">tians result here</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
    <div className="flex items-center justify-center">
    <a href="#" className="text-Blue">video review</a><span className="text-Blue mx-1"><Video/></span>

    </div>
   </div>
  </div>
</div>
<div className="max-w-lg bg-gray-100 border-l-8 border-lightblue rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review2.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“I am thankful ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and Im grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">janes review</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
</div>
  
  </div>
</div>
<div className="max-w-lg bg-gray-100 border-l-8 border-Pink rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review3.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px]  text-[12px] font-semibold">“I am surprised ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">adams review</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
</div>
  </div>
</div>
<div className="max-w-lg bg-gray-100 border-l-8 border-lightblue rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review4.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“Interesting ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">wills review</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
</div>
  </div>
</div>

</div>
        </div>


</div>
<div className="flex items-center justify-center mx-auto lg:w-1/2 lg:mt-12 mt-5">
<div className="flex flex-col gap-5 items-center justify-center mx-4">
<div className="max-w-lg mx-auto bg-gray-100 border-l-8 border-Pink rounded-lg shadow-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-2">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review5.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div >
    <h3 className="lg:text-[15px] text-[12px]  font-semibold">“I feel free ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">yashs result here</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
    <div className="flex items-center justify-center">
    <a href="#" className="text-Blue">video review</a><span className="text-Blue mx-1"><Video/></span>

    </div>
   </div>
  </div>
</div>

<div className="max-w-lg mx-auto bg-gray-100 border-l-8 border-lightblue rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-2">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review6.png"
      width={90}
      height={90}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“best classes ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">thiagos review here</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
   
   </div>
  </div>
</div>
<div className="flex flex-col gap-y-5 items-center justify-center ">
<div className="max-w-lg mx-auto bg-gray-100 border-l-8 border-Pink rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review7.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“valuable classes ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">andrews result here</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
    <div className="flex items-center justify-center">
    <a href="#" className="text-Blue">video review</a><span className="text-Blue mx-1"><Video/></span>

    </div>
   </div>
  </div>
</div>
<div className="max-w-lg mx-auto bg-gray-100 border-l-8 border-lightblue rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review8.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“I am inspired ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">josephs review</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
    
   </div>
  </div>
</div>
<div className="max-w-lg mx-auto bg-gray-100 border-l-8 border-Pink rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review9.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px]  text-[12px] font-semibold">“great connection ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">arias result here</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
    <div className="flex items-center justify-center">
    <a href="#" className="text-Blue">video review</a><span className="text-Blue mx-1"><Video/></span>

    </div>
   </div>
  </div>
</div>

<div className="max-w-lg mx-auto bg-gray-100 border-l-8 border-lightblue rounded-lg lg:p-6 p-1 flex items-center lg:space-x-4 space-x-1">

  <div className="flex-shrink-0">
    <Image
      className=" rounded-full object-cover"
      src="/review10.png"
      width={80}
      height={80}
      alt="Reviewer"
    />
  </div>
  <div>
    <h3 className="lg:text-[15px] text-[12px] font-semibold">“I an very happy ...”</h3>
    <p className="lg:mt-2 text-gray-700 lg:text-[15px] text-[12px]">
    I feel confident speaking  English, and I’m grateful that I met Alex as a part of my English learning journey…    </p>
    <div className="flex items-center justify-between capitalize lg:text-[14px] text-[12px] font-semibold">
    <div className="flex items-center justify-center">
    <a href="#" className="text-Pink ">valds result here</a><span className="text-Pink"><ArrowRight size={16}/></span>

    </div>
    <div className="flex items-center justify-center">
    <a href="#" className="text-Blue">video review</a><span className="text-Blue mx-1"><Video/></span>

    </div>
   </div>
  </div>
</div>
</div>
</div>
</div>

       </div>
       <div className="bg-sky w-full h-full mt-10 lg:mt-0">
        <div  className="flex flex-col items-center justify-center p-10 uppercase font-playfair ">
          <h1 className="text-[50px] ">
            
american
          </h1>
          <h1 className="text-[30px]">
            accent program
          </h1>
        </div>
        <div className="container flex lg:flex-row flex-col items-center lg:justify-between justify-center mx-auto lg:px-20 lg:py-10 pb-10 lg:-mt-24">
          <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
          />
          <h2 className="capitalize text-lblue font-bold font-playfair text-[50px] my-10 lg:mt-0">authorized by</h2>
          <Image
          src="/samgov.svg"
          alt="logo"
          width={200}
          height={200}
          />
        </div>
        </div> 
        <div className="container lg:flex flex-col justify-center items-center mx-auto py-20 hidden">
       
<div className="flex flex-row items-center justify-between mx-auto xl:space-x-11 space-x-5 ">
  <Image
  src="/worlduni.svg"
  alt="uni"
  width={300}
  height={300}
  />
  <div className="lg:flex flex-col font-playfair font-bold hidden">
  <h1 className="xl:text-[40px] lg:text-[35px] text-lblue uppercase" >my students </h1>
  <span className="xl:text-[70px] lg:text-[65px] text-Pink uppercase -mt-6">study at</span>

  </div>
<Image
src="/austin.svg"
width={300}
  height={300}
  alt="university"
/>
</div>
<div className="flex flex-row  items-center justify-between mx-auto xl:space-x-14 lg:space-x-2">
  <Image
  src="/M-uni.svg"
  width={280}
  height={280}
  alt="university"
  />
  <Image
  src="/dehliuni.svg"
  width={280}
  height={280}
  alt="university"

  />
  <Image
  src="/tom.svg"
  width={280}
  height={280}
  alt="university"

  />
  <Image
  src="/troy.svg"
  width={120}
  height={120}
  alt="university"

  />

</div>
<div className="flex flex-row items-center justify-between mx-auto space-x-14">
  <Image
  src="/george.svg"
  width={280}
  height={280}
  alt="university"

  />
  <Image
  src="/aouc.svg"
  width={280}
  height={280}
  alt="university"

  />
  <Image
  src="/institute.svg"
  width={150}
  height={150}
  alt="university"

  />
  

</div>
        </div>

        <div className="container flex flex-col justify-center items-center mx-auto py-20 lg:hidden">
        <div className="flex flex-col font-playfair font-bold ">
  <h1 className="text-[28px] text-lblue uppercase" >my students </h1>
  <span className="text-[55px] text-Pink uppercase -mt-6">study at</span>

  </div>
<div className="flex flex-row items-center justify-between mx-4 space-x-2 ">
  <Image
  src="/troy.svg"
  alt="uni"
  width={90}
  height={90}
  />
  
<Image
src="/austin.svg"
width={100}
  height={100}
  alt="university"
/>
<Image
  src="/institute.svg"
  width={90}
  height={90}
  alt="university"
  />
</div>
<div className="flex flex-row  items-center justify-between mx-4 space-x-14 mt-10">
  

  <Image
  src="/dehliuni.svg"
  width={130}
  height={130}
  alt="university"

  />
  <Image
  src="/worlduni.svg"
  width={130}
  height={130}
  alt="university"

  />
 

</div>
<div className="flex flex-row  items-center justify-between mx-4 space-x-14 mt-10">
  

  <Image
  src="/M-uni.svg"
  width={130}
  height={130}
  alt="university"

  />
  <Image
  src="/tom.svg"
  width={130}
  height={130}
  alt="university"

  />
 

</div>
<div className="flex flex-row  items-center justify-between mx-4 space-x-14 mt-10">
  

  <Image
  src="/george.svg"
  width={130}
  height={130}
  alt="university"

  />
  <Image
  src="/aouc.svg"
  width={130}
  height={130}
  alt="university"

  />
 

</div>
        </div>
        
       </section>
       
      
    );
}
export default Review;