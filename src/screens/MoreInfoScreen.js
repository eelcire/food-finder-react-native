import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import callNumber from '../utils/phone'

const MoreInfoScreen = ({ navigation }) => {
    const data = navigation.state.params.result
    const contact = navigation.state.params.contact

    const convertTime = (time) => {
        if (time > 12) {
            if (time - 12 < 10) {
                return `0${time-12}pm`
            }
            return time - 12 + 'pm'
        } else if (time <= 12) {
            if (time < 10) {
                return `${time}am`
            }
            return `${time}am`
        }
    }

    const convertDay = (day) => {
        switch (day) {
            case 0:
                return 'Mon'
            case 1:
                return 'Tue'
            case 2:
                return 'Wed'
            case 3:
                return 'Thu'
            case 4:
                return 'Fri'
            case 5:
                return 'Sat'
            case 6:
                return 'Sun'
        }
    }

    return (
            <View style = {styles.container}>
                <FlatList
                    data = {data}
                    keyExtractor = {(day) => day.day + day.end}
                    renderItem = {({ item }) => {
                        return <Text>{`${convertDay(item.day)}: ${convertTime(item.start.substr(0, 2)).substr(0, 2)}:${item.start.substr(2)}${convertTime(item.start.substr(0, 2)).substr(2)} - ${convertTime(item.end.substr(0, 2)).substr(0, 2)}:${item.end.substr(2)}${convertTime(item.end.substr(0, 2)).substr(2)}`}</Text>
                    }}
                />
                <Text style = {styles.contact}>Contact: {contact}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    contact: {
        marginTop: 15
    }
})

export default MoreInfoScreen