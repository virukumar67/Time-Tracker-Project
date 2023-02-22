import React ,{useState} from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const TimeSheets = () => {
    const [date , setDate] = useState(new Date())
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.clockTxt}>Clock In</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.date}>Viru Kumar</Text>
      </View>
    </SafeAreaView>
  );
};

export default TimeSheets;