import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView:{
    backgroundColor:'green',
    width:responsiveWidth(50),
    height:responsiveWidth(50),
    borderRadius:responsiveWidth(25),
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginVertical:responsiveHeight(5),
  },
  clockTxt:{
    color:'#fff',
    fontSize:responsiveFontSize(3),
    fontWeight:'900',
  },
  secondView:{
    backgroundColor:'#e3e0d8',
  },
  date:{
    textAlign:'center',
    color:'#000',
    fontSize:responsiveFontSize(2.5),
    fontWeight:'500',
    marginVertical:responsiveHeight(1),

  },
});
export default styles;
