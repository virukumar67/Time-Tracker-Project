import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
      <Animatable.View animation={'zoomInUp'} duration={1000} delay={300}>
        <Image
          source={require('../../Assets/Images/splash.png')}
          style={styles.imgStyl}
          resizeMode="contain"
        />
      </Animatable.View>
    </View>
  );
};

export default Splash;
