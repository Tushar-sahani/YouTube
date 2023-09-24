import React, { useEffect, useState } from 'react'
import profile from "../assets/profile.jpg";
import { VIDEO_COMMENT } from '../utils/constant';
import { Link } from 'react-router-dom';

const commentsData = [
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: [
            {
                name: "tushar sahani",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                replies: []
            },
            {
                name: "tushar sahani",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                replies: []
            },
        ],
    },
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: []
    },
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: [
        {
            name: "tushar sahani",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            replies: []
        },
        {
            name: "tushar sahani",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            replies: [
                {
                    name: "tushar sahani",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                    replies: []
                },
                {
                    name: "tushar sahani",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                    replies: [
                        {
                            name: "tushar sahani",
                            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                            replies: []
                        },
                        {
                            name: "tushar sahani",
                            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                            replies: [
                                {
                                    name: "tushar sahani",
                                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                                    replies: []
                                },
                            ],
                        },
                        {
                            name: "tushar sahani",
                            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                            replies: []
                        },
                    ],
                },
            ],
        },
        {
            name: "tushar sahani",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            replies: []
        },
        ],
    },
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: []
    },
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: []
    },
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: []
    },
    {
        name: "tushar sahani",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        replies: []
    },
]
const Comment = ({ data }) => {
    // console.log(data);
    const { textOriginal,authorProfileImageUrl, authorDisplayName,authorChannelUrl,likeCount } = data;
    return (
        <div className="flex p-3 rounded-lg">
            <Link to={authorChannelUrl}><img className='w-10 h-10 mix-blend-multiply rounded-full' src={authorProfileImageUrl} alt="user" /></Link>
            <div className="px-4">
            <Link to={authorChannelUrl}><p className='font-semibold'>{authorDisplayName}</p></Link>
                <p>{textOriginal}</p>
                <div className="flex pt-3">
                <button >👍🏻 <span className='text-sm'>{likeCount==0?"":likeCount}</span></button>
                <button className='px-3'>👎🏻</button>
                <button className='px-4 font-semibold text-sm'>Reply</button>
            </div>
            </div>
            
        </div>
    )
}
const CommentsList = ({ comments }) => {
    return comments && comments.map((comment, index) =>
        <div key={index} className='pt-4'>
            <Comment  data={comment?.snippet?.topLevelComment?.snippet} />
            <div className="pl-5 ml-5">
                <CommentsList comments={comment?.replies?.comments?.snippet} />
            </div>
        </div>
    )
}
const CommentContainer = ({video_id}) => {
    const [commentData,setCommentData] = useState([]);
    const getVideoComment = async ()=>{
        const data = await fetch(VIDEO_COMMENT+video_id);
        const json = await data.json();
        setCommentData(json?.items);
        console.log(json?.items);
    }
    useEffect(()=>{
        getVideoComment();
    },[]);
    return (
        <div className="m-5 p-2 ">
            <h1 className='text-lg '> {commentData.length} Comments </h1>
            <CommentsList comments={commentData} />
        </div>
    )
}

export default CommentContainer;