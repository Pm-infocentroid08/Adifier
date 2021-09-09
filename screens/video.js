import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

const video = () => {
    return (
        <View>
           <VideoPlayer
                videoProps={{
                    height:'60%',
                    width:'100%',
                    shouldPlay: true,
                    resizeMode: Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT,
                    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                    source: {
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                timeVisible={true}
                defaultControlsVisible={(e)=>console.log(e)}
                fullscreen={true}
                
                />
        </View>
    )
}

export default video

const styles = StyleSheet.create({})
