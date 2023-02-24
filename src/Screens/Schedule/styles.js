import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: responsiveHeight(5),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // marginHorizontal: responsiveWidth(5),
    height:responsiveHeight(8),
    // backgroundColor:'red'
  },
  aeroView: {
    flexDirection: 'row',
    width: responsiveWidth(30),
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#000',
  },
  plusIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(30),
  },
  detailsView: {
    backgroundColor: '#fff',
    padding: responsiveWidth(2),
    marginTop: responsiveHeight(3),
    marginHorizontal: responsiveWidth(5),
    borderLeftWidth: responsiveWidth(2),
    borderLeftColor: 'green',
    borderRadius: responsiveWidth(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  innerContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveHeight(3),
    backgroundColor:'#fff'
  },
  timerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerstyl: {
    backgroundColor: 'green',
    marginRight: responsiveWidth(2),
    height:responsiveWidth(12),
    width:responsiveWidth(12),
    borderRadius:responsiveWidth(6),
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
});
export default styles;
