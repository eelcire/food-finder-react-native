import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Picker, Modal, ScrollView, Alert, TouchableHighlight, Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import yelp from '../api/yelp'

import ImageViewer from 'react-native-image-zoom-viewer'



const ResultsScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)

    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text style = {styles.titleText}>{result.name} - {result.rating} stars, {result.review_count} reviews</Text>
            <Text style = {styles.text}>{`${result.location.display_address.map(address => address)}`}</Text>
            <Button title = "Contact" onPress = {() => navigation.navigate('MoreInfo', { result: result.hours[0].open, contact: result.display_phone })}/>
            <FlatList style = {styles.listStyle}
                data = {result.photos}
                keyExtractor = {(photo) => photo}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Image style = {styles.imageStyle} source = {{ uri: item }}  />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15
    },
    text: {
        marginLeft: 15,
        marginTop: 5
    },
    listStyle: {
        alignSelf: 'center'
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginBottom: 10
    }
})

export default withNavigation(ResultsScreen)