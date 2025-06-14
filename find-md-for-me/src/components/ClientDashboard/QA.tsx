"use client"
import React from 'react';
import DashboardTitle from '../shared/DashboardTitle';
import { GoQuestion } from "react-icons/go"; 
import { FaRegFileAlt } from 'react-icons/fa';
import { useGetQAQuery } from '@/redux/apiSlices/ClientDashboardSlices';
import { baseUrl } from '@/redux/api/apiSlice';
const QA = () => { 
  const {data} = useGetQAQuery(undefined)  
  const QAData = data?.data
  // console.log(QAData); 
    return (
        <div className=' lg:p-10 p-4'>
            <DashboardTitle>QA</DashboardTitle>  
            <div className='flex justify-center items-center'>
            <div className='flex gap-2 w-5/6'>
                <p className='text-xl text-[#C738BD] mt-1 font-semibold'> 1.</p> 
                <div className=' w-full '>
                    <p className=' w-full py-2 ps-2 bg-[#F9F9F9] shadow-md mb-3'>{QAData?.title}</p>  
                    {
                       QAData?.file?.map((value:any , index:number)=><div key={index} className=" bg-[#E8F6FE] px-4 py-3 rounded-lg w-full mb-3" >
                       <a className="flex text-[#1D75F2] items-center gap-2"  href={`${baseUrl}${value}`}
                         download="Quality Assurance .pdf" 
                         target="_blank">  <span> <FaRegFileAlt /> </span>
                         <span>Quality Assurance.pdf</span>
                       </a>
                     </div> )
                    } 
                    <p className=' w-full py-2 ps-2 bg-[#F9F9F9] shadow-md mb-3 h-[80px]'>{QAData?.description}</p>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default QA;