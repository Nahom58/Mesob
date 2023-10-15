import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 0,
    borderRadius: SIZES.xSmall,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin: SIZES.medium,
    marginBottom: 1,
    marginTop: 15,
  },
  logoContainer: {
    width: 130,
    height: 130,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "95%",
    height: "95%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  foodName: {
    fontSize: SIZES.medium,
    fontWeight: "700",
    color: "crimson",
  },
  restaurantName: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  restaurantLocation: {
    fontSize: SIZES.small + 1,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;