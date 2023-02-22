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
    if (!firstName || firstName.trim() == '') {
      ToastAndroid.show('enter first name', ToastAndroid.SHORT);
    } else if (firstName && firstName.trim().length < 3) {
      ToastAndroid.show('name character not less than 3', ToastAndroid.SHORT);
    } else if (!lastName || lastName.trim() == '') {
      ToastAndroid.show('enter last name', ToastAndroid.SHORT);
    } else if (lastName && lastName.trim().length < 3) {
      ToastAndroid.show('name character not less than 3', ToastAndroid.SHORT);
    } else if (!email || email.trim() == '') {
      ToastAndroid.show('enter email', ToastAndroid.SHORT);
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
            mode="outlined"
            label="First Name"
            activeOutlineColor="blue"
            placeholder="enter first name"
            placeholderTextColor="gray"
            value={firstName}
            maxLength={15}
            onChangeText={text => setFirstName(text)}
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Last Name"
            activeOutlineColor="blue"
            placeholder="enter last name"
            placeholderTextColor="gray"
            value={lastName}
            maxLength={15}
            onChangeText={text => setLastName(text)}
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Email"
            activeOutlineColor="blue"
            placeholder="enter email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Password"
            activeOutlineColor="blue"
            placeholder="enter password"
            placeholderTextColor="gray"
            value={password}
            maxLength={18}
            secureTextEntry={true}
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
