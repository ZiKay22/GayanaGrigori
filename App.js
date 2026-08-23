import React, { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    console.log("User input:", input);
    setVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Button title="Submit" onPress={() => setVisible(true)} />

      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.label}>LogIn: Mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#aaa"
              onChangeText={setInput}
              value={input}
            />
            <Button title="OK" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: 300,
    borderRadius: 10,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 5
  }
});
