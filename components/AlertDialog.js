import { Modal, StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import HorizontalSeperator from './HorizontalSeperator';
import { useNavigation } from '@react-navigation/native';

const AlertDialog = (props) => {
    const [result, setResult] = useState(props.props.result);
    const navigation = useNavigation()


    return (
        <View style={styles.container}>

            <Modal
                animationType="fade"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {
                            result ?
                                (
                                    <View style={{ alignItems: 'center', padding: 20 }}>
                                        <AntDesign name="check" size={36} color="green" />
                                        <Text style={{ marginTop: 12 }}>All answers were correct</Text>

                                    </View>
                                )
                                :

                                (
                                    <View style={{ alignItems: 'center', padding: 20 }}>
                                        <AntDesign name="close" size={36} color="red" />
                                        <Text style={{ marginTop: 12 }}>Some answers were wrong</Text>

                                    </View>

                                )
                        }

                        <View>
                            <HorizontalSeperator />
                        </View>


                        <Pressable
                            onPress={() => {
                                {
                                    // closeDialog();
                                    navigation.navigate("Home");
                                }
                            }}
                            style={{
                                width: '50%',
                                margin: 8,
                                alignSelf: "center"
                            }} >
                            <Text style={{ color: "#303E9F", textAlign: 'center', fontWeight: 500 }}>Proceed</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default AlertDialog

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(256, 256, 256, 0.6)',
    },
    modalContent: {
        backgroundColor: 'white',

        borderRadius: 12,
        borderColor: '#c5c5c5',
        borderWidth: 1,
    },
});