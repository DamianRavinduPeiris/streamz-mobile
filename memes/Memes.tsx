import {ScrollView,View,Text,StyleSheet,
Image,Button,} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaperProvider } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function Memes() {
  const [memeURL, setMemeURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await axios.get("https://meme-api.com/gimme");
        setMemeURL(response.data.url); // Assuming the API returns an object with a URL property
        setLoading(false);

        console.log("response", response.data);
      } catch (error) {
        console.error("Failed to fetch meme:", error);
      }
    };

    fetchMeme();
  }, []);
  return (
    <ScrollView>
       <PaperProvider>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "Black",
              textAlign: "center",
              margin: 50,
              fontFamily: "sans-serif",
            }}
          >
            Meme of the day!
          </Text>
          {loading ? (
            <ActivityIndicator
              style={{
                margin: 50,
              }}
              size="large"
              animating={true}
              color={MD2Colors.pinkA200}
            />
          ) : null}
          <Image
            source={{ uri: memeURL }}
            style={{ width: 400, height: 300 }}
          />
          <View style={{ margin: 50 }}>
            <Button
              title="Refresh."
              color={"green"}
              onPress={() => {
                alert("Refreshing...");
              }}
            />
          </View>
        </View>
      </PaperProvider>
      
    </ScrollView>
  );
  
}
const styles = StyleSheet.create({
  container: {
    fontFamily: "sans-serif",
    fontSize: 50,
    color: "white",
  },
});