import React from 'react';

import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native';
import { ListDivider } from '../../Components/ListDivider/ListDivider';

import { useNaturalBeauty, NaturalBeautyProps } from '../../Global/Providers/NaturalBeautyProvider';

import { styles } from './styles';

export function Cart() {

    const { naturalBeauty } = useNaturalBeauty();

    function renderItem(item: NaturalBeautyProps) {
        return (
            <View style={{
                flexDirection: 'row',
                flex: 1
            }}
            >
                <Image
                    source={item.image}
                    style={styles.image}
                />

                <View>
                    <Text style={styles.product}>
                        {item.name}
                    </Text>
                    <Text>
                        {item.description}
                    </Text>
                    <Text style={styles.product}>
                        $ {item.price}
                    </Text>
                </View>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.content} >

                <Text style={styles.subtitle} >
                    Hello, Marilia!
                </Text>

                <Text style={styles.title} >
                    Cart
                </Text>

                <FlatList
                    data={naturalBeauty}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                />

                <Text style={styles.payment}>
                    Subtotal:
                </Text>

                <Text style={styles.payment}>
                    Delivery:
                </Text>

                <Text style={styles.payment}>
                    Total:
                </Text>

            </View>
        </View>
    );
}