import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, storeHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setDeleteVideoResponse}) => {
  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //save history in json server
    const {caption,link} = displayData
    //get date & time to watch video
    const sysTime = new Date()
    const timeStamp = sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails = {caption,link,timeStamp}
    await storeHistoryAPI(videoDetails)
    
  }


  const removeVideo = async (videoId)=>{
    const result = await removeVideoAPI(videoId)
// pass response to video component
setDeleteVideoResponse(result?.data)

  }

  return (
    <>
    <Card cl>
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Text ClassName='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='rounded' width="100%" height="475" src={`${displayData?.link}?autoplay=1`}title="Caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard