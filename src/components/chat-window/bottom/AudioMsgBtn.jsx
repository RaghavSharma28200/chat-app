import React, { useCallback, useState } from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { Alert, Icon, InputGroup } from 'rsuite';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({ afterUpload }) => {
const {chatId}  = useParams();
  const [isRecord, setIsRecord] = useState(false);
  const [loading,setLoading] = useState(false);

  const onClick = useCallback(() => {
    setIsRecord(p => !p);
  }, []);

  const onUpload = useCallback(async (data) => {
      setLoading(true)
    try {
     const snap = await storage
        .ref(`/chat/${chatId}`)
        .child(`audio_${Date.now()}.mp3`)
        .put(data.blob, { cacheControl: `public,max-age=${3600 * 24 * 3}` });
 const file =  {
    contentType: snap.metadata.contentType,
    name:snap.metadata.name,
    url: await snap.ref.getDownloadURL()
}
  setLoading(false)
  afterUpload([file])

    } catch (err) {
        setLoading(false)
        Alert.error(err.message,2000)
    }
  }, [afterUpload,chatId]);
  return (
    <InputGroup.Button onClick={onClick} disabled = {loading} className = {isRecord ? 'animate-blink' :'' }>
      <Icon icon="microphone" />
      <ReactMic
        record={isRecord}
        className="d-none"
        onStop={onUpload}
        mimeType="audio/mp3"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
