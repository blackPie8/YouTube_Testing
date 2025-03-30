import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <MainContent />
        <Footer />
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({})
