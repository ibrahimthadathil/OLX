import React from 'react'
import NAVBAR from '../Components/NavbBar/NAVBAR'
import Banner from '../Components/Banner/banner.jsx'
import Posts from '../Components/Post/post.jsx'
import Banner2 from '../Components/Banner2/banner2.jsx'
import Footer from '../Components/Footer/footer.jsx'
function Home() {
  return (
    <>
    <NAVBAR/>
    <Banner/>
    <Posts/>
    <Banner2/>
    <Footer/>
    </>
  )
}
export default Home