import React, { useContext } from 'react'
import { authProvider } from '../../Contexts/Usercontext'
import Banner from './Banner/Banner'
import Offers from './Offers/Offers'
import TrialSection from './TrialSection/TrialSection'
import WorkFlow from './WorkFlow/WorkFlow'

const Home = () => {
    const {user} = useContext(authProvider)
    if(user){
        return <div className='flex h-[500px] text-center items-center justify-center'> 
            <div>
            <h1 className='text-5xl font-bold '>You are logged in</h1>
            <p className='mt-4 text-lg'>To logout click on the profile icon.</p>
            </div>
        </div>
    }
  return (
    <div>
        <Banner/>
        <TrialSection/>
        <Offers/>
        <WorkFlow/>
    </div>
  )
}

export default Home