import React from "react";

import { styles } from "./styles";
import { Text, View } from "react-native";
import { loadFavorites } from "../../Services/favorites";
import { useFocusEffect } from "@react-navigation/native";

async function loadContent() {
 const response = await loadFavorites();
 return response;
}

export function Favorites() {
 useFocusEffect(() => {
  loadContent();
 });

 return (
  <View style={styles.content}>
   <Text style={styles.title}>Favorites</Text>
  </View>
 );
}
