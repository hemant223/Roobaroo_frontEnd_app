import { useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Colors } from '../../assets/config/Colors'
import { FontFamily } from '../../assets/fonts/FontFamily'

const NewModal= ()=>{

  

  const [checked,setChecked] = useState(false)

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
      
    //   const [checked, setChecked] = useState('');

             const handleChech = (item) => {
               alert (item.id)
               setChecked(item.id);
                  if(checked>=1){
                    setChecked('unchecked')
                  }
                }

    // const handleClick=()=>{
    //     alert('heeeeeee')
    // }
return(
    <>
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        {DATA.map(item=>{
             
            return(
              
              <View style={{...styles.mainContainer}}>
        <View
          style={{
            width: '27%',
            //  backgroundColor:"yellowgreen",
            top: 30,
            justifyContent:'center'
            
          }}
          >
            <RadioButton
            
            
            // status={checked === item.id ? 'checked' : 'unchecked'}
            value={checked}
            //  color={'#005db6'}
           onPress={ ()=>{alert(item.id)}}
            />
            </View>
            <View
          style={{
            width: '100%',
            // height: 30,
            // backgroundColor: 'skyblue',
            // bottom: 4,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.textCss}>{item.language}</Text>
        </View>

        <View
          style={{
            width: '100%',
            // height: 20,
            // backgroundColor: 'yellowgreen',
            // bottom: 4,

            alignItems: 'center',
          }}>
          <Text
            style={{
              //   left: 5,
              fontFamily: FontFamily.PopinsRegular,
              // fontSize: FontSize.small,
              color: Colors.black,
              //   top:'0.8%'
            }}>
           {item.locallanguage}
          </Text>
        </View>
          
      </View>


            )
      })}
      </View>
      </>
)
}

export default NewModal;

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#fff',
      width: '40%',
      borderRadius: 16,
      // marginLeft: 10,
      borderWidth: 1,
      borderColor: Colors.borderColor1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      top:20,
  
      margin: 5,
      height: 120,
      // elevation: 1,
      // borderColor:Colors.borderColor1
    },
  
    textCss: {
      color: '#186cbd',
  
      fontFamily: FontFamily.Popinsbold,
      // fontSize: FontSize.small,
      // backgroundColor: 'yellow',
    },
  });