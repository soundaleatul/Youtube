// import React from 'react'
// import Button from './Button'

// // list1 = [All, Movies, Songs, Live, Gamings]

// const ButtonList = () => {
//   return (
//     <div className='flex'>
//      {/* {list1.map((names)=>(<Button utubenames={names}/>)} */}
//       <Button name="Movies"/>
//       <Button name="Songs"/>
//       <Button name="Live"/>
//       <Button name="Gaming"/>
//       <Button name="Cricket"/>
//       <Button name="News"/>
//     </div>
//   )
// }

// export default ButtonList

import React from "react";
import Button from "./Button";
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Movie"/>
      <Button name="Music"/>
      <Button name="Hindi"/>
      <Button name="Telgu"/>
      <Button name="English"/>
      <Button name="News"/>
      <Button name="Sports"/>
      <Button name="Trailers"/>
      <Button name="Anime"/>
      <Button name="Cooking"/>
      <Button name="Valentines"/>
      <Button name="Podcasts"/>
      <Button name="Coding"/>
      <Button name="Web-Design"/>
      <Button name="FrontEnd"/>
      <Button name="BackEnd"/>
      <Button name="Analyst"/>
      
      
    </div>
  );
};

export default ButtonList;
