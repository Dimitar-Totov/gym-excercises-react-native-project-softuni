import { useMemo, useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import * as data from '../../data.json'

export default function HomeScreen() {
    const [text, changeText] = useState('');
    // const filteredData = useMemo(() => data.exercises.filter(item => text === '' ? '' : item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())), [text]);

    return (
        <SafeAreaView>
            <View style={style.mainContainer}>
                <View>
                    <Text style={style.welcomeHeader}>Your goals start here. Let's crush them</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ height: 380, width: 380 }}>
                        <Image style={style.welcomeImage} source={require('../../assets/homescreen.png')} />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 25, width: '100%' }}>
                    <KeyboardAvoidingView
                        style={{ width: '100%', alignItems: 'center', flex: 1 }}
                        behavior={Platform.OS === "ios" ? "padding" : "padding"}
                    >
                        <TextInput onChangeText={changeText} value={text} placeholder='Search about some exercise' style={style.homescreenSearch} />
                    </KeyboardAvoidingView>
                    {/* {text ? <ExcercisesHomeScreen searchedText={filteredData} /> : <SearchExcerciseCards />} */}
                </View>
                {/* <PopularExcercises /> */}
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        marginTop: 10
    },
    welcomeHeader: {
        fontSize: 28,
        fontFamily: 'serif',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    homescreenSearch: {
        backgroundColor: '#EDEDED',
        width: '92%',
        marginBottom: 25,
        paddingLeft: 20,
        borderRadius: 20
    },
})