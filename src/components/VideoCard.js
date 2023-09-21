import React from 'react'

const VideoCard = ({info}) => {

    const {snippet,statistics,contentDetails} = info;
    const {channelTitle, title , thumbnails} = snippet;
    // console.log(info);
  return (
    <div className='p-2 m-2 w-72 break-words'>
      <div className='box-border relative'>
        <span className='bg-black bg-opacity-60 text-white text-center absolute rounded-md w-9 right-1 bottom-1 text-[12px]'>{contentDetails.duration.replace("PT","").replace("M",":").replace("S","")}</span>
        <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg hover:rounded-none" />
      </div>
      <div className='flex'>
        <span className='m-2'>
          <div className='bg-gray-700 rounded-full'>coa</div>
        </span>
        <ul>
            <li className='font-semibold py-2'>{title.slice(0,65)} {65<title.length?"...":""}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>

      </div>
    </div>
  )
}

export default VideoCard