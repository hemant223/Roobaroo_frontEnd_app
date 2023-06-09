import React, {useState} from 'react';
import {View, TextInput, Button, TouchableOpacity,Text} from 'react-native';
import Input from '../shared/textInputs/Inputs';
import Ant from 'react-native-vector-icons/AntDesign';

const MultiTextFieldForm = props => {
  //   const [textFields, props.setTextFields] = useState([{value: ''},{value: ''}]);
//   alert(JSON.stringify(props.textFields.length))
  const addTextField = () => {
    props.setTextFields([...props.textFields, {value: ''}]);
  };

  const removeTextField = index => {
    const newFields = [...props.textFields];
    newFields.splice(index, 1);
    props.setTextFields(newFields);
  };

  const onChangeText = (text, index) => {
    const newFields = [...props.textFields];
    newFields[index].value = text;
    props.setTextFields(newFields);
  };

  return (
    <View>
      {props.textFields.map((field, index) => (
        <View
          style={{
           /*  backgroundColor:'yellow', */ flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            // justifyContent:'space-evenly'
          }}
          key={index}>
            <View style={{/* backgroundColor:'blue', */width:'80%'}}>
          <Input
        //   backgroundColor={'yellow'}
            placeholder="Full Name"
            // label={'Last name'}
            // textLabel
            value={field.value}
            width="90%"
            height={45}
            borderWidth={1}
            borderBottomWidth={1}
            // onFocus={() => handleError(null, 'LastName')}
            // error={errors.LastName}
            onChangeText={text => onChangeText(text, index)}
          />
          </View>
          {
          index == 0 &&
          <Text style={{color:'gray'}}> {props.textFields.length}</Text>
          }
          {index == 0 &&<TouchableOpacity style={{marginLeft:10}} onPress={() => addTextField()}>
            <Ant name={'pluscircle'} size={34} style={{color: 'gray'}} />
          </TouchableOpacity>}
          {index > 0 && (
            // <Button  title="Remove" onPress={() => removeTextField(index)} />
            <TouchableOpacity style={{marginLeft:17}} onPress={() => removeTextField(index)}>
              <Ant
                name={'minuscircleo'}
                size={34}
                //   backgroundColor="blue"
                style={{color: 'gray'}}
              />
            </TouchableOpacity>
          )}
        </View>
      ))}
      {/* <Button title="Add" onPress={() => addTextField()} /> */}

      {/* <TouchableOpacity onPress={() => addTextField()}>
        <Ant name={'pluscircle'} size={34} style={{color: 'gray'}} />
      </TouchableOpacity> */}
    </View>
  );
};

export default MultiTextFieldForm;
