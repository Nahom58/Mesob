import { Image, Text, View } from "react-native";
import styles from "./profile.style";
import { auth } from "../../../../firebase/config";


const Profile = () => { 
    return (
        <View style={styles.container} > 
            <Image
                src={"https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png"}
                resizeMode="contain"
                style={styles.profileImage}
            />
            <Text style={styles.name}>
                {auth.currentUser.displayName}
            </Text>
            <Text style={styles.city}>
                Addis Ababa, Ethiopia
            </Text>
          </View>
    )
};

export default Profile;