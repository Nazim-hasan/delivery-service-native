import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function Details() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{ color: "#fff" }}>Details Screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ color: "#fff" }}>Go Back</Text>
      </Pressable> */}

      <View style={styles.imageBackground}>
        <Image
          source={require("../../assets/Media.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.customBackground}>
        <Text style={styles.headingText}>Boston Lettuce</Text>
        <View style={styles.pricing}>
          <Text style={styles.headingText}>1.10</Text>
          <Text style={styles.subHeading}> € / piece</Text>
        </View>
        <Text style={styles.rateText}>~ 150 gr / piece</Text>
        <Text />
        <Text style={styles.countryText}>Spain</Text>
        <Text style={styles.painText}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <View style={styles.buttons}>
          <Pressable style={styles.customHeartBtn}>
            <EvilIcons name="heart" size={24} color="#9586A8" />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <View style={styles.customBtn}>
              <Feather name="shopping-cart" size={24} color="#fff" />
              <Text style={{ color: "#fff", marginStart: 10 }}>
                ADD TO CART
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 2,
  },
  customBackground: {
    flex: 4,
    backgroundColor: "#F6F5F5",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headingText: {
    fontFamily: "Roboto-Bold",
    color: "#2D0C57",
    fontWeight: "700",
    fontSize: 30,
  },
  pricing: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  subHeading: {
    fontFamily: "Roboto-Regular",
    color: "#9586A8",
    fontWeight: "400",
    fontSize: 20,
  },
  rateText: {
    fontFamily: "Roboto-Medium",
    color: "#06BE77",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 15,
  },
  countryText: {
    fontFamily: "Roboto-Bold",
    color: "#2D0C57",
    fontSize: 20,
    marginBottom: 10,
  },
  painText: {
    fontFamily: "Roboto-Medium",
    color: "#9586A8",
    fontWeight: "400",
    fontSize: 15,
    paddingEnd: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  customHeartBtn: {
    backgroundColor: "#fff",
    color: "#9586A8",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D0E3",
    overflow: "hidden",
  },
  customBtn: {
    backgroundColor: "#0BCE83",
    color: "#fff",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
