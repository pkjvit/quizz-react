import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorizontalSeperator = () => {
    return <View style={styles.separator} />;
};

export default HorizontalSeperator

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#5858581A',
    }
})