import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BgImg from '../../components/BgImage';

const Hi = () => {
  return (
    <BgImg>
      <View style={styles.containerFirst}>
        <Text style={styles.elementStyle}>Hi</Text>
      </View>
      <View
        style={styles.containerSecond}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"></View>
    </BgImg>
  );
};
const styles = StyleSheet.create({
  containerFirst: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  containerSecond: {
    flex: 2,
    marginHorizontal: 5,
    backgroundColor: 'green',
  },
  elementStyle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});
export default Hi;
