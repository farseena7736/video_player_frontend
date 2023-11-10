import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({UploadVideoStatus}) {
  const [allVideo , setAllVideo]= useState([])
  const [deleteVideoStatus , setDeleteVideoStatus] = useState(false)

  const getAllUploadVideos = async()=>{
  const response = await getAllVideos()
  /* console.log(response); */
  const {data} = response
/*   console.log(data); */
  setAllVideo(data)
  }
  console.log(allVideo);
  useEffect(()=>{
    getAllUploadVideos()
    setDeleteVideoStatus(false)
  },[UploadVideoStatus, deleteVideoStatus])
  return (
   <>
   <Row>
    { allVideo.length>0?

     allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
    </Col>)):
    <p>Nothing to display</p>
  }
   </Row>
   </>
  )
}

export default View