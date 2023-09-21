import React, { useState } from 'react'
import shorts from '../assets/shorts.png'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLaterOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMallOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieIcon from '@mui/icons-material/MovieOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SurroundSoundIcon from '@mui/icons-material/SurroundSoundOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { useSelector } from 'react-redux';
import store from '../utils/store';
const Sidebar = () => {
  // const [scrollEnable, setScrollEnable] = useState(false);
  // const enableScroll = ()=>{
  //   setScrollEnable(true);
  //   console.log(scrollEnable);
  // }
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='shadow-lg z-10' >
      <div className="fixed left-0 bg-white " >
        <ul className='p-3 '>
          <li className=' p-2'>
            <div className="flex" >
              <HomeIcon />
              <p className="pl-6">Home</p>
            </div>
          </li>
          <li className=' p-2'>
            <div className="flex">
              <img className='w-4' src={shorts} alt="shorts" />
              <p className="pl-6">Shorts</p>
            </div>
          </li>
          <li className=' p-2'>
            <div className="flex">
              <SubscriptionsIcon/>
              <p className="pl-6">Subscription</p>
            </div>
          </li>
          <hr />
          <li className='p-2'>
            <div className="flex">
              <VideoLibraryIcon/>
              <p className="pl-6">Library</p>
            </div>
          </li>
          <li className='p-2'>
            <div className="flex">
              <HistoryIcon/>
              <p className="pl-6">History</p>
            </div>
          </li>
          {/* <li className='p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle':''}`}>
              <WatchLaterIcon />
              <p className={`${!isMenuOpen? '':'pl-6'}`}>Watch later</p>
            </div>
          </li>
          <li className='p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle':''}`}>
              <ThumbUpIcon />
              <p className={`${!isMenuOpen? '':'pl-6'}`}>Liked video</p>
            </div>
          </li> */}
        </ul>
        <hr />
        <div>
          <h2 className='ml-4 mt-4 font-semibold'>Subscription</h2>
          <ul className='p-3'>
            <li className='text-center p-2'>
              <div className='flex '>
                <PlayCircleOutlineOutlinedIcon className='bg-sky-400 rounded-full' />
                <p className='pl-6'>Music</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <EmojiEventsOutlinedIcon sx={{ color: "#FFFF33" }} className='bg-blue-500 rounded-full' />
                <p className='pl-6'>Sports</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <VideogameAssetOutlinedIcon className='bg-sky-400 rounded-full' />
                <p className='pl-6'>Gaming</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <MovieCreationOutlinedIcon className='bg-[#007FFF] rounded-full' />
                <p className='pl-6'>Movies</p>
              </div>
            </li>
          </ul>
        </div>
        <div className=''>
          <h1 className='ml-4 font-semibold'>Explore</h1>
          <ul className='p-3'>
            <li className='text-center p-2'>
              <div className='flex '>
                <WhatshotIcon />
                <p className='pl-6'>Trending</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <LocalMallIcon />
                <p className='pl-6'>Shopping</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <MusicNoteIcon />
                <p className='pl-6'>Music</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <MovieIcon />
                <p className='pl-6'>Movies</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <SurroundSoundIcon />
                <p className='pl-6'>Live</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <SportsEsportsOutlinedIcon />
                <p className='pl-6'>Gaming</p>
              </div>
            </li>
            <li className='text-center p-2'>
              <div className='flex '>
                <NewspaperOutlinedIcon />
                <p className='pl-6'>News</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;

{/* <div className={` w-full ${!isMenuOpen? 'w-4/5 text-center':''}`} >
      <div className="fixed left-0 bg-white" >
        <ul className='p-3'>
          <li className=' p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle':''}`} >
              <HomeIcon sx={{fontSize:`${!isMenuOpen? '35px':'24px'}`,width:`${!isMenuOpen? '100%':'18%'}`}}/>
              <p className={`${!isMenuOpen? 'text-xs':'pl-6'}`}>Home</p>
            </div>
          </li>
          <li className=' p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle':''}`}>
              <img className={`w-4 ${!isMenuOpen? 'w-7 mx-4':'mx-1'}`} src={shorts} alt="shorts" />
              <p className={`${!isMenuOpen? 'text-xs':'pl-6'}`}>Shorts</p>
            </div>
          </li>
          <li className=' p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle':''}`}>
              <SubscriptionsIcon sx={{fontSize:`${!isMenuOpen? '35px':'24px'}`,width:`${!isMenuOpen? '100%':'18%'}`}}/>
              <p className={`${!isMenuOpen? 'text-xs -px-2':'pl-6'}`}>Subscription</p>
            </div>
          </li>
          <hr />
          <li className='p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle':''}`}>
              <VideoLibraryIcon sx={{fontSize:`${!isMenuOpen? '35px':'24px'}`,width:`${!isMenuOpen? '100%':'18%'}`}}/>
              <p className={`${!isMenuOpen? 'text-xs':'pl-6'}`}>Library</p>
            </div>
          </li>
          <li className='p-2'>
            <div className={`flex ${!isMenuOpen? 'flex-col justify-center align-middle ':''}`}>
              <HistoryIcon sx={{fontSize:`${!isMenuOpen? '35px':'24px'}`,width:`${!isMenuOpen? '100%':'18%'}`}}/>
              <p className={`${!isMenuOpen? 'text-xs':'pl-6'}`}>History</p>
            </div>
          </li> */}