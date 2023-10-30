import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./todaysmenucard.style";

const TodaysMenuCard = (props) => {
  const { foodName, restaurantName, restaurantAddress } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          src={"https://static.toiimg.com/thumb/53096628.cms?imgsize=104874&width=800&height=800"}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.foodName} numberOfLines={1}>
          {foodName}
        </Text>

        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.restaurantLocation}>{restaurantAddress}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodaysMenuCard;