import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    backgroundColor: 'green',
    width: responsiveWidth(60),
    height: responsiveWidth(60),
    borderRadius: responsiveWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: responsiveHeight(10),
  },
  clockTxt: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontWeight: '900',
  },
  secondView: {
    backgroundColor: '#e3e0d8',
    marginBottom: responsiveHeight(8),
  },
  date: {
    textAlign: 'center',
    color: '#000',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    marginVertical: responsiveHeight(1),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: responsiveHeight(3),
  },
  timerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerstyl: {
    backgroundColor: 'green',
    marginRight: responsiveWidth(2),
  },
  deletestyl: {
    backgroundColor: 'orange',
  },
  txt1styl: {
    color: 'green',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  txt2styl: {
    color: 'green',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(3),
  },
  timetxt: {
    color: '#000',
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
  },
  locationView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  icontxt: {
    color: '#000',
  },
});
export default styles;
