import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { SFSymbol } from 'react-native-sfsymbols';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer} testID="footer-container">
        <View style={styles.iconsPart} testID="footer-first-part">
          <SFSymbol name='house.fill' size={25} weight="regular" scale="small" color="black" style={styles.icon}/>
          <SFSymbol name='video' size={25} weight="regular" scale="small" color="black" />
        </View>
        <View style={styles.addButton} testID="footer-add-button">
          <SFSymbol name="plus" size={25} weight='regular' scale='small' color="black" />
        </View>
        <View style={styles.iconsPart} testID="footer-second-part">
          <SFSymbol name='bell' size={25} weight="regular" scale="small" color="black" style={styles.icon} />
          <SFSymbol name='person.crop.circle' size={25} weight="regular" scale="small" color="black" />
        </View>
      </View>
    );
  }
}

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    borderColor: 'lightgrey',
    borderTopWidth: 1,
  },
  iconsPart: {
    width: '43%',
    height: 40,
    marginLeft: 10,
    flexDirection: 'row',
    gap: 80,
  },
  icon: {
    marginLeft: 45,
  },
  addButton: {
    width: '9%',
    backgroundColor: '#dee0e3',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 25,
    marginTop: 7,
  },
});