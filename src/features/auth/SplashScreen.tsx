import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Colors} from '@utils/Constants';
import {screenHeight, screenWidth} from '@utils/Scaling';
import Logo from '@assets/images/splash_logo.jpeg';
import GeoLocation from '@react-native-community/geolocation';
import {resetAndNavigate} from '@utils/NavigationUtils';
import {jwtDecode} from 'jwt-decode';

GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

interface DecodedToken {
  exp: number;
}

const SplashScreen: FC = () => {
  const tokenCheck = async () => {
    const accessToken = '';
    const refreshToken = '';

    if (accessToken) {
      // const decodeAccessToken = jwtDecode<DecodedToken>(accessToken);
      // const decodeRefreshToken = jwtDecode<DecodedToken>(refreshToken);

      // const currentTime = Date.now() / 1000;

      // if (decodeRefreshToken?.exp < currentTime) {
      //   resetAndNavigate('CustomerLogin');
      //   Alert.alert('Session Expired', 'Please login again');
      //   return false;
      // }

      // if (decodeAccessToken?.exp < currentTime) {
      //   try {
      //     // refresh_tokens() this will be a function for fetching new access token
      //     // await refetchUser(user)
      //   } catch (error) {
      //     Alert.alert('There was an error refreshing token!');
      //     return false;
      //   }
      // }

      // if(user?.role === "Customer"){
      // resetAndNavigate('ProductDashboard');
      // }else{
      //   resetAndNavigate("DeliveryDashboard");
      // }

      return true;
    }
    resetAndNavigate('CustomerLogin');
    return false;
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        GeoLocation.requestAuthorization();
        tokenCheck();
      } catch (error) {
        Alert.alert(
          'Sorry we need location service to give you better shopping experience.',
        );
      }
    };
    const timeoutId = setTimeout(fetchUserLocation, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});
