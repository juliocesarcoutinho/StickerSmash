import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Home Screen</Text>
            <Link href="/about">
                <Text style={styles.button}>Go to About</Text>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e"
    },
    text: {
        color: "#ffffff"
    },

    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#ffffff"
    }
})
