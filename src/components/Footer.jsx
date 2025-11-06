import { Facebook, Github, Heart, Instagram, Linkedin ,ChevronsUp, Mail} from 'lucide-react'
import React from 'react'

const Footer = () => {
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
    <footer className="bg-gray-100 py-8 text-center text-gray-800 text-sm flex items-center gap-4 justify-around p-15  flex-col md:flex-row">
    <div className='flex flex-col items-center justify-start gap-4'>
      <h2 className='text-4xl font-bold flex items-center'> <Heart size={28} className='text-yellow-600 mr-2'/> Share<span className='text-yellow-500'>Bite</span></h2>
      <p className='max-w-sm'>Got extra homemade food? Share it with those nearby who could use a meal. Let’s make kindness the new flavor of our city.</p>
      <p className='flex gap-5 mt-3 '>
      <Github className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/>
       <Linkedin className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/> 
      <Instagram className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/>
       <Facebook className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer '/>
       <Mail className='hover:text-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer'/>
      </p>
      <button className='border font-medium border-black px-3 py-2 rounded-lg mt-6 flex gap-1 hover:bg-amber-500 hover:text-white hover:border-none transition-all duration-300 cursor-pointer'><span><ChevronsUp /></span> Back To Tap</button>
    </div>
    <div>
  
      <p>
      <h3 className='font-semibold text-2xl'>Useful Links</h3>
      
        <div className='flex flex-col'>
          {footItems.map((item,i)=>(
            <a key={i} href={item.path} className="mx-2 hover:text-yellow-500 text-lg">{item.label}</a>
          ))}
        </div>
      </p>
    </div>

     <div className='flex flex-col gap-3  bg-gray-100 pb-5'>
      <p className='font-semibold text-lg'>Legal</p>
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