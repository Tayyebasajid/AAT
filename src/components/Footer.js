
import Image from 'next/image'; 
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Copyright } from 'lucide-react';



const Footer = () => {
    return(
        
            <section>
            <div className="bg-Gray w-full">
    <div className="container flex lg:flex-row flex-col items-center justify-between mx-auto xl:p-20 ">
        <div className="flex flex-col items-center justify-center mx-auto space-x-5 lg:mt-0 mt-5">
           <Image
           src="/logo.svg"
           alt="logo"
           width={120}
           height={120}
           />
          <h2 className="text-[42px] font-bold font-playfair uppercase">american</h2>
          <h2 className="text-[25px] font-playfair uppercase lg:-mt-2" >accent program</h2>
          <button className="bg-lblue text-white uppercase text-[22px] py-4 px-20 hover:bg-Pink duration-500">donate</button>
        </div>
        <div className="flex flex-col lg:p-10 mt-6 lg:mt-0 items-center justify-center mx-auto">
            <div className="flex flex-row space-x-4">
                <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
                <Facebook 
            size={25}
            />
                </div>
                <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
                <Instagram
            size={25}
            />
                </div>
                <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
                <Twitter 
            size={25}
            />
                </div>
                <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
                <Linkedin
            size={25}
            />
                </div>
                <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
                <Youtube 
            size={25}
            />
                </div>

            </div>
            <h1 className="font-playfair lg:text-[34px] text-[28px] text-black capitalize lg:mt-6 mt-4">american accent training</h1>
            <p className="lg:text-[28px] text-[20px] font-playfair text-gray-500 capitalize tracking-wide">for speakers of english as a</p>
            <p className="lg:text-[28px] text-[20px] font-playfair text-gray-500 capitalize tracking-wide"> second or other languages</p>

        </div>
            <div className="flex items-center justify center lg:hidden mt-10">
                <h2 className="text-[30px] font-bold font-playfair uppercase">more <span className=" text-lblue"> information</span></h2>
            </div>
            
        <div className="flex flex-col lg:p-10 p-5 justify-center mx-auto">
           <div className="hidden lg:block">
           <h2 className="lg:text-[42px] text-[30px] font-bold font-playfair uppercase ">more</h2>
           <h2 className="text-[25px] font-playfair uppercase -mt-2 text-lblue font-bold" >information</h2>
           </div>
        
        <div className=" flex flex-col items-center lg:items-start text-gray-500 capitalize lg:text-[24px] text-[20px] font-playfair leading-10">
        <a href='#'>privacy policy</a>
        <a href='#'>course policy</a>
        <a href='#'>terms and conditions</a>
        </div>
       

            </div>

        </div>
      

    </div>
    <footer className="bg-black text-white py-6 w-full">
        <div className="container flex items-center justify-center mx-auto px-4 ">
            <Copyright
            size={30}/>
          <p className="mx-2">American Accent Program, LLC 2022</p>
        </div>
      </footer>
</section>
        
    
    );
}
export default Footer;