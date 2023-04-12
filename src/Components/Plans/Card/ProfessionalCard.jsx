import React from 'react'

const ProfessionalCard = ({ProfessionalImage,ProfessionalInfo,ProfessionalAmount,ProfessionalHeader}) => {
  return (
    <div className="h-32 w-48 border-black border-2">
    <span className="ProfessionalImage_container">
      <img className='h-[10em] w-[8em] border-2' src={ProfessionalImage} alt="ProfessionalImage" />
    </span>
    <p>{ProfessionalHeader}</p>
    <p className="PlanInfo_container">{ProfessionalInfo}</p>
    <span>{ProfessionalAmount}</span>
  </div>
  )
}

export default ProfessionalCard
