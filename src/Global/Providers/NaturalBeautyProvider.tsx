import React, { createContext, useContext, useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";

export interface NaturalBeautyProps {
 id: string;
 name: string;
 description: string;
 image: ImageSourcePropType;
 price: number;
}

interface NaturalBeautyContextData {
 naturalBeauty: NaturalBeautyProps[];
}

export const NaturalBeautyContext = createContext<NaturalBeautyContextData>(
 {} as NaturalBeautyContextData
);

export const NaturalBeautyProvider: React.FC = ({ children }) => {
 const [naturalBeauty, setNaturalBeauty] = useState<NaturalBeautyProps[]>([]);

 useEffect(() => {
  setNaturalBeauty([
   {
    id: "001",
    name: "Lipstick",
    description: "Lipstick Dior",
    price: 8,
    image: {
     uri: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw88c4f783/images/Color%20BR/DIOR/rouge/P1_3348901570060_1500px.jpg?sw=556&sh=680&sm=fit",
    },
   },
   {
    id: "002",
    name: "Sauvage",
    description: "Fragrance Dior",
    price: 80,
    image: {
     uri: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwbd925da8/images/hi-res-BR/p1_60ml_3348901368254_1500px_1.jpg?sw=556&sh=680&sm=fit",
    },
   },
   {
    id: "003",
    name: "Lipstick",
    description: "Lipstick Dior",
    price: 11,
    image: {
     uri: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwc1727610/images/hi-res-BR/3348901452489_1500px.jpg?sw=556&sh=680&sm=fit",
    },
   },
   {
    id: "004",
    name: "Sauvage",
    description: "Fragrance Dior",
    price: 80,
    image: {
     uri: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwbd925da8/images/hi-res-BR/p1_60ml_3348901368254_1500px_1.jpg?sw=556&sh=680&sm=fit",
    },
   },
   {
    id: "005",
    name: "Sauvage",
    description: "Fragrance Dior",
    price: 80,
    image: {
     uri: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwbd925da8/images/hi-res-BR/p1_60ml_3348901368254_1500px_1.jpg?sw=556&sh=680&sm=fit",
    },
   },
   {
    id: "006",
    name: "Sauvage",
    description: "Fragrance Dior",
    price: 80,
    image: {
     uri: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwbd925da8/images/hi-res-BR/p1_60ml_3348901368254_1500px_1.jpg?sw=556&sh=680&sm=fit",
    },
   },
  ]);
 }, []);

 return (
  <NaturalBeautyContext.Provider value={{ naturalBeauty }}>
   {children}
  </NaturalBeautyContext.Provider>
 );
};

export function useNaturalBeauty(): NaturalBeautyContextData {
 const context = useContext(NaturalBeautyContext);
 if (!context) {
  throw new Error("useAuth must be used within an AuthProvider");
 }
 return context;
}
