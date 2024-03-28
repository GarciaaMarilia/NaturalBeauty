import AsyncStorage from "@react-native-async-storage/async-storage";

const FAST_ACESS_STORAGE_KEY = "@NaturalBeauty/favorites";

export async function favoriteProducts(data: string): Promise<void> {
 try {
  const response: string | null = await AsyncStorage.getItem(
   FAST_ACESS_STORAGE_KEY
  );

  let arr = response ? JSON.parse(response) : [];
  const jsonValue = JSON.stringify([...arr, data]);
  await AsyncStorage.setItem(FAST_ACESS_STORAGE_KEY, jsonValue);
 } catch (error) {
  console.error(error);
 }
}

export async function loadFavorites() {
 try {
  const response: string | null = await AsyncStorage.getItem(
   FAST_ACESS_STORAGE_KEY
  );

  return response ? JSON.parse(response) : [];
 } catch (error) {
  console.error(error);
 }
}
