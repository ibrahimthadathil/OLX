import React, { Fragment, useContext, useState } from 'react';
import './create.css';
import Header from '../NavbBar/NAVBAR';
import { fireContext,Authcontext } from '../../context/fireContex';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Create = () => {
    const {uploadimg}=useContext(fireContext)
    const {user}=useContext(Authcontext)
const [name,setName] = useState('')
const [category,setCate] =useState('')
const [price,setPrice] = useState('')
const [image,setImg] =useState('')
const navigate =useNavigate()

const  HandleSubmit=()=>{
  if(validate()){
    
    uploadimg(image,name,category,price,user.uid)
    navigate('/')
    toast.success('Post Added Succesfully')
  }else{
    toast.error('please fill the field')
  }

  function validate(){
    if(!image||!name.trim()||!category.trim()||!price.trim()||!user.uid.trim()){
      
      return false
    }
    return true
  }
        
}


  return (
    <>
    <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCate(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <br />
          </form>
          <br />
          {image ? <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img> : ''}
        
            <br />
            <input type="file" onChange={(e)=>setImg(e.target.files[0])} />
            <br />
            <button onClick={HandleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card></>
  );
};

export default Create;
