import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
const DATA = [
    {
      id: '1',
      language: 'English',
      locallanguage: 'English',
    },
    {
      id: '2',
      language: 'हिंदी',
      locallanguage: 'Hindi ',
    },
    {
      id: '3',
      language: 'ગુજરાતી',
      locallanguage: 'Gujarati ',
    },
    {
      id: '4',
      language: 'मराठी',
      locallanguage: 'Marathi  ',
    },
    {
      id: '5',
      language: 'भोजपुरी',
      locallanguage: 'Bhojpuri  ',
    },
    {
      id: '6',
      language: 'તેલુગી',
      locallanguage: ' Telugu  ',
    },
  
    {
      id: '7',
      language: 'தமிழ்',
      locallanguage: 'Tamil ',
    },
    {
      id: '8',
      language: 'ਪੰਜਾਬੀ',
      locallanguage: 'Punjabi ',
    },
  ];
const MyComponent = () => {
  const [checked, setChecked] = React.useState();

  return (
    <View>
      <RadioButton
        value={DATA.id}
        // status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => alert (JSON.stringify(DATA[`${"3"}`]))}
      />
      <RadioButton
        value={DATA}
        // status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => alert (JSON.stringify(DATA))}
      />
    </View>
  );
};

export default MyComponent;