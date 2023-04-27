import React,{useState} from "react";
import { StyleSheet, View } from 'react-native';
import { RadialSlider } from 'react-native-radial-slider';

const SpeedoMeter = () => {
  const [speed, setSpeed] = useState(10);

  return (
    <View style={styles.container}>
      <RadialSlider value={speed} min={0} max={50} 
      subTitle="Today's Visitor"
       thumbRadius={50}
        lineColor='grey'
         linearGradient={[{ offset: '100%', color: '#5bd5c2'}]}
          disabled={true}
          isHideTailText={true}
          isHideButtons={true}
          isHideSlider={true}
          isHideTitle={true}
          unit=''
          valueStyle={{fontSize:40,textAlign:'right'}}
          centerContentStyle={{alignItems:'center',top:-40}}
          openingRadian={1.55}
          subTitleStyle={{fontWeight:'600',fontSize:16}}

          stroke='red'
          />
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default SpeedoMeter;