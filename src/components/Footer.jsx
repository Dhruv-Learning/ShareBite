import { Facebook, Github, Heart, Instagram, Linkedin ,ChevronsUp, Mail} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate= useNavigate();

  const footItems=[
    {label:"Home",path:"/"},
    {label:"About Us",path:"/about"},
    {label:"Contact",path:"/contact"},
    {label:"Login",path:"/login"},
    {label:"Share Food",path:"/share"},
    {label:"Find Food",path:"/find-food"},
  ]
  return (
    <>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F6" fill-opacity="1.5" d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <footer className="bg-gray-100 py-8 text-center text-gray-800 text-sm flex items-center gap-4 justify-around p-15  flex-col md:flex-row">
    <div className='flex flex-col items-center justify-start gap-4'>
      <h2 className='text-4xl font-bold flex items-center'> <Heart size={28} className='text-yellow-600 mr-2'/> Share<span className='text-yellow-500'>Bite</span></h2>
      <p className='max-w-sm'>Got extra homemade food? Share it with those nearby who could use a meal. Let’s make kindness the new flavor of our city.</p>
      <p className='flex gap-5 mt-3 '>
      <Github onClick={()=>navigate("https://github.com/Dhruv-Learning")}  className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/>
       <Linkedin className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/> 
      <Instagram className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/>
       <Facebook className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer '/>
       <Mail className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/>
      </p>
      <button className='border font-medium border-black px-3 py-2 rounded-lg mt-6 flex gap-1 hover:bg-amber-500 hover:text-white hover:border-none transition-all duration-300 cursor-pointer'><span><ChevronsUp /></span> Back To Tap</button>
    </div>
    <div>
  
      <p>
      <h3 className='font-bold text-lg'>Useful Links</h3>
      
        <div className='flex flex-col gap-2 mt-2'>
          {footItems.map((item,i)=>(
            <a key={i} href={item.path} className="mx-2 hover:text-yellow-500">{item.label}</a>
          ))}
        </div>
      </p>
    </div>

     <div className='flex flex-col gap-2  bg-gray-100'>
      <p className='font-bold text-lg'>Legal</p>
    <p className='mx-2 hover:text-yellow-500'>Privacy Policy</p>
    <p className='mx-2 hover:text-yellow-500'>Term of Service</p>
    <p className='mx-2 hover:text-yellow-500'>Cookies of Settigs</p>
    </div>

    </footer>
    <p className='flex items-center justify-center bg-gray-100 pb-3 text-gray-600'> ©2025 Developed by creative thinkers 💡 of India </p>
   
          </>
  )
}

export default Footer