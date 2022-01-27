import React from 'react';

import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native';

import { useNaturalBeauty, NaturalBeautyProps } from '../../Global/Providers/NaturalBeautyProvider';

import { ListDivider } from '../../Components/ListDivider/ListDivider';
import { Avatar } from '../../Components/Avatar/Avatar';

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
        <View style={styles.content} >
            <View style={{ flexDirection: 'row' }}>

                <View>
                    <Text style={styles.subtitle} >
                        Hello, Marilia!
                    </Text>

                    <Text style={styles.title} >
                        Cart
                    </Text>
                </View>

                <Avatar
                    urlImage="https://github.com/Garciaamarilia.png"
                />
            </View>

            <FlatList
                data={naturalBeauty}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
            />

            <Text style={styles.payment}>
                Subtotal:           $
            </Text>

            <Text style={styles.payment}>
                Delivery:            $
            </Text>

            <Text style={styles.payment}>
                Total:                    $
            </Text>

        </View>
    );
}