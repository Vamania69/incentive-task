import React from 'react'

export const DisplayWealth = ({heading , value}) => {
  return (
    
    <div className="include-esop bg-[#1F1F1F] rounded-md  border-border border-2 p-5 text-center ">
              <h3 className="text-[#AB9BFF] text-sm xs:text-lg sm:text-xl">
                {heading}
              </h3>
              <h1 className="p-2 md:p-4 text-xl xs:text-2xl sm:text-3xl">
                &#8377; {value}
              </h1>
            </div>
    
    
  )
}
