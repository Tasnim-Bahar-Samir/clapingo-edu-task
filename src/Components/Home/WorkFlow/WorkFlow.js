import React from 'react'
import FlowCard from './FlowCard'
import img from '../../../assets/images/Subscribe & plans 1.png'

const WorkFlow = () => {
    
  return (
    <div className='px-20 md:px-20 xl:px-[120px]'>
        <h1 className='text-4xl mt-28 mb-4 font-semibold' style={{color:'#001F27'}}>How it works?</h1>
        <div className='grid md:grid-cols-3 md:gap-24'>
        
        <div>
            <FlowCard title="1. Create Account" details="Create your account using phone number or email and take a free trial at ₹1."/>
            <FlowCard title="3. Select time slot" details="Subscribe & select any time slot between 10 AM to 12 midnight."/>
        </div>
        <div className='h-[510px] relative mb-10 md:mb-0'>
            <img src={img} className='w-full h-full' alt="" />
            <div className='h-44 absolute w-full bottom-0' style={{background:'linear-gradient(180deg, rgba(251, 251, 253, 0) -50%, #FBFBFD 74.21%)', filter:'blur(10px)'}}>

            </div>
        </div>
        <div>
        <FlowCard title="2. Subscribe" details="Choose your preferred duration and select subscription package for your sessions. "/>
        <FlowCard title="4. You are done" details="That’s it! Start practicing and reach your learning goal in speaking."/>
        </div>
    </div>
    </div>
    
  )
}

export default WorkFlow