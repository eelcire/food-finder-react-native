import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Modal } from 'react-native'

import ImageViewer from 'react-native-image-zoom-viewer'

const PhotoScreen = ({ navigation }) => {
    return (
        <Modal>
            <ImageViewer imageUrls = {[{ url: navigation.state.params.item }]}/>
        </Modal>
            // <ScrollView horizontal>
            //     <ScrollView contentContainerStyle = {styles.imageContainer}>
            //         <Image style = {styles.image} source = {{ uri: navigation.state.params.item }} />
            //     </ScrollView>
            // </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        
    }
})

export default PhotoScreen