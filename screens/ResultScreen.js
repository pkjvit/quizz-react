import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native'
import React, { useState }  from 'react'
import { useRoute } from '@react-navigation/native'
import HorizontalSeperator from '../components/HorizontalSeperator';
import AlertDialog from '../components/AlertDialog';

const ResultScreen = () => {
    const route = useRoute();
    const [showDialog, setShowDialog] = useState(false);
    

    return (
        <SafeAreaView
            style={{ backgroundColor: 'white', height: '100%' }}
        >
            
            <Text style={{ color: "#585858", fontSize: 20, fontWeight: "500", marginTop: 122, padding: 19 }}>Summary</Text>

            <FlatList data={route.params.answers} renderItem={({ item, i }) =>
            (
                <View>
                    <Text style={{ color: "#585858", fontSize: 16, fontWeight: "500", marginTop: 10, paddingVertical: 6, paddingHorizontal: 19 }}>{item.question}</Text>
                    <Text style={{ color: "#58585899", fontSize: 16, fontWeight: "400", paddingVertical: 6, paddingHorizontal: 19 }}>{item.answerSelected}</Text>
                </View>
            )} />

            <View style={styles.bottomView}>
                <HorizontalSeperator />
                <Pressable
                    onPress={() => {
                        {
                            setShowDialog(true)
                        }
                    }}
                    style={{
                        backgroundColor: "#4154AF",
                        padding: 10,
                        width: '50%',
                        margin: 19,
                        borderRadius: 4,
                        alignSelf: "flex-end"
                    }} >
                    <Text style={{ color: "white", textAlign: 'center', fontSize: 16, fontWeight: 500 }}>Submit</Text>
                </Pressable>

            </View>

            <View>
                {
                    showDialog?
                    (
                        <AlertDialog props = {{result:route.params.result}}/>
                    )
                    : null
                }
            </View>

        </SafeAreaView>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // Additional styling if needed
    }
})