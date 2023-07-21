import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatContainerRef = useRef(); // Create a ref using useRef

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    // Use chatContainerRef.current.scrollToEnd() instead of chatContainer.scrollToEnd()
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <View style={styles.container}>
      {/* Attach the ref to the FlatList */}
      <View style={styles.chatContainer} ref={chatContainerRef}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{item}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type your message..."
          placeholderTextColor="#777"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// The styles object should be defined correctly (as provided in your previous code).

export default GroupChat;
