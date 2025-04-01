import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import VideoCard from './VideoCard';
import { videoDetails, videos } from './VideoData';
import VideoPlayer from './VideoPlayer';


class MainContent extends Component{
  render() {
    return (
      <View style={{ marginTop: 10, height: 670 }}>
        <ScrollView>
          <View style = {styles.videoPlayerContainer}>
        <VideoPlayer videoDetails={videoDetails}/>
        </View>

          <View style={styles.mainContent}>
            {videos.map((video, index) => (
              <React.Fragment key={video.id}>
                <VideoCard video={video}/>

                {index === 0 && (
                  <View style={styles.adContainer} testID="ad-container">
                    <Image source={require("../assets/ad.png")} style={styles.adStyling} testID="ad-image"/>
                    <TouchableOpacity>
                      <View style={styles.adButton}>
                        <Text style={styles.adText} testID="ad-button-text">One-month trial</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MainContent;

const styles = StyleSheet.create({
  mainContent: {},
  videosCont: {
    width: "100%",
  },
  thumbnailImage: {
    height: 220,
    width: '100%',
  },
  videoContent: {
    flexDirection: 'row',
  },
  logoCont: {
    width: '15%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textCont: {
    width: '70%',
    marginTop: 13,
    marginLeft: 5,
  },
  subCont: {
    marginTop: 3,
  },
  infoCont: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
  },
  adContainer: {
    marginBottom: 50,
  },
  adStyling: {
    height: 380,
    width: 415,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  adButton: {
    width: 380,
    height: 30,
    backgroundColor: '#e6e8e6',
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adText: {
    fontSize: 13,
    fontWeight: '500',
  },
  videoPlayerContainer: {},
});