"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactQuill, { Quill } from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { Button } from "../ui/button"
import { useCreatePostsMutation } from '@/redux/api/postApi/postApi';
import { toast } from 'react-toastify';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const CreatePostsComponent = () => {

    const [value, setValue] = React.useState("")

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    const modules = {
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        },
        toolbar: toolbarOptions,
    };

    const onChange = (content: any, delta: any, source: any, editor: any) => {
        setValue(editor.getHTML());
    };

    const [createPosts, { isLoading }] = useCreatePostsMutation();


    const onClick = async (value: string) => {
        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }

        try {
            const postData = { postContent: value };

            const res: any = await createPosts(postData);

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }

        //console.log(value);

    }

    //const { data: postsData } = useGetAllPostsQuery({});


    return (
        <div>
            <div className="min-h-screen my-10 w-1/2 mx-auto">
                <ReactQuill modules={modules} theme="snow" value={value} onChange={onChange} />
                <div className='flex justify-center'>
                    <Button onClick={() => onClick(value)} className="my-6 text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Submit</Button>
                </div>
                {/* {
                    postsData?.data?.map((post: any) =>

                    (<div key={post._id} className="ql-snow">
                        <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{ __html: post.postContent }}
                        />
                    </div>)
                    )
                } */}
            </div>
        </div>
    );
};

export default CreatePostsComponent;