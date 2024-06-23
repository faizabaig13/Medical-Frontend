"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {

  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-2 text-center' >
        <h2 className='font-bold
        text-4xl tracking-wide text-sky-950'>
            Find a  <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-gray-500 text-lg w-3/5'>Whether you need a general practitioner, a dermatologist, or a cardiologist, our platform allows you to search for doctors by their specialty, ensuring you find the right expert for your specific health needs.</h2>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." className="focus:outline-none focus:ring focus:ring-violet-300" />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2'/>
        Search</Button>
    </div>
        
        {/* Display List of Category  */}
        <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 '>
        {categoryList.length>0?categoryList.map((item,index)=>index<6&&(
          <Link href={'/search/'+item.attributes.Name} key={index} className='flex 
          flex-col text-center items-center
          p-5 bg-sky-100 m-2 rounded-full cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out'>
            {/* <Image src={item.attributes?.Icon?.data.attributes?.url}
            alt='icon'
            width={40}
            height={40}/> */}
            <label className='text-sky-600 text-sm font-bold'>{item?.attributes?.Name}</label>
          </Link>
        ))
      :
      [1,2,3,4,5,6].map((item,index)=>(
        <div className=' bg-slate-200 m-2
       w-[130px] h-[120px] rounded-lg animate-pulse'>
            
        </div>
    ))
     
      }
        </div>
    </div>
  )
}

export default CategorySearch