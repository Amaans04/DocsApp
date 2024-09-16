// import React from "react";
// import Card from "./Card";

// const Foreground = () => {

//   const ref = useRef(null);

//   const data =[
//     {
//       desc:"Ayush is gay he is gayer than the gays in the house like Kirit and Rohit",
//       filesize:"69mb",
//       close:true,
//       tag:{ isOpen: true, tagTitle: "Download now", tagColor: "green"},
//     },
//     {
//       desc:"Ayush is gay he is gayer than the gays in the house like Kirit and Rohit",
//       filesize:"69mb",
//       close:true,
//       tag:{ isOpen: true, tagTitle: " now", tagColor: "blue"},
//     },
//     {
//       desc:"Ayush is gay he is gayer than the gays in the house like Kirit and Rohit",
//       filesize:"69mb",
//       close:true,
//       tag:{ isOpen: true, tagTitle: "Download now", tagColor: "green"},
//     },
//   ]
//   return <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wap">
//     {data.map((item,index)=> (
//       <Card data={item} reference={ref}/>
//     ))}
//   </div>;
// };

// export default Foreground;

import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Download your file from the secure server.",
      filesize: "69mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "File ready for download. Click to proceed.",
      filesize: "69mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },
    {
      desc: "Your download link is available below.",
      filesize: "69mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
