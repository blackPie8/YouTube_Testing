import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SFSymbol } from 'react-native-sfsymbols';

interface VideoCardProps {
  video: {
    thumbnail: any;
    profile: any;
    title: string;
    subtitle: string;
    metadata: string;
  };
  testID?: string;
}

class VideoCard extends Component<VideoCardProps> {
  render() {
    const { video } = this.props;
    return (
      <View style={styles.videosCont} testID="video-card-container">
        <Image source={video.thumbnail} style={styles.thumbnailImage} testID="thumbnail-image"/>
        <View style={styles.videoContent}>
          <View style={styles.logoCont}>
            <Image source={video.profile} style={styles.profileImage} testID="profile-image"/>
          </View>
          <View style={styles.textCont}>
            <Text style={styles.title} testID="video-title">{video.title}</Text>
            <Text style={styles.title} testID="video-subtitle">{video.subtitle}</Text>
            <View style={styles.subCont}>
              <Text style={styles.metadata} testID="video-metadata">{video.metadata}</Text>
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
  videosCont: {
    marginBottom: 35,
  },
  thumbnailImage: {
    width: '100%',
    height: 200,
  },
  videoContent: {
    flexDirection: 'row',
    marginTop: 8,
  },
  logoCont: {
    marginHorizontal: 10,
    marginTop: 8,
  },
  profileImage: {
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

export default VideoCard;
