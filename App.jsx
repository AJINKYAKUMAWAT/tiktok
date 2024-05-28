// App.js
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';


 const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / Dimensions.get('window').height);
    setSelectedIndex(index);
  };

  return (
    <View style={{flex:1}}>
      <FlatList data={[
        { id: '1', uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4' },
        { id: '2', uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4' },
        { id: '3', uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4' },
        { id: '4', uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4' }
      ]} 
      
      onScroll={handleScroll}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <View style={{width:Dimensions.get('window').width,
          height:Dimensions.get('window').height

          }}>

            <Video
            paused={selectedIndex === index ? false : true}
            style={{width:Dimensions.get('window').width,
          height:Dimensions.get('window').height
          }} resizeMode='cover' source={item} repeat={true}/>
          </View>
        )
      }} />
    </View>
  );
};

export default App

