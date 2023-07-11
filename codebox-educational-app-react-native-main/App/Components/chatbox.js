import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => setInputText(text)}
          value={inputText}
        />
        <Button title="Send Message" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default ChatBox;

