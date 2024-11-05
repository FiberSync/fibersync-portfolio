import React from 'react'


const PcMock = ({img}) => {
  return (
    <div className="mockup-browser bg-slate-100 border-base-300 border">
  <div className="mockup-browser-toolbar">
    <div className="input border-base-300 border">https://FiberSync-Admin.com</div>
  </div>
  <img src={img} alt="Centered Image" className="max-w-full h-auto" />
</div>
  )
}

export default PcMock