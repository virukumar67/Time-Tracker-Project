import {RefreshControl, StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: responsiveWidth(5),
  },
  logoImg: {
    width: responsiveWidth(70),
    height: responsiveHeight(20),
    borderRadius: responsiveWidth(5),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  HeadTxt: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginVertical: responsiveHeight(1),
  },
  input: {
    marginTop: responsiveHeight(3),
  },
  loginBtn: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    marginVertical: responsiveHeight(3),
  },
  loginbtnTxt: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    paddingVertical: responsiveHeight(1),
  },
  forgotTxt: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#000',
  },
  lastView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  accountTxt: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default styles;
