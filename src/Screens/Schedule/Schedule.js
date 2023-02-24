import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import CalendarStrip from 'react-native-calendar-strip';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modal} from 'react-native-paper';

const Schedule = () => {
  const [showModal, setShowmodal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topView}>
          <View style={styles.aeroView}>
            <TouchableOpacity>
              <AntDesign name="left" size={25} color="blue" />
            </TouchableOpacity>
            {/* <Text style={styles.dateText}>Tue, Feb 26</Text> */}
          </View>
          <View style={styles.plusIconView}>
            <TouchableOpacity>
              <AntDesign name="pluscircleo" size={25} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="refresh-cw" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowmodal(!showModal);
              }}>
              <Entypo name="dots-three-vertical" size={25} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <CalendarStrip
          style={{
            height: 80,
            borderTopWidth: 0.3,
            borderBottomWidth: 5,
            borderBottomColor: 'blue',
          }}
          dateNameStyle={{color: '#000'}}
          dateNumberStyle={{color: '#000'}}
          highlightDateNameStyle={{color: 'blue'}}
          highlightDateNumberStyle={{color: 'blue'}}
          calendarHeaderStyle={{
            color: '#000',
            alignSelf: 'flex-start',
            paddingLeft: 30,
          }}
          calendarAnimation={{type: 'sequence', duration: 30}}
          scrollable={true}
          daySelectionAnimation={{
            type: 'background',
            // borderWidth:2,
            duration: 200,
            borderBottomColor: 'blue',
          }}
        />
        <TouchableOpacity style={styles.detailsView}>
          <Text style={{color: '#000'}}>Client: Advantage Technologies</Text>
          <Text style={{color: '#000'}}>Project: Customer Billing System</Text>
          <Text style={{color: '#000'}}>Task: QA</Text>
          <Text style={{color: '#000'}}>Billing: Consultant</Text>
          <View
            style={{
              borderBottomWidth: responsiveWidth(0.3),
              borderBottomColor: 'gray',
              marginVertical: responsiveHeight(1),
            }}></View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                fontSize: responsiveFontSize(3),
                fontWeight: 'bold',
                color: '#000',
              }}>
              5.00 hrs
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsView}>
          <Text style={{color: '#000'}}>Client: Joan Arc Inc</Text>
          <Text style={{color: '#000'}}>
            Project: Financial Reporting - Fin
          </Text>
          <Text style={{color: '#000'}}>Task: Development</Text>
          <Text style={{color: '#000'}}>Billing: Project Rate</Text>
          <View
            style={{
              borderBottomWidth: responsiveWidth(0.3),
              borderBottomColor: 'gray',
              marginVertical: responsiveHeight(1),
            }}></View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                fontSize: responsiveFontSize(3),
                fontWeight: 'bold',
                color: '#000',
              }}>
              2.00 hrs
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsView}>
          <Text style={{color: '#000'}}>Client: Advantage Technologies</Text>
          <Text style={{color: '#000'}}>Project: Customer Billing System</Text>
          <Text style={{color: '#000'}}>Task: User training</Text>
          <Text style={{color: '#000'}}>Billing: Architect</Text>
          <View
            style={{
              borderBottomWidth: responsiveWidth(0.3),
              borderBottomColor: 'gray',
              marginVertical: responsiveHeight(1),
            }}></View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                fontSize: responsiveFontSize(3),
                fontWeight: 'bold',
                color: '#000',
              }}>
              1.00 hrs
            </Text>
          </View>
        </TouchableOpacity>
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
        </View>
        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'gray',
              position: 'absolute',
              right: 15,
              top: -295,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowmodal(!showModal);
              }}>
              <Entypo
                name="cross"
                size={25}
                color="#000"
                style={{
                  position: 'relative',
                  right: -80,
                  top: -70,
                }}
              />
            </TouchableOpacity>

            <Text>Under Development</Text>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
