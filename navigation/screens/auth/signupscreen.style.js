import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#e8e8e8",
        color: "black",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button: {
        backgroundColor: "#f15454",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "transparent",
        marginTop: 10,
        borderWidth: 2,
        borderColor: "#f15454"
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutlineText: {
        color: "#f15454",
        fontWeight: "700",
        fontSize: 16
    }

});

export default styles;