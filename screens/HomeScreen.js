import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Button } from "@react-native-material/core";
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation()


    return (<View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }}>



        <Pressable
            onPress={() =>
                navigation.navigate("Quiz")
            }
            style={{
                backgroundColor: '#5858581A',
                padding: 10,
                margin: 10,
                borderRadius: 2,
                width: 200,
            }}>
            <Text style={{ fontWeight: "600", textAlign: 'center' }}>Begin</Text>
        </Pressable>
    </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({}) 