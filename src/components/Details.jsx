import { Image, StyleSheet, Text, View, Dimensions, Platform, ScrollView } from "react-native";
const { width } = Dimensions.get("window");

import * as data from '../data/data.json'

export default function Details({ route }) {
    const { title } = route.params;
    const exercise = data.exercises.find(exercise => exercise.title == title);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.welcomeHeader}>{exercise.title}</Text>
                    <Image source={{ uri: exercise.imageUrl }} style={styles.exerciseImage} />
                    <View style={styles.infoSection}>
                        <Text style={{ lineHeight: 30, fontSize: 25, color: '#4f4c4c' }}>{exercise.description}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        alignItems: 'center'
    },
    welcomeHeader: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#656565',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    exerciseImage: {
        width: width,
        height: width,
        resizeMode: 'contain',
    },
    infoSection: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 15,
        borderRadius: 10
    }
})