import React, { useState } from 'react'
import Buttons from './Buttons'
const list = ["All", "Namaste js", "Akshay Saini", "React", "Music", "Live", "News", "Computer", "Marvel", "DC", "Science", "ISRO", "Space", "Technology", "Live", "News", "Computer", "Marvel", "DC", "Science", "ISRO", "Space", "Technology"];
const ButtonList = () => {
  const [totalButton, setTotalButton] = useState(1);
  return (
    <div className='flex mx-20 mt-3 sticky top-[74px] z-[1] bg-white'>
      <div>
        <button className={`px-3 py-1 m-1 rounded-full hover:bg-gray-400 shadow-2xl shadow-white z-10  ${totalButton > 1 ? "" : "invisible"}`} onClick={() => setTotalButton(totalButton > 1 ? totalButton - 1 : totalButton)}>⟨</button>
        <button className={` px-3 py-1 m-1 rounded-full hover:bg-gray-400 absolute right-1 ${totalButton >= (list.length) / 13 ? "hidden" : ""}`} onClick={() => setTotalButton(totalButton < (list.length) / 13 ? totalButton + 1 : totalButton)}>⟩</button>
      </div>
      <div className='flex mx-4'>


        {
          list.slice(totalButton * 12 - 12, totalButton * 12).map((button, index) => {
            return <Buttons key={index} name={button} />;
          })
        }
      </div>
    </div>
  )
}

export default ButtonList;