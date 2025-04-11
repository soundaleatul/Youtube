// import React from "react";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";

// const Head = () => {
//   const dispatch = useDispatch();
//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//     console.log("Clicked hamberger")
//   };
//   return (
//     // Main Div
//     <div className="grid grid-flow-col p-4 m-2 shadow-lg ">
//       {/* First Container containing logos and hamberger */}
//       <div className="flex col-span-1">
//         <img
//           className="h-8 cursor-pointer"
//           onClick={() => {
//             toggleMenuHandler();
//           }}
//           src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
//           alt="menu"
//         />
//         <a href="/">
//           <img
//             className=" h-8  cursor-pointer"
//             src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
//             alt="youtube-logo"
//           />
//         </a>
//       </div>
//       {/* Second Container containing Searchbar section */}
//       <div className="col-span-10 text-center flex  ml-64 ">
//         <input
//           type="text"
//           placeholder=""
//           className="w-1/2 p-2 border border-gray-400 rounded-l-full"
//         />
//         <button className="border border-gray-400  px-5 py-2 rounded-r-full bg-gray-100">
//           🔍
//         </button>
//         <img
//           className="w-10 h-10 mx-3 border border-gray-400 rounded-full bg-gray-100"
//           src="https://static.thenounproject.com/png/65485-200.png"
//           alt=""
//         />
//       </div>

//       {/* Third Container containing userSection */}
//       <div className="col-span-1 flex mx-2">
//         <img
//           className="h-8 mx-2  cursor-pointer"
//           alt="create-video"
//           src="https://static.thenounproject.com/png/3750242-200.png"
//         />
//         <img
//           className="h-8 mx-2  cursor-pointer"
//           alt="notification"
//           src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
//         />
//         <img
//           className="h-8  cursor-pointer"
//           alt="user-icon"
//           src="https://freesvg.org/img/abstract-user-flat-3.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;

// ===================================================

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col  p-2 m-2 shadow-lg justify-between">
      <div className="flex   px-10  py-3 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
        />
       <img
          className=" h-12 cursor-pointer"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube-logo"
        />
      </div>

      <div className="px-10  py-4">
        <input
          type="text"
          className="border border-gray-400 p-2 rounded-l-full"
          placeholder="Search Here"
          name=""
          id=""
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200 hover:bg-gray-300 px-5">
          🔍
        </button>
      </div>

      <div className="col-span-1 flex px-10  py-4 ">
        <img
          className="h-8 mx-2  cursor-pointer"
          alt="create-video"
          src="https://static.thenounproject.com/png/3750242-200.png"
        />
        <img
          className="h-8 mx-2  cursor-pointer"
          alt="notification"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />
        <img
          className="h-8  cursor-pointer"
          alt="user"
          src="https://freesvg.org/img/abstract-user-flat-3.png"
        />
      </div>
    </div>
  );
};

export default Head;
