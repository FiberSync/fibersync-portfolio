import React from 'react'


const MobileMock = () => {
  return (
    <div className="mockup-phone border-[#39ff14]">
    <div className="camera"></div>
    <div className="display">
    <div className="artboard artboard-demo phone-1 bg-white flex items-center justify-center">
                        {/* <h1 className="text-colorGreen text-4xl font-poppins font-bold">FiberSync</h1>
                        <p className='font-body text-black'> Welcome Field Agent !</p> */}
            <img className="h-full w-full object-fill" src={`/screen.png`} alt="Mobile Screen" />
        </div>
    </div>
    </div>
  )
}

export default MobileMock