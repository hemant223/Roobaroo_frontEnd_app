import React, {useState, useRef} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {RadioButton} from 'react-native-paper';
import MYRadioButton from '../buttons/RadioButton';
import moment from 'moment';
import DateTimePicker from '../../shared/date/DateTimePicker';
import {Colors} from '../../../assets/config/Colors';
import En from 'react-native-vector-icons/Entypo';

function RbeSheet(props) {
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [month, setMonth] = React.useState('');
  const [from, setFrom] = useState(moment().format('YYYY-MM-DD'));
  const [to, setTo] = useState(moment().format('YYYY-MM-DD'));
  const refRBSheet = useRef();
  //   const [month, setMonth] = React.useState('Male');
  const currentDate = moment().format('MMMM D, YYYY');
  const threeMonthsAgo = moment().subtract(3, 'months').format('MMMM');
  const threeMonthAgoLastDate=moment().subtract(3, 'months').endOf('month').format('YYYY-MM-DD')
  const threeMonthAgoFirstDate=moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DD')
  const twoMonthsAgo = moment().subtract(2, 'months').format('MMMM');
  const twoMonthAgoLastDate=moment().subtract(2, 'months').endOf('month').format('YYYY-MM-DD')
  const twoMonthAgoFirstDate=moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')
  const oneMonthAgo = moment().subtract(1, 'months').format('MMMM');
  const oneMonthAgoLastDate=moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')
  const oneMonthAgoFirstDate=moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')
  const [checked, setChecked] = React.useState();
  
  const radioData = [
    {type: `${threeMonthsAgo}`, id: 1, color: false,startDate:`${threeMonthAgoFirstDate}`,endDate:`${threeMonthAgoLastDate}`},
    {type: `${twoMonthsAgo}`, id: 2, color: false,startDate:`${twoMonthAgoFirstDate}`,endDate:`${twoMonthAgoLastDate}`},
    {type: `${oneMonthAgo}`, id: 3, color: false,startDate:`${oneMonthAgoFirstDate}`,endDate:`${oneMonthAgoLastDate}`},
  ];

  const filterData = [
    {id: 1, name: 'Alphabetically A to Z'},
    {id: 2, name: 'Alphabetically Z to A'},
    {id: 3, name: 'Newly Added'},
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
        height={370}
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
            justifyContent: 'space-around',
            alignItems: 'center',
            /* backgroundColor: 'red', */
          }}>
          <View style={{marginLeft:40}}>
          {props.cross && <En
              name={'cross'}
              style={{color: '#000', fontSize: 22, }}
            />}
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
              Set Filters
            </Text>
          </View>
          <TouchableOpacity onPress={props.doneonPress}>
            <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 10,color:'#444b5d'}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: 15,
            alignSelf: 'center',
          }}>
          <View style={{width: '100%', marginLeft: 8, marginBottom: 5}}>
            <Text
              style={{
                color: '#000',
                fontFamily: FontFamily.Popinssemibold,
                fontSize: 17,
              }}>
              Sort By Date range
            </Text>
          </View>
          <View style={{width: '45%'}}>
            <DateTimePicker
              borderRadius={30}
              backgroundColor={Colors.Textinputbg}
              // height={37}
              // setDate={setDob}
              placeholder="From Date"
              // label={'Hemu'}
              setDate={props.setFrom}
            />
          </View>
          <View style={{width: '45%'}}>
            <DateTimePicker
              borderRadius={30}
              backgroundColor={Colors.Textinputbg}
              // height={40}
              // setDate={setDob}
              placeholder="End Date"
              setDate={props.setTo}
              // format={'YYYY'}
              // setDateFormate={setTo}
            />
          </View>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            /* backgroundColor: '#51cbcc', */
            marginLeft: 14,
            marginTop: 5,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: FontFamily.Popinssemibold,
              fontSize: 17,
              marginLeft: 10,
            }}>
            Sort by
          </Text>
          <View>
            {filterData.map(item => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value={item.date}
                    color={'#f47216'}
                    status={checked == item.id ? 'checked' : 'unchecked'}
                    onPress={() => handleChech(item)}
                  />
                  <Text style={{color:'#828793',FontFamily:FontFamily.PopinsRegular}}>{item.name}</Text>
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
            labelFontSize={17}
            marginVertical={5}
            data={radioData}
            setType={props.setMonth}
            getType={props.month}
            startDate={props.setStartDate}
            endDate={props.setEndDate}
          />
        </View>
      </RBSheet>
    </View>
  );
}
export default RbeSheet;
