import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {Colors} from '../../../assets/config/Colors';

const Input = props => {
  const style = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: 15,
      // borderWidth: 0.5,
      borderWidth: props.borderWidth,
    },
  });
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View>
      {props.textLabel && (
        <View style={{left: 8}}>
          <Text
            style={{
              color: '#aeaeae',
              fontSize: 15,
              fontFamily: FontFamily.Popinssemibold,
            }}>
            {props.label}
          </Text>
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
            // borderColor: props.borderColor,
            borderColor: props?.error
              ? Colors.red
              : isFocused
              ? '#ddd'
              : '#ddd',

            borderBottomWidth: props.borderBottomWidth,
            borderBottomColor: props?.error
            ? Colors.red
            : isFocused
            ? '#ddd'
            : '#ddd',
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
              fontSize: props.textfontSize,
              top: 2,
            }}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderColor}
            onChangeText={props.onChangeText}
            
            numberOfLines={5}
            label={'Full Name'}
            textAlignVertical={'top'}
            multiline={true}
            keyboardType={props.keyboardType}
            onFocus={() => {
              props.onFocus();
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            value={props.value}
          />
        </View>
      </View>
      {props.error && (
        <Text style={{marginTop: 7, color: 'red', fontSize: 12}}>
          {props.error}
        </Text>
      )}
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
  borderWidth: 0.5,
  borderBottomWidth: 0.5,
  borderBottomColor: '#ddd',
  textfontSize: 11,
  error: '',
  onFocus : () => {},
};

export default Input;
