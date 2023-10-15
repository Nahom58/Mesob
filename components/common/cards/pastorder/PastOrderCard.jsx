import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./pastordercard.style";

const PastOrderCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          src={"https://injeraforyou.com/wp-content/uploads/2016/03/cropped-cropped-injera14-2.png"}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          Chicken Biryani
        </Text>

        <Text style={styles.jobType}>Kanak Indian Restaurant</Text>
        <Text style={styles.jobType}>October 6, 2023</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PastOrderCard;