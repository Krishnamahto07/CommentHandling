import React, { useState } from 'react'

const Comment = ({data , commentAddHandle ,deleteHandle}) => {
  const [edit , SetEdit] = useState(false)
  const [commentbody , setCommentBody] = useState("")

  const commentAdd = () =>{
    let newcomment = {
      id : Date.now(),
      text : commentbody,
      replies:[],
    }
    commentAddHandle(data.id , newcomment)
    SetEdit(false);
  }
  
  return (
    <div className={`${data.text ? ( 'md:w-[400px] w-[300px] mx-auto ') : (' hidden')}`}>
      <div className={` bg-[#818FB4]` +' flex flex-col gap-3  justify-center items-center border  rounded-md'}>
        <details>
          <summary className='text-gray-50 text-xl px-2 py-3'>{data.text}</summary>
              {
                edit && <input 
                onChange={(e)=> setCommentBody(e.target.value)}
                value={commentbody}
                placeholder='Add Comment ..' autoFocus className='px-3 py-1 font-semibold' />
              }
              
              <div className='flex justify-between items-center gap-5 p-2'>
                {
                  edit ? (
                    <>
                    <button 
                    onClick={() => commentAdd()}
                    className='border bg-slate-400 hover:bg-slate-500 text-white px-3 py-1'
                >
                  Save</button>
                <button className='border bg-slate-400 hover:bg-slate-500 text-white px-3 py-1'
                onClick={()=> SetEdit(false)}>
                  Cancle</button></>
                  ) : ( data.text &&
                    <>
                          <button className='border bg-slate-400 hover:bg-slate-500 text-white px-3 py-1'
                      onClick={() => SetEdit(true)}
                      >
                        Reply</button>
                      <button className='border bg-slate-400 hover:bg-slate-500 text-white px-3 py-1'
                      onClick={()=>deleteHandle(data.id)}
                      >
                        Delete</button></>
                  )
                }
              </div> 
          
        </details>
      </div>
        <div className='ml-5 mt-2'>
          {
            data?.replies?.map((subcomment,index) => 
            <Comment key={subcomment.id+index} data={subcomment} commentAddHandle={commentAddHandle} deleteHandle={deleteHandle} />)
          }
        </div>
    </div>
  )
}

export default Comment
