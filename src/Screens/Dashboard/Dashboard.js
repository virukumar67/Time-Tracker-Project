import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Timeoff = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{backgroundColor: '#fff', marginVertical: responsiveHeight(5)}}>
        <View
          style={{
            borderBottomWidth: responsiveWidth(0.3),
            borderBottomColor: 'gray',
            marginTop: responsiveHeight(3),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: responsiveWidth(3),
            marginVertical: responsiveHeight(1.5),
          }}>
          <Text style={{fontSize: responsiveFontSize(2.5), color: '#555'}}>
            Create for approval
          </Text>
          <AntDesign name="right" size={20} color="gray" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: responsiveWidth(3),
            marginVertical: responsiveHeight(1.5),
          }}>
          <Text style={{fontSize: responsiveFontSize(2.5), color: '#555'}}>
            Work on Overtime
          </Text>
          <AntDesign name="right" size={20} color="gray" />
        </View>
      </View>
      <View style={{backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: '#000',
            paddingLeft: responsiveWidth(5),
            paddingTop: responsiveWidth(3),
          }}>
          User Status
        </Text>
        <View
          style={{
            borderBottomWidth: responsiveWidth(0.3),
            borderBottomColor: 'gray',
            marginTop: responsiveHeight(3),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: responsiveWidth(3),
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>5</Text>
            <Text style={{fontSize: responsiveFontSize(2.5), color: '#000'}}>
              In
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>12</Text>
            <Text style={{fontSize: responsiveFontSize(2.5), color: '#000'}}>
              Not in
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'red'}}>1</Text>
            <Text style={{fontSize: responsiveFontSize(2.5), color: '#000'}}>
              Break
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Timeoff;
