import React from 'react'
import {ImageBackground,Image,View} from 'react-native'
import { ImagesAssets } from '../../components/shared/ImageAssets'

export default function SplashScreen({navigation}){
    // setTimeout(()=>{
    //     navigation.replace('Second');
    // },2000);
    return (
        <View style={{flex:1,}}>
            <ImageBackground source={ImagesAssets.splash_background} resizeMode='stretch' style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{bottom:'12%'}}>
                    <Image source={ImagesAssets.logo}/>
                    </View>
                </ImageBackground>             
            </View>   
            
        
    )
}