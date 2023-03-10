import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import styles from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const Validation = () => {
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!email || email.trim() == '') {
      ToastAndroid.show('Enter E-mail', ToastAndroid.SHORT);
    } else if (!password || password.trim() == '') {
      ToastAndroid.show('Enter Password', ToastAndroid.SHORT);
    } else if (password && password.trim().length < 6) {
      ToastAndroid.show(
        'Password can not less than 6 character',
        ToastAndroid.SHORT,
      );
    } else {
      navigation.navigate('TabRouts');
    }
  };

  //  validate = (text) => {
  //     console.log(text);
  //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //     if (reg.test(text) === false) {
  //       console.log("Email is Not Correct");
  //       this.setState({ email: text })
  //       return false;
  //     }
  //     else {
  //       this.setState({ email: text })
  //       console.log("Email is Correct");
  //     }
  //   }

  const emailChange = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmail(text);
    if (reg.test(email) === false) {
      setCheckValidEmail(true);
    } else {
      setCheckValidEmail(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Image
          source={require('../../Assets/Images/applogo.jpg')}
          resizeMode={'contain'}
          style={styles.logoImg}
        />
        <Text style={styles.HeadTxt}>Login Your Account</Text>
        <View>
          <TextInput
            mode="outlined"
            label="Email"
            activeOutlineColor="blue"
            placeholder="Enter email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => emailChange(text)}
            style={styles.input}
          />
          <View>
            <Text style={{color: 'red', textAlign: 'right'}}>
              {checkValidEmail ? 'Wrong -email format' : ''}
            </Text>
          </View>
          <TextInput
            mode="outlined"
            label="Password"
            activeOutlineColor="blue"
            placeholder="Enter password"
            placeholderTextColor="gray"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            maxLength={18}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => Validation()}>
          <Text style={styles.loginbtnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePassword')}>
          <Text style={styles.forgotTxt}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.lastView}>
          <Text>No account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.accountTxt}>Create account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
