import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const RadioButton = (props) => {
    const [background, setBackGround] = useState(1);
    // const radioData = [
    //     { type: 'Pharmacy', id: 1, color: false },
    //     { type: 'Doctor', id: 2, color: false },
    //     { type: 'Stockiest', id: 3, color: false },
    //   ];


      const handleRadio = (item, index) => {
        props.setId(item.id)
        // alert(item.id)
      }

  return (
    <View style={{ flexDirection: 'row', }}>
    {props?.data?.map((item, index) => {
      const myTouch = props.getId === item.id;
      return (
        <TouchableOpacity
        key={item.id}
          onPress={() => {
            handleRadio(item, index);
          }}>
          <View 
            style={{
              backgroundColor: myTouch ? '#f47216' : '#ececec',
            //   borderColor: myTouch ? '#34acd3' : '#000',
              padding: 8,
            //   borderWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 15,
              marginLeft: 15,
            }}>
            <Text style={{ color: myTouch ? '#fff' : '#c9c9c9' }}>
              {item.type}
            </Text>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({})
RadioButton.defaultProps = {
    data: [
        { type: 'Male', id: 1, color: false },
        { type: 'Female', id: 2, color: false },
        { type: 'Others', id: 3, color: false },
      ],
    // isDoctor: true,
  };




