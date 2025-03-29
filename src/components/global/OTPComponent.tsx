import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const {width} = Dimensions.get('screen');

const OTP_DIGITS_COUNT = 10;

const OTPComponent = () => {
  const refArr = useRef<TextInput[]>([]);

  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill(''),
  );

  useEffect(() => {
    refArr.current?.[0]?.focus();
    refArr.current[0]?.setNativeProps({
      style: {borderWidth: 1, borderColor: 'red'},
    });
  }, []);

  const handleOnChange = (txt: string, index: number) => {
    if (isNaN(Number(txt))) {
      return;
    }
    let newArr = [...inputArr];
    newArr[index] = txt.slice(-1);
    setInputArr(newArr);

    if (txt !== '' && newArr.join() !== inputArr.join()) {
      refArr.current?.[index + 1]?.focus();
      refArr.current[index]?.setNativeProps({
        style: {borderWidth: 1, borderColor: 'red'},
      });
    }

    if (txt === '') {
      refArr.current?.[index - 1]?.focus();
      refArr.current[index]?.setNativeProps({
        style: {borderWidth: 1, borderColor: 'grey'},
      });
    }
  };

  // 🚀 Handle backward focus on backspace
  const handleKeyPress = (e: any, index: number) => {
    console.log(e.nativeEvent.key);
    if (
      e.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      inputArr[index] === ''
    ) {
      // Delay focus to avoid flickering
      setTimeout(() => {
        refArr.current[index - 1]?.focus();
      }, 0);
    }
  };

  return (
    <View style={{width: width}}>
      <Text>OTPComponent</Text>
      <View style={styles.subContainer}>
        {inputArr?.map((item, index) => {
          return (
            <>
              <TextInput
                ref={el => (refArr.current[index] = el!)}
                key={index}
                //   maxLength={1}
                keyboardType="numeric"
                value={inputArr?.[index]}
                style={[styles.inputBox]}
                onChangeText={txt => handleOnChange(txt, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                cursorColor={'red'}
                selectionColor={'red'}
              />
              {/* {Math.floor(OTP_DIGITS_COUNT / 2) === index + 1 && (
                <View
                  key={new Date().getMilliseconds()}
                  style={styles.hyphenStyle}
                />
              )} */}
            </>
          );
        })}
      </View>
    </View>
  );
};

export default OTPComponent;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  inputBox: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: 40,
    height: 40,
    margin: 5,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
    color: 'red',
  },
  hyphenStyle: {
    width: 10,
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});
