import React from 'react'

const TrialSection = () => {
    const data = [
        {
            _id: 1,
            amount:'50K+',
            details: "Mobile Downloads",
        },
        {
            _id: 2,
            amount:'80K+',
            details: "Happy Learners",
        },
        {
            _id: 3,
            amount:'53K+',
            details: "Sessions per month",
        },
        {
            _id: 4,
            amount:'200',
            details: "Speakers around the globe",
        },
    ]
  return (
    <div className='lg:flex xl:gap-40 md:gap-12  mt-[120px] ' >
        <div className='px-10 md:pl-16 xl:pl-[120px] grid grid-cols-2 gap-8 md:w-1/2 py-16' style={{background:'linear-gradient(90deg, #00D2FF -13.02%, rgba(0, 210, 255, 0) 103.77%)'}}>
            {data.map(d => (
                <div key={d._id} className={`p-1 rounded-xl flex items-center justify-center text-white text-center ${d._id === 3 && 'ml-4 -mr-4'} ${d._id === 4 && 'ml-4 -mr-4'}`} style={{backgroundColor:'#3A3636'}}>
                    <div>
                    <h3 className='text-3xl'>{d.amount}</h3>
                    <p>{d.details}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='md:w-1/2 px-10 md:pr-16 xl:pr-[120px] lg:mt-0 mt-3'>
            <p className='color-primary text-[16px]'>Book a trial</p>
            <h3 className='text-[40px] font-semibold'>Start your English <br /> speaking journey today!</h3>
            <p className='text-[16px] leading-6 mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</p>
            <button className="secondary-bg py-[15px] px-[32px] rounded-[80px] text-white">Book a trial</button>
        </div>
    </div>
  )
}

export default TrialSection