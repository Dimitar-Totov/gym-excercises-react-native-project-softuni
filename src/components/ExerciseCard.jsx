import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { ArrowRight } from 'lucide-react-native';

export default function ExerciseCard({ title }) {
    return (
        <TouchableOpacity style={styles.exercise}>
            <Text>{title}</Text>
            <ArrowRight />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    exercise: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    }
})