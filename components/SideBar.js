import React from "react";
import { View, Text, StyleSheet, SchollView, ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


export default Sidebar = props => (
    <ScrollView>
        <ImageBackground
            source={require("../assets/wallpaper.jpg")}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image source={require("../assets/profile-pic.jpg")} style={styles.profile} />
            <Text style={styles.name}>Mário Guerra</Text>

            <View style={{flexDirection: "row"}}>
                <Text style={styles.followers}>734 Followers</Text>
                <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    }
});