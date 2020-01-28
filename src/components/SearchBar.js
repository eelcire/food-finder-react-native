import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style = {styles.background}>
            <Feather name = "search" style = {styles.icon} />
            <TextInput
                style = {styles.input}
                placeholder = "Search"
                value = {term}
                onChangeText = {onTermChange}
                autoCapitalize = "none"
                autoCorrect = {false}
                onEndEditing = {onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar