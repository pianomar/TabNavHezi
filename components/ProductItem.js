import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const ProductItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelected(item)} >
            <View>
                <Text style={styles.postTitle}>
                    {item.title}
                </Text>
                <Text>
                    {item.body}
                </Text>
                <Text style={styles.postUserId}>
                    {item.userId}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        width: '45%',
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1.0,
        shadowRadius: 10,

        elevation: 6,
    },

    postUserId: {
        color: '#e3e3e3'
    },
    postTitle: {
        fontFamily: 'QuicksandBold',
        fontSize: 16
    }
})

export default ProductItem