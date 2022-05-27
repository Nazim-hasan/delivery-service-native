import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.customBackground}>
          <View style={styles.circle}>
            <Image
              style={{}}
              source={require("../../assets/D.png")}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={{ marginBottom: 40 }}>
            <Image
              style={styles.customImage}
              source={require("../../assets/Vector.png")}
            />
          </View>
          <Text style={styles.heading}>Non-Contact </Text>
          <Text style={[styles.heading, { marginBottom: 40 }]}>
            Deliveries{" "}
          </Text>
          <Text style={styles.painText}>
            When placing an order, select the option
          </Text>
          <Text style={styles.painText}>
            “Contactless delivery” and the courier will leave
          </Text>
          <Text style={styles.painText}>your order at the door.</Text>
          <Text style={{ marginBottom: 40 }}></Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Details");
            }}
          >
            <Text style={styles.customBtn}>Order Now</Text>
          </Pressable>
          <Text style={{ marginBottom: 40 }}></Text>
          <Text style={styles.painText}>DISMISS</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: "#A259FF",
    // backgroundColor: linear
    // background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  },
  container: {
    flex: 1,
    backgroundColor: "#A259FF",
  },
  container2: {
    flex: 1,
    backgroundColor: "#F6F5F5",
  },
  customBackground: {
    flex: 2,
    backgroundColor: "#A259FF",
    paddingTop: 20,
  },
  content: {
    flex: 5,
    height: 30,
    backgroundColor: "#F6F5F5",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#A259FF",
    borderTopWidth: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  circle: {
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#CDFFB6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circularImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Roboto-Bold",
    color: "#2D0C57",
    fontWeight: "700",
    fontSize: 40,
    marginHorizontal: 20,
  },
  painText: {
    fontFamily: "Roboto-Medium",
    color: "#9586A8",
    fontWeight: "400",
    fontSize: 15,
    marginHorizontal: 20,
  },
  customBtn: {
    backgroundColor: "#0BCE83",
    color: "#fff",
    paddingHorizontal: 140,
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden",
  },
});
