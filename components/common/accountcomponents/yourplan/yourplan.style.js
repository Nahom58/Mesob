import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 30,
        backgroundColor: "#FFF",
        ...SHADOWS.small,
        shadowColor: COLORS.gray2,
        marginBottom: SIZES.small
    },
    title: {
        fontSize: SIZES.small + 3,
        fontWeight: "600",
        color: COLORS.gray,
        textAlign: "left",
        marginTop: SIZES.small
    },
    lunch: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: "crimson",
        textAlign: "left",
        marginTop: SIZES.xSmall
    },
    yourPlanContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.small
    },
    creditsRemaining: {
        fontSize: SIZES.medium,
        fontWeight: "400",
        color: COLORS.primary,
        textAlign: "center",
    },
    daysLeft: {
        fontSize: SIZES.small + 2,
        fontWeight: "400",
        color: COLORS.gray,
        textAlign: "center",
    }
});


export default styles;