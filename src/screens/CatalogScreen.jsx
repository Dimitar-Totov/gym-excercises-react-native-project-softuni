import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { X } from 'lucide-react-native';

export default function CatalogScreen() {
    const [text, setText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TextInput style={styles.search} value={text} onChangeText={setText} placeholder='Search about some exercise' />
                        {text ?
                            <TouchableOpacity style={styles.clearInput} hitSlop={10} onPress={() => setText('')}>
                                <X />
                            </TouchableOpacity>
                            : ''
                        }
                    </View>
                    <View style={styles.exercise}>
                        <Text>Bench Press</Text>
                    </View>
                    <View style={styles.exercise}>
                        <Text>Pull Up</Text>
                    </View>
                    <View style={styles.exercise}>
                        <Text>Squat</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    search: {
        backgroundColor: 'white',
        width: '92%',
        height: 45,
        marginBottom: 25,
        paddingLeft: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    clearInput: {
        position: 'absolute',
        top: 11,
        right: 30,
    }
})