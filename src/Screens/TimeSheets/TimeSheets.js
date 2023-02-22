import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
const TimeSheets = () => {
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.topView}>
        <Text style={styles.clockTxt}>Clock In</Text>
      </TouchableOpacity>
      <View style={styles.secondView}>
        <Text style={styles.date}>Viru Kumar</Text>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.timerView}>
            <MaterialCommunityIcons
              name="timer-off-outline"
              size={40}
              color="#fff"
              style={styles.timerstyl}
            />
            <View>
              <Text style={styles.txt1styl}>Work</Text>
              <Text style={styles.txt2styl}>0.05 hrs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="delete"
              size={40}
              color="#fff"
              style={styles.deletestyl}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.timetxt}>1:10 PM</Text>
        <Text style={{marginHorizontal: responsiveWidth(5)}}>sdfgh</Text>
        <View>
          <Text style={styles.timetxt}>Clocked in</Text>
          <View>
            <View style={styles.locationView}>
              <AntDesign name="mobile1" size={20} color="gray" />
              <Text style={styles.icontxt}>Via Mobile</Text>
            </View>
            <View style={styles.locationView}>
              <Ionicons name="location-outline" size={20} color="gray" />
              <View>
              <Text style={styles.icontxt}>3 Lagoon Dr. Redwood</Text>
              <Text style={styles.icontxt}>95065, USA</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimeSheets;
