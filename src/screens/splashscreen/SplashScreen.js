import React, { useEffect } from 'react'
import {ImageBackground,Image,View} from 'react-native'
import { ImagesAssets } from '../../components/shared/ImageAssets'
import { getStoreData } from '../../helper/utils/AsyncStorageServices';

export default function SplashScreen(props){
    const authUser = async () => {
        const userData = await getStoreData('userData');
        if (userData) {
            if (userData.loggedIn) {
                props.navigation.navigate('Dashboard');
            }
            else {
                
                props.navigation.navigate('Login')
            }
        }
        else {
            props.navigation.navigate('Login')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            authUser();
        }, 500);
    }, [])
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