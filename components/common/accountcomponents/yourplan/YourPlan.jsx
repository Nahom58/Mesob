import { Text, View } from "react-native";
import styles from "./yourplan.style";


const YourPlan = () => { 
    return (
        <View style={styles.container} > 
            <Text style={styles.title}>
                YOUR PLAN
            </Text>
            <Text style={styles.lunch}>
                Lunch
            </Text>
            <View style={styles.yourPlanContent}>
                <Text style={styles.creditsRemaining}>
                    87 of 151 credits remaining
                </Text>
                <Text style={styles.daysLeft}>
                    15 days left
                </Text>
            </View>
          </View>
    )
};

export default YourPlan;