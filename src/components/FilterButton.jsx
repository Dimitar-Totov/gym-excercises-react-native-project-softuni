import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function FilterButton({ label, value, selected, onPress }) {
    const isActive = selected === value;

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isActive && styles.buttonActive
            ]}
            onPress={() => onPress(value)}
        >
            <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#bbbaba",
    },
    buttonActive: {
        backgroundColor: "#21c927",
    },
    buttonText: {
        color: "#333",
    },
    buttonTextActive: {
        color: "#fff",
        fontWeight: "bold",
    },
    content: {
        marginTop: 20,
    }
})
