import React ,{useEffect,useState,useContext}from 'react';
import Header from "../NavbBar/NAVBAR"
import './view.css';
import { postContext } from '../../context/PropostContext.jsx';
import { fireContext } from '../../context/fireContex';
function View() {
    const [useDetail,setUserdetail] = useState()
    const {postDetails,setPost}=useContext(postContext)
    const {viewProduct}= useContext(fireContext)
    useEffect(()=>{
      console.log(postDetails);
        viewProduct(postDetails,setUserdetail)
        // console.log(setUserdetail);
    },[])
    let date = postDetails?.createdAt?.split(' ')?.splice(1,3)?.join('-')

    console.log(useDetail,'####')

  return (
    <>
    <Header/>
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.downloadURL}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name} </span>
          <p>{postDetails.category} </p>
          <span>{date}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{useDetail?.name}</p>
          <p>{useDetail?.phone}</p>
        </div>
      </div>
    </div>
  </>
  )
}
export default View;
