import React, {useState,useRef} from 'react';
import {View, Text, Button} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {RadioButton} from 'react-native-paper';
import MYRadioButton from '../buttons/RadioButton';

function RbeSheet(props) {
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [month, setMonth] = React.useState('January');
  //   const [month, setMonth] = React.useState('Male');
  
  const [checked, setChecked] = React.useState();
  const radioData = [
    {type: 'January', id: 1, color: false},
    {type: 'February', id: 2, color: false},
    {type: 'March', id: 3, color: false},
    {type: 'April', id: 4, color: false},
    {type: 'May', id: 5, color: false},
    {type: 'june', id: 6, color: false},
  ];

  const filterData = [
    {id: 1, name: 'Alphabetically A to Z'},
    {id: 2, name: 'Alphabetically a to z'},
    {id: 3, name: 'Newely Added'},
  ];
  //   alert(date)

  const handleChech = item => {
    setChecked(item.id);
    props.setName(item.name);
  };
  return (
    <View
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      {/* <Button title="Click" onPress={() => refRBSheet.current.open()} /> */}
      <RBSheet
       ref={props.refRBSheet}
       closeOnDragDown={true}
       closeOnPressMask={true}
        height={320}
        openDuration={200}
        customStyles={{
          container: {
            padding: 15,
            width: '100%',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            /* backgroundColor: 'red', */
          }}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
            Set Filters
          </Text>

          <Text style={{fontSize: 18, fontWeight: '600', left: 90}}>Done</Text>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            /* backgroundColor: '#51cbcc', */
            marginLeft: 14,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FontFamily.TTCommonsBold,
              marginLeft: 10,
              color: '#000',
            }}>
            Sort by
          </Text>
          <View>
            {filterData.map(item => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value={item.date}
                    color={'#00ACD3'}
                    status={checked == item.id ? 'checked' : 'unchecked'}
                    onPress={() => handleChech(item)}
                  />
                  <Text>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={{/* backgroundColor: 'red', */ width: '100%'}}>
          <MYRadioButton
            // labelLeft={10}
            label="Added Month"
            labelColor={'#000'}
            labelFontSize={18}
            marginVertical={5}
            data={radioData}
            setType={setMonth}
            getType={month}
          />
        </View>
      </RBSheet>
    </View>
  );
}
export default RbeSheet;
