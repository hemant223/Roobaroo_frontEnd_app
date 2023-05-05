import React, { useState, useRef, useEffect } from "react";
import { Button, Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import Input from '../../components/shared/textInputs/Inputs';
import FullSizeButtons from "../../components/shared/buttons/FullSizeButtons";
import { FontFamily } from "../../assets/fonts/FontFamily";
import { ImagesAssets } from "../../components/shared/ImageAssets";
import { getStoreData, storeData } from "../../helper/utils/AsyncStorageServices";
import OTPInputView from '@twotalltotems/react-native-otp-input'

function OtpInput(props) {
    const [isModalVisible, setModalVisible] = useState(true);
    // const { otp } = props.route.params;
    //const [otp, setOtp] = useState('')
    const et1 = useRef()
    const et2 = useRef()
    const et3 = useRef()
    const et4 = useRef()
    const et5 = useRef()
    const [f1, setF1] = useState('')
    const [f2, setF2] = useState('')
    const [f3, setF3] = useState('')
    const [f4, setF4] = useState('')
    const [f5, setF5] = useState('')
    var [time, setTime] = useState(30)
    //const [minutes, setMinutes] = useState('00');
    //const [seconds, setSeconds] = useState(true);
    var [refresh, setRefresh] = useState(true)
    const [show, setShow] = useState(false)


    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(30);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
     alert(otp)
    const generateOtp = () => {
        var otpp = parseInt(Math.random() * 8999) + 10000
         alert(otpp)
        setOtp(otpp)
    }
   


    const handleSubmit = async () => {
        let userData = await getStoreData('userData')
        var getOtp = f1 + f2 + f3 + f4 + f5
        if (otp == getOtp) {
            storeData(
                'userData',
                { ...userData, loggedIn: true },
            );
            props.navigation.navigate('Dashboard')
        } else {
            alert('Enter correct Otp')
        }

    }






    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            }
        
            if (seconds === 0) {
              if (minutes === 0) {
                clearInterval(interval);
              } else {
                setSeconds(59);
                setMinutes(minutes - 1);
              }
            }
          }, 1000);
        
          return () => {
            clearInterval(interval);
          };
    }, [seconds])



    const handleClick = () => {
       setMinutes(0);
  setSeconds(30);
  generateOtp();
    }

   

    return (
        <View>
            <View style={{ height: '100%', width: '100%' }}>
                <ImageBackground source={ImagesAssets.login_background} resizeMode='cover' style={{ width: '100%', height: '80%' }} />
            </View>
            <Button title="Show modal" onPress={toggleModal} />
            <Modal isVisible={isModalVisible} style={styles.modal}   >
                <View style={styles.modalContainer}>

                    <View style={{ padding: 5 }}>
                        <Text style={styles.modalContainerTitle}>Verify OTP</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={styles.subTitle}>We've sent you an OTP on your registered mobile number</Text>
                    </View>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-evenly' }} >


                        <OTPInputView style={{ width: '80%', height: '5%', marginTop: 15, fontSize: 18 }} pinCount={5}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        //  onCodeFilled = {(code => {
                        //      console.log(`Code is ${code}, you are good to go!`)
                        //  })}
                        />
                    </View>

                    <View style={{ marginTop: 5, padding: 10, width: '100%', }}>
                        <View style={{ alignSelf: 'center', width: '100%', }}>
                            <FullSizeButtons onPress={() => { handleSubmit() }} titleColor='#fff' title='Submit' height={50} width={'100%'} />
                        </View>
                        <View style={{ marginTop: 3, width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ marginRight: 3 }}>Didn't recieved OTP?</Text>
                            {minutes>0 || seconds>0 ?( <Text style={{ fontWeight: 'bold', color: '#f47216', marginLeft: 3 }}>{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}</Text>) : (<Text style={{fontWeight: 'bold', color: '#f47216', marginLeft: 3}} onPress={handleClick}>Resend Otp</Text>)}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default OtpInput;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        ,
    },
    modal: {
        width: '100%',
        marginLeft: 0,
        marginBottom: 0,
    },
    modalContainer: {
        width: '100%',
        backgroundColor: "#fff",
        position: 'absolute',
        height: 300,
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: 10

    },
    modalContainerTitle: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 15,
        color: '#071b3f',
        fontFamily: FontFamily.Popinsbold

    },
    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#858585'
    },

    underlineStyleBase: {
        width: 35,
        height: 50,
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize: 22,
        color: '#000',
        borderColor: '#000'
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
        borderBottomWidth: 1
    },

});