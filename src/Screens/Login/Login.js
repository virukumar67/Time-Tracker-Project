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

  const Validation = () => {
    if (!email || email.trim() == '') {
      ToastAndroid.show('Enter E-mail', ToastAndroid.SHORT);
    } else if (!password || password.trim() == '') {
      ToastAndroid.show('Enter Password', ToastAndroid.SHORT);
    } else {
      alert('Login Successfully');
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
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Password"
            activeOutlineColor="blue"
            placeholder="Enter password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
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
