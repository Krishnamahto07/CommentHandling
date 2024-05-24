const useFunction = () => {

    const addComment = (tree, commentId ,newComment) =>{
        if(tree.id === commentId){
            tree.replies.unshift(newComment);
            return tree;
        }
        const updatedReply = tree.replies.map((ele) => addComment(ele, commentId , newComment))

        return {...tree,replies:updatedReply};
    };

    const deleteComment = (tree, commentId) =>{
        if(tree.id === commentId){
            return tree.replies.filter((ele) => ele.id !== commentId);
        }

        const updatedReply = tree?.replies?.map((ele) => 
            deleteComment(ele,commentId));
        
        return {...tree,replies:updatedReply}
    }
  return {addComment , deleteComment};
}

export default useFunction
