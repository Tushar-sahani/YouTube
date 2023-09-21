import React, { useEffect, useState } from "react";
import menu from "../assets/menu.png";
import logo from "../assets/YouTube-Logo.wine.png";
import profile from "../assets/profile.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION } from "../utils/constant";
import {cacheResult} from "../utils/searchSlice";
const Head = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store)=>store.search);

  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION + searchQuerry);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResult({
      [searchQuerry]:json[1],
    }))
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuerry]){
        setSuggestions(searchCache[searchQuerry]);
      }
      else{
        getSearchData()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);
  return (
    <div className="grid grid-flow-col sticky top-0 bg-white z-10 ">
      <div className="flex align-middle justify-center col-span-1">
        <img
          className="-ml-4 mt-5 w-9 h-9 cursor-pointer hover:bg-[#f8f8f8] rounded-full"
          src={menu}
          onClick={() => toggleMenuHandeler()}
          alt="menu"
        />
        <a href="/">
          <img className=" w-28 h-15" src={logo} alt="youtube" />
        </a>
      </div>
      <div className="col-span-10  m-5 ">
        <div className="flex text-center justify-center">
          <input
            className="w-1/2 border-2 h-8 p-2 rounded-l-full outline-blue-500 border-gray-300 bg-[#f8f8f8]"
            type="text"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
          />
          <button className="h-8 border border-gray-300 rounded-r-full px-2">
            <SearchOutlinedIcon />
          </button>
          <button className="h-8 ml-2 p-1 rounded-full border border-gray-300 bg-[#f8f8f8]">
            🎙️
          </button>
        </div>
        {
        suggestions.length>0?<div className="fixed mx-56 my-2 w-[37%] z-40 bg-white border border-gray-100 rounded-lg p-2">
          <ul className=" ">
            {
              suggestions.map((suggestion,i)=>{
                return <li className="p-2 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer" key={i} onClick={searchQuerryResult()}> <SearchSharpIcon sx={{color:"#0f0f0f"}} />{suggestion}</li>
              })
            }
            
          </ul>
        </div>
        :""
        }
      </div>
      <div>
        <img className="w-16" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Head;
