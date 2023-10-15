import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./todaysmenucard.style";

const TodaysMenuCard = () => {
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
          Chicken Biryani
        </Text>

        <Text style={styles.restaurantName}>Kanak Indian Restaurant</Text>
        <Text style={styles.restaurantLocation}>Morning star mall, 2nd floor</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodaysMenuCard;