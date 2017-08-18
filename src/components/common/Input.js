import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    // whenever we have siblings (this and labelStyle)
    // we add (2 + 1) / 3 => 2/3 will be allocated to inputStyle and 1/3 to labelStyle
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    // flex: 1 - fill up all available space
    flex: 1,
    // we want to make the child items line up in row direction
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
