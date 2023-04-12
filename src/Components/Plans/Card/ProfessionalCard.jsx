import React from 'react'

const ProfessionalCard = ({ProfessionalInfo,ProfessionalAmount,ProfessionalHeader}) => {
  return (
    <div className="h-32 w-48 border-black border-2">
    <span className="ProfessionalImage_container">
    <img src="https://www.kindpng.com/picc/m/191-1911493_vector-illustration-of-business-computer-technician-hd-png.png" alt="Vector Illustration Of Business Computer Technician, HD Png Download@kindpng.com"/>
    </span>
    <p>{ProfessionalHeader}</p>
    <p className="PlanInfo_container">{ProfessionalInfo}</p>
    <span>{ProfessionalAmount}</span>
  </div>
  )
}

export default ProfessionalCard
