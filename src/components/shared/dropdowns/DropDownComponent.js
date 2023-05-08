import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/config/Colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import { getDataAxios } from '../../../fetchNodeServices';

const Dropdown = props => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectValue = item => {
    
    try {
      setSelectedValue(item.label);

      setShowDropdown(false);
      props.onSelect(item.value);
      props.setShowName(item.label);
      props.optionFunctionOnSelect(item.value);
      props.onPressfun(item.value);
      props.onPressfunforAgendaType(item.label);
    } catch (e) {
      console.log('In Catch in DropdownComponent Line 16', e);
    }
  };
 




  return (
    <View
      style={{
        ...styles.container,
        width: props.width,
        borderRadius: props.borderRadius,
        backgroundColor: props.backroundColor,
        zIndex: 99999,
        borderWidth: props.borderwidth,
        borderColor: props.borderColors,
        height: props.height,
      }}>
       <View style={{marginTop: 5, marginBottom: 5, marginLeft: props.labelLeft}}>
        <Text
          style={{
            color: '#aeaeae',
            fontFamily: FontFamily.Popinssemibold,
            fontSize: 15,
            left:props.left,
            right:props.right,
          }}>
          {props.label}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          borderRadius: props.borderRadius,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        onPress={() => setShowDropdown(!showDropdown)}>
        <Text
          style={{
            fontFamily: FontFamily.PopinsMedium,
            fontSize: 14,
            color: Colors.black,
          }}>
          { props.showName?   props.showName:'Select' }
        </Text>
        <Text
          style={{
            right: 0,
            fontFamily: FontFamily.PopinsMedium,
            fontSize: 12,
            color: Colors.MRTEXTGREY,
          }}>
          <FAIcon name={!showDropdown ? 'angle-down' : 'angle-up'} size={20} />
        </Text>
      </TouchableOpacity>
      {showDropdown && (
        <View
          style={{
            ...styles.dropdown,
            backgroundColor: props.backgroundColor,
            // backgroundColor:'red',
            borderRadius: props.borderRadius,
            // height:120,
          }}>
          {props.options.map(item => (
            <TouchableOpacity
              key={item.value}
              style={{...styles.option}}
              onPress={() => handleSelectValue(item)}>
              <Text
                style={{
                  fontFamily: FontFamily.PopinsMedium,
                  fontSize: 14,
                  color: Colors.black,
                  height: 20,
                }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    zIndex: 10,
    borderWidth: 1,
    borderColor: Colors.borderColor1,
  },
  button: {
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  option: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Dropdown;
Dropdown.defaultProps = {
  options: [
    // {label: 'value one', value: 1},
    // {label: 'value two', value: 2},
    // {label: 'value three', value: 3},
    // {label: 'value three', value: 4},
    // {label: 'value three', value: 5},
    // {label: 'value three', value: 6},
  ],
  onSelect: () => {},
  placeholder: 'select',
  backgroundColor: 'white',
  borderRadius: 6,
  optionFunctionOnSelect: () => {},
  onPressfun: () => {},
  onPressfunforAgendaType: () => {},
  height: 'auto',
  label:'label'
};