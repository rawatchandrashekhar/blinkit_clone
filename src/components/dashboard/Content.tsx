import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {adData, categories} from '@utils/dummyData';
import AdCarousel from './AdCarousel';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';
import CategoryContainer from './CategoryContainer';

const Content = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <AdCarousel adData={adData} />
      <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
        Grocery & Kitchen
      </CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
        Bestsellers
      </CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
        Snacks & Drinks
      </CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
        Home & Lifestyle
      </CustomText>
      <CategoryContainer data={categories} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
