import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PRODUCTS_SCREEN } from "../Constants";
import { useEffect } from 'react';
import ListItem from "../components/ListItem";

const CategoriesScreen = ({ navigation }) => {

    const [itemList, setItemList] = useState([])

    const getUsers = async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                setItemList(users)
            })
    }

    useEffect(() => {
        getUsers()
    }, []
    )

    const handleSelectedUser = (item) => {
        navigation.navigate(PRODUCTS_SCREEN, {
            userId: item.id,
            name: item.name
        });
    }

    const renderListItem = ({ item }) => (
        <ListItem item={item} onSelected={handleSelectedUser} />
    );

    return (
        <FlatList
            data={itemList}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen