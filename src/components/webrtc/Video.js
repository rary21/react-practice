import React from 'react';
import Button from '@material-ui/core/Button'
import store from '../../index'
import { storeVideo } from '../../redux/modules/webrtc';
import { useSelector } from 'react-redux'


function cb(stream) {
  store.dispatch(storeVideo(stream));
}

function getVideo()
{
  const promise =
      navigator.mediaDevices.getUserMedia({video: true, audio: false});
  promise.then(cb);
}

function setVideo(srcObject)
{
  console.log('setVideo');
  var video = document.querySelector('#video');
  if (video)
    video.srcObject = srcObject;
}

export default function Video() {
  const srcObject = useSelector(state => state.webrtc.srcObject)
  console.log('render video', srcObject);
  return (
    <div>
      <Button onClick={getVideo}> getUserMedia </Button>
      <Button variant='contained' color='primary' onClick={e => setVideo(srcObject)}> setUserMedia </Button>
      <video id='video' src={srcObject} autoPlay playsInline></video>
    </div>
  );
}
