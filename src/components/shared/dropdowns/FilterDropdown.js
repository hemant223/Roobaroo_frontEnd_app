import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { FontFamily } from '../../../assets/fonts/FontFamily';
import { Colors } from '../../../assets/config/Colors';
import { useSelector } from 'react-redux';

const FilterDropdown = props => {
  var language = useSelector(state => state.languageNameReducer.language_name);
  const [selectedValue, setSelectedValue] = useState(props.defaultSelected);
  const [dropdownHeight, setDropdownHeight] = useState(new Animated.Value(0));
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState('angle-down');
  const toggleDropdown = () => {
    if (dropdownHeight._value === 0) {
      Animated.timing(dropdownHeight, {
        toValue: props.options.length * props.itemHeight - (props.itemHeight+5), //height of child elements
        duration: 300,
        useNativeDriver: false,
      }).start();
      setIcon('angle-up');
    } else {
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setIcon('angle-down');
    }
  };
  

  useEffect(() => {
    // setSelectedValue(items[0].label);
    let data = props.options.filter(itm => {
      return itm.label != selectedValue;
    });
    setData(data);
  }, [selectedValue]);

  const onItemPress = item => {
    setSelectedValue(item.label);
    props.onValueChange(item);
    toggleDropdown();
  };

  return (
    <View
      style={{
        borderRadius: props.radius,
        overflow: 'hidden',
        // position: 'absolute',
        left: props.left,
        right: props.right,
        zIndex:9999,
        top:-2
      }}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={{
          backgroundColor: props.backgroundColor,
          // width: 'auto',
          borderTopRightRadius: props.radius,
          borderTopLeftRadius: props.radius,
          alignItems: 'center',
          zIndex: 99,
          paddingHorizontal: 9,
          paddingVertical:props.paddingVertical,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 11,
            fontFamily: FontFamily.TTCommonsMedium,
          }}>
          {selectedValue}
        </Text>
        <Text style={{color: 'white', marginLeft: 5}}>
          <FAIcon name={icon} size={18} />
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          height: dropdownHeight,
          backgroundColor: props.backgroundColor,
          borderBottomRightRadius: props.radius,
          borderBottomLeftRadius: props.radius,
          paddingHorizontal: 7,
          width: 'auto',
          //   alignItems: 'center',
          // width: 150,
        }}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onItemPress(item)}
            style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontFamily: FontFamily.PopinsRegular,
                fontSize:11,
              }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

export default FilterDropdown;

FilterDropdown.defaultProps = {
  onValueChange: () => {},
  // options: [
  //   {label: 'Last Week', id: 1},
  //   {label: 'Current Week', id: 2},
   
  // ],
  paddingVertical:0,
  itemHeight:25,
  radius:10,
  // onValueChange: () => {},
  // defaultSelected: 'Last Week',
  backgroundColor:Colors.Semiblue,
  left: null,
  right: null,
  // options:[{label:'hello',id:1}]
};
