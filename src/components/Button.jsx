// import React from "react";

// const Button=({name})=>{
// return(
//     <div>
//         <button className="px-5 py-2 m-2 bg-gray-200  rounded-lg">{name}</button>
//     </div>
// )
// }

// export default Button;

import React from "react";

const Button = ({ name }) => {
  return (
    // <div className="px-5 m-2 bg-gray-300 rounded-lg">
    //   <button>{name}</button>
    // </div>
    <div className="flex-shrink-0 px-4 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 active:bg-gray-300">
      <button>{name}</button>
    </div>
  );
};

export default Button; 
