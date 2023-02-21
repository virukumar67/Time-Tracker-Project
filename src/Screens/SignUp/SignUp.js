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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Validation = () => {
    if (!email || email.trim() == '') {
      ToastAndroid.show('enter email', ToastAndroid.SHORT);
    } else if (!password || password.trim() == '') {
      ToastAndroid.show('enter password', ToastAndroid.SHORT);
    } else if (!password || password.trim() == '') {
      ToastAndroid.show('enter password', ToastAndroid.SHORT);
    } else if (!password || password.trim() == '') {
      ToastAndroid.show('enter password', ToastAndroid.SHORT);
    } else {
      alert('SignUp Successfully');
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
        <Text style={styles.HeadTxt}>Sign Up</Text>
        <View>
          <TextInput
            label="First Name"
            activeUnderlineColor="blue"
            placeholder="enter first name"
            placeholderTextColor="gray"
            value={firstName}
            onChangeText={text => setFirstName(text)}
            style={styles.input}
          />
          <TextInput
            label="Last Name"
            activeOutlineColor="blue"
            placeholder="enter last name"
            placeholderTextColor="gray"
            value={lastName}
            onChangeText={text => setLastName(text)}
            style={styles.input}
          />
          <TextInput
            label="Email"
            activeOutlineColor="blue"
            placeholder="enter email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            label="Password"
            activeOutlineColor="blue"
            placeholder="enter password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => Validation()}>
          <Text style={styles.loginbtnTxt}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
