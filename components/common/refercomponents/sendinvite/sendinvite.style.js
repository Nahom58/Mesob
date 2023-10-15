import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 135,
        backgroundColor: "#FFF",
        ...SHADOWS.xSmall,
        shadowColor: COLORS.gray2,
        marginBottom: SIZES.medium
    },
    giftImage: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: SIZES.medium
    },
    referTitle: {
        fontSize: SIZES.large,
        fontWeight: "400",
        color: COLORS.primary,
        textAlign: "center",
        marginTop: SIZES.medium
    },
    referMessage: {
        fontSize: SIZES.medium,
        fontWeight: "500",
        color: COLORS.gray,
        textAlign: "center",
        marginVertical: SIZES.medium
    },
    emailAddressContainer: {
        height: 48, 
        borderColor: COLORS.gray,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: SIZES.xSmall, 
        margin: SIZES.medium, 
        marginBottom: SIZES.large,
        padding: 15
    },
    sendInviteTouchableOpacity: {
        height: 48, 
        backgroundColor: "crimson",
        borderRadius: SIZES.xSmall, 
        marginHorizontal: SIZES.medium,
        alignItems: "center",
        marginBottom: SIZES.large,
    },
    sendInviteText: {
        fontSize: SIZES.Small,
        color: COLORS.white,
        fontWeight: "700",
        padding: 15
    },
    inviteFromContactTouchableOpacity: {
        height: 48, 
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "crimson",
        borderRadius: SIZES.xSmall, 
        marginHorizontal: SIZES.medium,
        alignItems: "center",
        marginBottom: SIZES.large,
    },
    inviteFromContactText: {
        fontSize: SIZES.Small,
        color: "crimson",
        fontWeight: "700",
        padding: 15
    }
});

export default styles;