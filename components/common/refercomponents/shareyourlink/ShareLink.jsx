import { View, Text } from "react-native";
import styles from "./sharelink.style";
import IonIcons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";



const ShareLink = () => {
    return (
    <View style={styles.container} >  
        <Text style={styles.shareLinkTitle}>
            Share Your Link
        </Text>
        <Text style={styles.shareLinkMessage}>
            mesob.com/yohannesasfaw
        </Text>
        <View style={styles.copyLinkContainer}>
            <TouchableOpacity style={styles.copyLinkItem}>
                <IonIcons name={"chatbox-outline"} size={30} color={COLORS.primary} />
                <Text style={styles.copyLinkText}>
                    Text  
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.copyLinkItem}>
                <IonIcons name={"copy-outline"} size={30} color={COLORS.primary} />
                <Text style={styles.copyLinkText}>
                    Copy Link  
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.copyLinkItem}>
                <IonIcons name={"ellipsis-horizontal"} size={30} color={COLORS.primary} />
                <Text style={styles.copyLinkText}>
                    More   
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
 };

 export default ShareLink;