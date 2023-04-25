import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { FontFamily } from '../../../assets/fonts/FontFamily';

const Input = props => {
  return (
    <View>
      {props.textLabel && (
        <View style={{left: 8}}>
          <Text style={{color: '#c0c0c0'}}>{props.label}</Text>
        </View>
      )}
      <View
        style={[
          style.inputContainer,
          {
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            borderColor: props.borderColor,
          },
        ]}>
        {props.icon ? (
          <View style={{width: '12%', alignSelf: 'center'}}>
            <Icon
              name={props.iconName}
              style={{color: '#000', fontSize: 22, marginRight: 10}}
            />
          </View>
        ) : (
          <></>
        )}
        <View style={{width: '100%', flexWrap: 'wrap'}}>
          <TextInput
            style={{
              color: '#000',
              width: '100%',
              // fontFamily:FontFamily.PopinsMedium,
              fontSize: 12,
              top: 2,
            }}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderColor}
            onChangeText={props.onChangeText}
            numberOfLines={5}
            label={'Full Name'}
            textAlignVertical={'top'}
            multiline={true}
          />
        </View>
      </View>
    </View>
  );
};

Input.defaultProps = {
  placeholder: 'Placeholder',
  width: '80%',
  height: 40,
  icon: false,
  iconColor: 'white',
  borderRadius: 15,
  textColor: 'white',
  backgroundColor: '#fff',
  iconName: 'account-arrow-right-outline',
  borderColor: '#ddd',
  onChangeText: () => {},
  placeholderColor: '#000',
  label: 'label',
};

export default Input;

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
