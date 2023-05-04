import React, {useState} from 'react';
import {TouchableOpacity, View, TextInput, Dimensions} from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from '@react-native-community/datetimepicker';
import { Colors } from '../../../assets/config/Colors';

import {FontFamily} from '../../../assets/fonts/FontFamily';
const {width} = Dimensions.get('window');

// import moment from 'moment';

function DateTimePicker(props) {
  //   const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow(Platform.OS === 'ios');
    // setDate(currentDate);
    console.log(`selectdDate===>${selectedDate}`);
    setDate1(currentDate);
    props.setDate(
      moment(currentDate).format(
        props.mode == 'time' ? 'hh:mm A' : 'YYYY-MM-DD',
      ),
    );
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <TouchableOpacity onPress={showDatepicker} style={{width: '100%'}}>
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
            value={
              props.mode == 'time'
                ? moment(date1).format('hh:mm A')
                : date1?.toUTCString().substring(0, 16)
            }
             label="* Enter Date"
            style={{
              color: Colors.MRTEXTGREY,
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
          testID="dateTimePicker"
          value={date1}
          mode={props.mode}
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

};

export default DateTimePicker;
