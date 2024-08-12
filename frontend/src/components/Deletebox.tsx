import React from 'react'
import { useState,useEffect } from 'react';

const Deletebox = () => {
//     const [isReplyVisible, setIsReplyVisible] = useState(false);

//   const handleReplyClick = () => {
//     setIsReplyVisible((prev) => !prev);
//   };
//     const handleKeyDown = (event: KeyboardEvent) => {
//         console.log("Hello")
//         if (event.key === 'd' || event.key === 'D') {
//             console.log("Hello World")
//           event.preventDefault();
//           handleReplyClick();
//         }
//       };
//       useEffect(() => {
//         window.addEventListener('keydown', handleKeyDown);
    
//         return () => {
//           window.removeEventListener('keydown', handleKeyDown);
//         };
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, []);
    return(
    <div className="w-full h-[100vh] flex justify-center items-center  " >
      <div className="w-[443px] h-[249px] bg-[] bg-gradient-to-r from-[#141517] to-[#232528] flex justify-center items-center">
        <div className="w-[395px] h-[185px]">
          <div className="text-center text-white text-[24px] font-[700]">
            Are you sure ? 
          </div>
          <div className="font-[400] text-[13px] text-[#E8E8E8] text-center mt-[8px] mb-[32px]">
          Your selected email will be deleted.
          </div>
          <div className="flex text-white rounded-[4px] text-[14px] font-[600] justify-center items-center">
            <div className="bg-[#25262B] pt-[13px] pb-[13px] pl-[54px] pr-[54px] mr-[5px]">
              <button>Cancel</button>
            </div>
            <div className="bg-gradient-to-r from-[#FA5252] to-[#A91919] pt-[13px] pb-[13px] pl-[54px] pr-[54px] ml-[5px]">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deletebox