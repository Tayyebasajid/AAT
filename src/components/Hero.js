import Image from 'next/image'; 
import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';




const Hero = () => {
    return(
      
        <section>
      <div className="container mx-auto flex md:flex-row flex-col  justify-between items-center xl:px-24 lg:px-10   px-5">
      <h1 className=" text-4xl font-extrabold mb-4 capitalize font-playfair text-center lg:hidden block mt-20">American accent training</h1>
      <div className="relative items-center w-full lg:hidden block">
  {/* Background Image */}
  <Image
    src="/mob-hero.png"
    alt="Alex Image"
    width={520}
    height={520}
    className="w-full"
  />

  {/* Card Container */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 p-2">
    {/* Card 1 */}
    <div className="flex items-center bg-white  border-gray-200 border-2 rounded-full">
      <div>
        <Image
          src="/USflag.png"
          alt="US flag"
          width={40}
          height={40}
          className="object-cover p-1"
        />
      </div>
      <div className="p-1">
        <h2 className="text-[12px] font-bold capitalize">current top pro</h2>
        <p className="text-gray-900 capitalize text-[12px]">american accent coach</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center bg-white border-gray-200 border-2  rounded-full">
      <div>
        <Image
          src="/five-stars.png"
          alt="Review"
          width={40}
          height={40}
          className="object-cover p-1"
        />
      </div>
      <div className="p-1">
        <h2 className="text-[12px] font-bold flex items-center capitalize tracking-wider">
          <span className="text-Pink mr-1">70+</span> 5
          <span className="text-yellow-400 mx-1">
            <Star size={15} />
          </span>
          reviews
        </h2>
        <p className="text-gray-900 capitalize text-[12px]">read successful stories</p>
      </div>
    </div>
  </div>
</div>


        <div className="lg:flex items-center lg:mt-20 lg:w-[50%] w-full hidden">
          
          <Image
            src="/hero.png" 
            alt="Alex Image"
            width={520}
            height={520} 
        
          />
        </div>

      
        <div className="flex flex-col  justify-center mt-5   lg:mt-24 lg:w-[50%] w-full ">
          <h1 className="xl:text-7xl text-4xl font-extrabold mb-4 capitalize font-playfair text-center lg:text-left hidden lg:block">American accent training</h1>
          <p className="text-lg font-bold mb-4 capitalize text-center lg:text-left">
            speak english confidently & fluently with an american accent!
          </p>
          <div className="lg:flex flex-row gap-2 hidden">

          <div className="flex items-center bg-white hover:shadow-lg hover:translate-y-2 transition duration-700 border-gray-200 border-2 rounded-lg lg:w-1/2">
            <div>
              <Image
                src="/USflag.png"
                alt="US flag"
                width={60}
                height={60}
                className="object cover p-2"
              />
            </div>
            <div className="p-2">
              <h2 className="text-[18px] font-bold capitalize">current top pro</h2>
              <p className="text-gray-900 capitalize text-[14px]">american accent coach
              </p>
            </div>
          </div>

          <div className="flex items-center bg-white border-gray-200 border-2 hover:shadow-lg hover:translate-y-2 transition duration-700 rounded-lg lg:w-1/2">
            <div>
              <Image
                src="/five-stars.png"
                alt="Review"
                width={60} 
                height={60} 
                className="object-cover p-2"
              />
            </div>
            <div>
              <h2 className="text-[18px] font-bold flex items-center capitalize tracking-wider"><span className="text-Pink mr-1">70+</span> 5 <span className="text-yellow-400 mx-1"><Star size={18} /></span> reviews
             
              </h2>
              <p className="text-gray-900 capitalize text-[14px]">read successful stories
              </p>
            </div>
          </div>
        </div>
        <div className="p-[2px] bg-gradient-to-r from-Pink via-Blue to-Purple rounded-md lg:mt-6">
  <div className="flex lg:p-1 items-center bg-white rounded-md">
    <div className="p-1">
      <Image 
        src="/teacher.png"
        alt="Alex Image"
        width={80} 
        height={80} 
        className="rounded-md object-cover lg:w-20 lg:h-20 w-14 h-14"
      />
    </div>
    <div className="lg:mx-5 mx-2">
      <h2 className="lg:text-[18px] text:[14px] font-bold flex items-center capitalize">
        with <span className="text-Blue lg:mx-2">prof. alex</span>, ph.d. linguist
      </h2>
      <p className="text-gray-900 capitalize lg:text-[14px] text-[12px] flex-col">professor of english as a second language</p>
    </div>
  </div>
</div>

          <div className=" mt-6">
          <button className=" w-full bg-gradient-to-r from-Pink via-Purple to-Blue py-4 rounded-md text-white capitalize overflow-hidden group hover:translate-y-2 duration-700">
<h2 className="flex items-center justify-center ">try 1-hour session <ArrowRight  className=" transition-transform transform group-hover:translate-x-2" /></h2>
</button>
</div>
        </div>
        </div>
      
  

   
    </section>
  );
};

export default Hero;