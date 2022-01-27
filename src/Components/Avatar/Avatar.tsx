import React from 'react';

import { Image } from 'react-native';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <Image
            source={{ uri: urlImage }}
            style={{
                borderRadius: 400,
                alignSelf: 'center',
                marginLeft: 120,
                height: 70,
                width: 70,
            }}
        />
    )
}