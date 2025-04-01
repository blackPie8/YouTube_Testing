import { StyleSheet, View, Image, ScrollView, Text, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { SFSymbol } from 'react-native-sfsymbols';

class Header extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.headerContainer} testID="header-container">
          <View style={styles.firstHalf}>
            <Image source={require("../assets/logo.png")} style={styles.logoImg} testID="logo" />
          </View>

          <View style={styles.secondHalf}>
            <SFSymbol name="tv" size={25} weight='light' scale='small' color="black" />
            <SFSymbol name="bell" size={25} weight="light" scale='small' color="black" />
            <SFSymbol name="magnifyingglass" size={25} weight='light' scale="small" color="black" />
          </View>
        </View>

        <View style={styles.exploreContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} testID="explore-scroll-view">
            <View style={styles.exploreContent}>
              <View style={styles.exploreIconCont}>
                <SFSymbol name="safari" size={25} weight='light' scale="small" color="black" />
              </View>
              <View style={styles.contentOne}>
                <Text style={{ color: 'white', fontWeight: '600' }}>All</Text>
              </View>
              <View style={[styles.contentOne, { width: 60, backgroundColor: '#dadce0' }]}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Music</Text>
              </View>
              <View style={[styles.contentOne, { width: 80, backgroundColor: '#dadce0' }]}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Podcasts</Text>
              </View>
              <View style={[styles.contentOne, { width: 120, backgroundColor: '#dadce0' }]}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Reverberation</Text>
              </View>
              <View style={[styles.contentOne, { width: 110, backgroundColor: '#dadce0' }]}>
                <Text style={{ color: 'black', fontWeight: '600' }}>The Weekend</Text>
              </View>
              <View style={[styles.contentOne, { width: 70, backgroundColor: '#dadce0' }]}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Gaming</Text>
              </View>
              <View style={[styles.contentOne, { width: 120, backgroundColor: '#dadce0' }]}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Real Madrid CF</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    // marginTop: 67,
    marginLeft: 20,
    flexDirection: 'row',
  },
  logoImg: {
    height: 20,
    width: 93,
  },
  firstHalf: {
    width: '50%',
  },
  secondHalf: {
    flexDirection: 'row',
    paddingLeft: 65,
    gap: 50,
  },
  exploreContainer: {
    marginTop: 15,
    height: 40,
  },
  exploreContent: {
    flexDirection: 'row',
  },
  exploreIconCont: {
    width: 40,
    height: 30,
    backgroundColor: '#dadce0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 4,
  },
  contentOne: {
    backgroundColor: 'black',
    width: 40,
    height: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});