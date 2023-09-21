import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link, json } from 'react-router-dom';
const VedioContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }


  return (
    <div className='flex flex-wrap justify-center'>
      {
        videos.map(video => <Link to={`/watch?v=`+video.id} key={video.id}><VideoCard  info={video} /></Link>)
      }
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  )
}

export default VedioContainer