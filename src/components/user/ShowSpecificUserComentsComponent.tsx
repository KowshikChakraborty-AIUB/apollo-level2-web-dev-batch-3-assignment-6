"use client"

import { useGetCommentsByPostIdQuery } from "@/redux/api/commentsApi/commentsApi";
import Image from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */

const ShowSpecificUserComentsComponent = (props: any) => {
    const { postId } = props;
    const { data: commentsByPostId } = useGetCommentsByPostIdQuery(postId)
    console.log(commentsByPostId);

    return (
        <div>
            {
                commentsByPostId?.data?.map((comments: any) =>

                    <div key={comments._id}>
                        <div className="flex gap-2">
                            <Image width={32} height={32} src={comments?.userId?.profileImg ? comments?.userId?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt="user image" className="w-8 h-8 rounded-full"></Image>
                            <p className="font-bold">
                                {comments.userId.name}
                            </p>
                        </div>
                        <p className="text-lg ml-10">
                            {comments.commentText}
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default ShowSpecificUserComentsComponent;