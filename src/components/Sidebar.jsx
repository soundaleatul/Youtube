// import React from "react";
// import { useSelector } from "react-redux";

// const Sidebar = () => {
// const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

// // Early return patttern
// // if(!isMenuOpen) return null

//   return !isMenuOpen?null:(
//     <div className="p-5 shadow-lg w-48">
//       <ul>
//         <li>Home</li>
//         <li>Shorts</li>
//         <li>Videos</li>
//         <li>Live</li>
//       </ul>

//       <h1 className="font-bold">Subscriptions</h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//       <h1 className="font-bold pt-4">Watch later</h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// ==================================================
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
      <ul className="font-semibold ">
        <li className="m-2">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2">Shorts</li>
        <li className="m-2">Videos</li>
        <li className="m-2">Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h1>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
