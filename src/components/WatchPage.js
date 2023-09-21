import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Video_INFO, CHANNEL_INFO,RELATED_VIDEO } from '../utils/constant';

const comments = [
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
    reply: [
      {
        img: <img src="" alt="" srcset="" />,
        name: 'Tushar Sahani',
        comment: "this is good video",
      },
      {
        img: <img src="" alt="" srcset="" />,
        name: 'Tushar Sahani',
        comment: "this is good video",
      },
    ]
  },
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
  },
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
    reply: [
      {
        img: <img src="" alt="" srcset="" />,
        name: 'Tushar Sahani',
        comment: "this is good video",
        reply: [
          {
            img: <img src="" alt="" srcset="" />,
            name: 'Tushar Sahani',
            comment: "this is good video",
          },
          {
            img: <img src="" alt="" srcset="" />,
            name: 'Tushar Sahani',
            comment: "this is good video",
          },
        ]
      },
      {
        img: <img src="" alt="" srcset="" />,
        name: 'Tushar Sahani',
        comment: "this is good video",
      },
    ]
  },
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
  },
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
  },
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
  },
  {
    img: <img src="" alt="" srcset="" />,
    name: 'Tushar Sahani',
    comment: "this is good video",
  },
] 

const CommentPage = ({text})=>{
  return(
    <div className="c">
      {
        text.img
      }
      <div>
        <h1>{text.name}</h1>
        <p>{text.comment}</p>
      </div>

    </div>
  )
}
const WatchPage = () => {
  
  const dispatch = useDispatch();
  const [vedioInfo, setVideoInfo] = useState([]);
  const [channelInfo, setchannelInfo] = useState([]);
  const [relatedVideo,setRelatedVideo] = useState([]);
  const [searchParams] = useSearchParams();

  const getVideoDetail = async () => {
    const data = await fetch(Video_INFO + searchParams.get('v'));
    const json = await data.json();
    setVideoInfo(json?.items[0])
    console.log(json?.items[0]);
  }

  const getChennelDetail = async ()=>{
      const data = await fetch(CHANNEL_INFO+vedioInfo?.snippet?.channelId);
      const json = await data.json();
      setchannelInfo(json?.items[0]);
      // console.log(json?.items[0]);

  }
  const getRelatedVideo = async ()=>{
      const data = await fetch(RELATED_VIDEO + vedioInfo?.id);
      const json = await data.json();
      // setRelatedVideo(json?.items[0]);
      console.log(json);

  }

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetail();
    getRelatedVideo();

  }, []);

  useEffect(()=>{
    getChennelDetail();
  },[vedioInfo]);
  return (
    <div className="ml-16 mt-4 -z-0">
      <iframe className="rounded-2xl"
        width="900"
        height="509"
        src={`https://www.youtube.com/embed/` + searchParams.get('v') + '?autoplay=1'}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className=" pt-3">
        <h1 className="font-semibold text-xl" >{vedioInfo?.snippet?.title}</h1>
        <div className="flex justify-between mt-2">
          <div className="flex">
            <img width="46" className="rounded-full" src={channelInfo?.snippet?.thumbnails?.high?.url} alt="channelimg" />
            <div className="pl-2">
              <h1 className="font-semibold ">{channelInfo?.snippet?.title}</h1>
              <p className="text-sm text-gray-900">{channelInfo?.statistics?.subscriberCount} subscribers</p>
            </div>
            <button className="bg-black text-white font-semibold rounded-full w-24 h-9 ml-4 mt-1">Subscribe</button>
          </div>
          <div className="flex">
            <div className="bg-gray-100 rounded-full flex justify-center w-28 h-9 mt-1 mr-2">
              <button className="pr-2 font-semibold">👍🏻 46K </button>
              <button className=" border-gray-100 border-l-2">👎🏻</button>
            </div>
            <button className="bg-gray-100 font-semibold rounded-full w-24 h-9 mt-1 mr-2">Share</button>
            <button className="bg-gray-100 font-semibold rounded-full w-24 h-9 mt-1 mr-2">Download</button>
            <button className="rounded-full bg-gray-100 w-10 h-10 font-bold mr-2">---</button>
          </div>
        </div>
      </div>
      <div>
        {
          comments.map((comment)=>{
            <CommentPage text={comment}/>
          })
        }
      </div>
    </div>
  );
};

export default WatchPage;
