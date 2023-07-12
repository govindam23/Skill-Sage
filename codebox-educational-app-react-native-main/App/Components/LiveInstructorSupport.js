import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';
import { GiftedChat } from 'react-native-gifted-chat';

const LiveInstructorSupport = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const initializeWebRTC = async () => {
      const stream = await mediaDevices.getUserMedia({ audio: true, video: true });
      setLocalStream(stream);

      
    };

    initializeWebRTC();
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Render the remote video stream */}
        {remoteStream && (
          <RTCView
            style={{ flex: 1 }}
            streamURL={remoteStream.toURL()}
            objectFit="cover"
          />
        )}
      </View>
      <View style={{ flex: 0.4 }}>
        {/* Render the local video stream */}
        {localStream && (
          <RTCView
            style={{ width: 100, height: 150, position: 'absolute', top: 10, right: 10 }}
            streamURL={localStream.toURL()}
            objectFit="cover"
          />
        )}
        {/* Render the chat component */}
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
          }}
        />
      </View>
    </View>
  );
};

export default LiveInstructorSupport;
