import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.text}>
            Welcome to the Home Screen!
          </Text>
        </View>
        <Text style={styles.footer}>Enjoy your stay!</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FC"
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    borderRadius: 90,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700"
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "700",
    marginBottom: 20
  }
});
export default HomeScreen;