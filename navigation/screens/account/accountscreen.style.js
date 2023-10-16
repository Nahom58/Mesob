import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    touchableOpacity: {
        padding: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        marginBottom: SIZES.xSmall/4
    },
    text: {
        fontSize: SIZES.medium,
        fontWeight: "500",
        color: COLORS.secondary,
        textAlign: "left",
        flexGrow: SIZES.medium,
        marginHorizontal: SIZES.small,
    },
});

export default styles;