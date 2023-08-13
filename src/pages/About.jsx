import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ImgContainer from '../component/ImgContainer'
import PageContent from '../component/PageContent'
import MissionContent from '../component/MissionContent'

export default function About() {
  return (
    <>
     <Navbar />

{/* this container contain text for the pic and the text inside the fornt page or the first part of the website  */}
<ImgContainer></ImgContainer>

{/* the page is the next part of the website that contain no image and information of tha trainer rajesh  */}
<PageContent></PageContent>

 {/* this section is for the our mission part of the website and it also constain a background image  */}
<MissionContent></MissionContent>

{/* the footer part of the main page  */}

<Footer></Footer>
    </>
  )
}
