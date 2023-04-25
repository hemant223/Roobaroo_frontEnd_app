import React from 'react'
import {ImageBackground,Image} from 'react-native'

export default function SplashScreen({navigation}){
    setTimeout(()=>{
        navigation.replace('Second');
    },2000);
    return (
        
            <ImageBackground source={require('../../assets/images/Background.jpg')} style={{width: '100%', height: '100%', justifyContent:'center',alignItems:'center'}} >              
                 <Image  source={require('../../assets/images/Logo.jpg')} style={{ width: 218, height: 180,}} />               
            
            </ImageBackground>
        
    )
}