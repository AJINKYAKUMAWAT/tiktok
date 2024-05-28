import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

const Styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

const background =
  'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4';

const VideoItem = ({data}) => {
  const {uri, caption, channelName, musicName, likes, comments, avatarUri} =
    data;
  return <Video source={{uri}} style={Styles.video} resizeMode="cover" />;
};

export default VideoItem;
