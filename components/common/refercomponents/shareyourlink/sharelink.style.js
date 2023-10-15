import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({ 
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: "#FFF",
        ...SHADOWS.xSmall,
        shadowColor: COLORS.gray2,
        marginBottom: SIZES.medium
    },
    shareLinkTitle: {
        fontSize: SIZES.medium + 1,
        fontWeight: "400",
        color: COLORS.primary,
        textAlign: "center"
    },
    shareLinkMessage: {
        fontSize: SIZES.medium - 2,
        fontWeight: "500",
        color: COLORS.gray,
        textAlign: "center",
    },
    copyLinkContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: SIZES.medium,
        paddingHorizontal: SIZES.xxLarge
    },
    copyLinkItem: {
        alignItems: "center",
    },
    copyLinkText: {
        fontSize: SIZES.small,
        fontWeight: "500",
        color: COLORS.gray,
        marginTop: SIZES.xSmall
    }
});

export default styles;