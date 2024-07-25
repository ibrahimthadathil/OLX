import React,{useContext,useEffect,useState} from 'react';

import Heart from '../../assets/Heart';
import './post.css';
import { fireContext } from '../../context/fireContex';
import { postContext } from '../../context/PropostContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [products,setProducts] = useState([])
  const {getProducts} = useContext(fireContext)
  const {setPost} = useContext(postContext)
  const navigate = useNavigate()
  const produtc=async ()=>{
    const pos=await getProducts();

    setProducts(pos)
   }
   useEffect(()=>{
    produtc()
   })


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick View</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products?.map((product,i)=>{ 
            let date = product.createdAt.split(' ').splice(1,3).join('-')
            
           return  <div key={i}
            className="card"
            onClick={()=>{
              
              setPost(()=>{
                localStorage.setItem('post',JSON.stringify(product))
                return product
              })
              
              navigate('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img style={{width:'180px'}} src={product.downloadURL} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <p className="name"> {product.name}</p>
              <span className="kilometer">{product.category}</span>
            </div>
            <div className="date">
              <span>{date}</span>
            </div>
          </div>
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span >10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
