// import React, { useState } from "react";

// function ServicesCard({ image, title, description }) {
//   const [servicesCard, setServicesCard] = useState(true);
//   return (
//     <>
//       {servicesCard ? (
//         <div
//           onMouseEnter={() => setServicesCard(false)}
//           className="flex flex-col justify-center items-center bg-[#ffff] h-56 w-96 drop-shadow-2xl	rounded-t-lg"
//         >
//           <img src={image} alt="jobussnies" />
//           <h2>{title}</h2>
//         </div>
//       ) : (
//         <div
//           onMouseLeave={() => setServicesCard(true)}
//           className="flex flex-col justify-center items-center bg-[#1A428A] h-56 w-96 drop-shadow-2xl	rounded-t-lg"
//         >
//           <h2>{title}</h2>
//           <p>{description}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default ServicesCard;

// // export default x;

// // const[x,setX]= useState(1)

// // <div>{x}</div>
// // <button onClick={()=> setX(x+1)}>increase</button>

import React from "react";

function ServicesCard({ image, title, description }) {
  // const [servicesCard, setServicesCard] = useState(true);
  return (
    <>
      <div
        // onMouseEnter={() => setServicesCard(false)}
        className="group flex flex-col justify-center items-center gap-3 bg-[#ffff] h-56 w-96 shadow-[3px_3px_19px_0px_#0000000d]	rounded-t-lg hover:bg-[#1A428A]"
      >
        <img src={image} alt="jobussnies" className="group-hover:hidden" />
        <h2 className="font-bold text-2xl text-[#1A428A] group-hover:hidden">
          {title}
        </h2>
        
        <h2 className="text-white font-bold text-2xl hidden group-hover:flex">
          {title}
        </h2>
        <p className="text-white px-4 mb-4 text-center leading-6 hidden group-hover:flex">
          {description}
        </p>
      </div>
    </>
  );
}

export default ServicesCard;

// const X = ({ setServicesCard, title, description }) => {
//   return (
//     <div
//       onMouseLeave={() => setServicesCard(true)}
//       className="flex flex-col justify-center items-center gap-3 bg-[#1A428A] h-56 w-96 shadow-[3px_3px_19px_0px_#0000000d]	rounded-t-lg"
//     >
//       <p className="text-white px-4 mb-4 text-center leading-6">
//         {description}
//       </p>
//     </div>
//   );
// };
