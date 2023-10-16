import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 90,
        backgroundColor: "#FFF",
        ...SHADOWS.xSmall,
        shadowColor: COLORS.gray2,
        marginBottom: SIZES.small
    },
    profileImage: {
        width: 100,
        height: 100,
        backgroundColor: "whitesmoke",
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: SIZES.small
    },
    name: {
        fontSize: SIZES.large,
        fontWeight: "400",
        color: COLORS.primary,
        textAlign: "center",
        marginTop: SIZES.small
    },
    city: {
        fontSize: SIZES.small + 2,
        fontWeight: "500",
        color: COLORS.gray,
        textAlign: "center",
        marginVertical: SIZES.xSmall
    }
});


export default styles;