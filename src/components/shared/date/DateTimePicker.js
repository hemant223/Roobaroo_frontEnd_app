import React, {useState,} from 'react';
import {TouchableOpacity, View, TextInput, Dimensions,Text} from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from '@react-native-community/datetimepicker';
import { Colors } from '../../../assets/config/Colors';

import {FontFamily} from '../../../assets/fonts/FontFamily';

const {width} = Dimensions.get('window');

// import moment from 'moment';

function DateTimePicker(props) {
  // console.log('mode',props.mode);
  //   const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState("");

  const onChange = (event, selectedDate) => {
    console.log('SELECTEDATE============>',selectedDate)
    console.log('============>event',event.type)
    props.onPress(event,selectedDate)
    if(event.type=='dismissed'){
      setShow(false)
    }else{
      setDate1(moment(selectedDate).format('DD-MM-YYYY'))
      setShow(false)
    }
    // const currentDate = selectedDate || date1;
    // setShow(Platform.OS === 'ios');
    // // setDate(currentDate);
    // console.log(`selectdDate===>${selectedDate}`);
    // setDate1(currentDate);
    // props.setDate(
    //   moment(currentDate).format(
    //     props.mode == 'time' ? 'hh:mm A' : 'YYYY-MM-DD',
    //   ),
    // );
  };

  const showDatepicker = () => {
    setShow(!show);
  };

  return (
    <>
    
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
      
      <TouchableOpacity onPress={()=>setShow(!show)} style={{width: '100%'}}>
      
        <View
          style={{
            height: props.height,
            borderRadius: props.borderRadius,
            borderWidth: 1,
            borderColor: props.borderColor,
            width: props.width,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor:'#fff',
            height: props.height,
          }}>
            
          <TextInput
            editable={false}
            value={date1}
            placeholder=' Select Date of Birth'
            placeholderTextColor={'#000'}
            aria-label="input"
            textLabel
            style={{
              color: Colors.black,
              marginLeft: 15,
              fontFamily: FontFamily.PopinsMedium,
            //   fontSize: FontSize.labelText,
              top: 2,
              width: '100%',
            overflow:'hidden'

            }}
            underlineColor={'transparent'}
            labelStyle={{fontSize: 11, color: Colors.MRTEXTGREY}}
          />



          <View style={{position: 'absolute', right: 15}}>
            <Ionicons
              name="calendar-sharp"
              size={17}
              // color={themecolor.TXTWHITE}
            />
          </View>
        </View>
      </TouchableOpacity>
      {show && (
        <DatePicker
          {...props}
          // testID="dateTimePicker"
          value={new Date()}
          mode={'date'}
          is24Hour={false}
          display="default"
          onChange={onChange}
         
        />
      )}
    </>
  );
}

DateTimePicker.defaultProps = {
  width: '100%',
  format: 'DD-MM-YYYY',
  borderColor: Colors.borderColor1,
  mode: 'date',
  borderRadius: 8,
  backgroundColor: '#fff',
  height: 40,
  label: 'label',

};

export default DateTimePicker;
