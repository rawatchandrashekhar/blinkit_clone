import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import RollingBar from 'react-native-rolling-bar';
import CustomText from '@components/ui/CustomText';

const SearchBar = (): React.JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Icon
        style={{marginLeft: 10}}
        name="search"
        color={Colors.text}
        size={RFValue(20)}
      />
      <RollingBar
        interval={3000}
        defaultStyle={false}
        customStyle={styles.textContainer}>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "sweets"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "milk"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "ata, dal, coke"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "pooja thali"
        </CustomText>
      </RollingBar>
      <View style={styles.divider} />
      <Icon
        style={{marginRight: 10}}
        name="mic"
        color={Colors.text}
        size={RFValue(20)}
      />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: Colors.border,
    marginTop: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textContainer: {
    width: '90%',
    paddingLeft: 10,
    height: 50,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
});
