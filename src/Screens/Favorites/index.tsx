import React, { useEffect, useState } from "react";

import { styles } from "./styles";
import { Text, View } from "react-native";
import { favoriteProducts, loadFavorites } from "../../Services/favorites";
import { useNaturalBeauty } from "../../Global/Providers/NaturalBeautyProvider";
import { ProductCard } from "../../Components/ProductCard";

export function Favorites() {
 const { naturalBeauty } = useNaturalBeauty();
 const [favorites, setFavorites] = useState<string[]>([]);
 const [favoritesContent, setFavoritesContent] = useState<any[]>([]);

 async function favoriteProduct(data: string) {
  try {
   return await favoriteProducts(data);
  } catch (error) {
   console.error(error);
  }
 }

 async function getFavorites() {
  const response: string[] = await loadFavorites();
  if (Array.isArray(response)) {
   setFavorites(response);
  } else {
   console.error("Unexpected response format:", response);
  }
 }

 function loadingContent() {
  const commonObjects = naturalBeauty.filter((obj) =>
   favorites.some((id) => id === obj.id)
  );
  setFavoritesContent(commonObjects);
 }

 useEffect(() => {
  getFavorites();
  loadingContent();
 }, []);

 return (
  <View style={styles.content}>
   <Text style={styles.title}>Favorites</Text>
   {favoritesContent.map((fav) => (
    <ProductCard item={fav} handlefavorite={() => favoriteProduct(fav.id)} />
   ))}
  </View>
 );
}
