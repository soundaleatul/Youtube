// import React from 'react'

// const VideoCard = ({info}) => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default VideoCard

import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-2xl hover:bg-gray-200 cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="videoImage" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
