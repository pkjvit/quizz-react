import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import questions from '../data/questions'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import HorizontalSeperator from '../components/HorizontalSeperator';


const QuizzScreen = () => {
    const navigation = useNavigation()
    const data = questions;
    const currentIndex = 0;
    // Answers status
    const [answerStatus, setAnswerStatus] = useState(null);

    // Result status
    const [resultStatus, setResultStatus] = useState(null);

    // Answer Selected
    const [answerSelected, setanswerSelected] = useState(null);

    // Answers
    const [answers, setAnswers] = useState([]);

    // Index
    const [index, setIndex] = useState(0);

    // selected answer index
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

    const currentQuestion = data[index];

    console.log(currentQuestion)

    useEffect(() => {
        if (selectedAnswerIndex !== null) {
            const result = (selectedAnswerIndex === currentQuestion.correctAnswerIndex)
            setResultStatus(resultStatus == null ? result : result && resultStatus)
            answers.push({ question: currentQuestion.question, answerSelected: answerSelected, answerStatus: result })
        }

    }, [selectedAnswerIndex])

    useEffect(() => {
        setSelectedAnswerIndex(null);
        setanswerSelected(null);
        setAnswerStatus(null);
    }, [currentQuestion]
    )

    useEffect(() => {
        if (index + 1 > data.length) {
            navigation.navigate("Result", {
                answers: answers,
                result: resultStatus
            })
        }
    }, [currentQuestion])




    return (
        <SafeAreaView
            style={{ backgroundColor: 'white', height: '100%' }}
        >
            <Text style={{ color: "#585858", fontSize: 16, fontWeight: "500", marginTop: 122, padding: 19 }}>{currentQuestion?.question}</Text>
            <View style={{ margin: 9 }}>
                {currentQuestion?.options.map((option, index) => (
                    <View>
                        <Pressable
                            onPress={() => {
                                setanswerSelected(option.answer)
                                setSelectedAnswerIndex(index)
                            }}
                            style={
                                selectedAnswerIndex !== null && selectedAnswerIndex === index ?
                                    {

                                        backgroundColor: '#4154AF',
                                        padding: 10,
                                        margin: 10,
                                        borderRadius: 2,
                                    }
                                    : {

                                        backgroundColor: '#5858581A',
                                        padding: 10,
                                        margin: 10,
                                        borderRadius: 2,
                                    }
                            }>
                            <Text style={
                                selectedAnswerIndex !== null && selectedAnswerIndex === index ?
                                    {
                                        textAlign: 'center',
                                        color: 'white',
                                    }
                                    : {
                                        textAlign: 'center',
                                        color: '#585858',
                                    }
                            }>{option.answer}</Text>
                        </Pressable>
                    </View>
                ))}


            </View>

            <View style={styles.bottomView}>
                <HorizontalSeperator />
                {answerSelected === null ? null : (
                    <Pressable
                        onPress={() => {
                            {
                                currentIndex + 1 >= questions.length ?
                                    navigation.navigate("Results", {
                                        answers: answers,
                                    }) :
                                    setIndex(index + 1)
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
                        <Text style={{ color: "white", textAlign: 'center', fontSize: 16, fontWeight: 500 }}>Next</Text>
                    </Pressable>
                )}
            </View>

        </SafeAreaView>
    )
}

export default QuizzScreen

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