import { useState } from "react"
import { commentData } from "./data/Data"
import Comment from "./Components/Comment";
import useFunction from "./Components/useFunction";
import App2 from "./Components/App2";
export default function App() {

  const [data,setData] = useState(commentData);
  const {addComment , deleteComment} = useFunction();
  const commentAddHandle = (commentId , comment) =>{
      console.log(comment);
      const updatedTree = addComment(data,commentId,comment);
      setData(updatedTree);
  }

  const deleteHandle = (commentId) => {
    const updatedTree = deleteComment(data,commentId);
    setData(updatedTree);
  }
  return (
    <div className=" bg-blue-950 flex flex-col items-center min-h-[1000px] min-w-[100%]">
      <h1 className="text-3xl text-white font-semibold underline uppercase py-1 mt-2 mb-1">Comment Please !!!</h1>
      <div className="w-full flex justify-center"><App2/></div>
      <div className="w-full px-2">
        <Comment key={data.id} data={data} commentAddHandle={commentAddHandle} deleteHandle={deleteHandle}/>
      </div>
    </div>
  )
}