import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Video from "react-native-video";
import { SFSymbol } from 'react-native-sfsymbols';

interface VideoPlayerProps {
  videoDetails: {
    title: string;
    subtitle: string;
    profile: any;
    metadata: string;
  };
}

class VideoPlayer extends Component<VideoPlayerProps> {
  render() {
    const { videoDetails } = this.props;

    return (
      <View style={styles.videoContainer}>
        <Video
          source={require("../assets/video-1.mp4")}
          style={styles.video}
          controls={true}
          resizeMode="contain"
          repeat={true}
          testID="video"
        />
        <View style={styles.videoContent}>
          <View style={styles.logoCont}>
            <Image source={videoDetails.profile} style={styles.profileImg} testID="profile-image" />
          </View>
          <View style={styles.textCont}>
            <Text style={styles.title} testID="video-title">{videoDetails.title}</Text>
            <Text style={styles.title} testID="video-subtitle">{videoDetails.subtitle}</Text>
            <View style={styles.subCont}>
              <Text style={styles.metadata} testID="video-metadata">{videoDetails.metadata}</Text>
            </View>
          </View>
          <View style={styles.infoCont}>
            <SFSymbol name="ellipsis" size={25} weight="light" scale="small" color="black" style={styles.icon} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoContainer: {
    height: 320,
  },
  videoContent: {
    flexDirection: 'row',
    marginTop: 8,
  },
  logoCont: {
    marginHorizontal: 10,
    marginTop: 8,
  },
  profileImg: {
    height: 45,
    width: 45,
  },
  textCont: {
    width: 300,
    marginTop: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  subCont: {
    marginTop: 2,
  },
  metadata: {
    fontSize: 12,
    color: '#575957',
  },
  infoCont: {
    width: 30,
    justifyContent: 'center',
  },
  icon: {
    transform: [{ rotate: '45deg' }],
    marginBottom: 8,
  },
});

export default VideoPlayer;
