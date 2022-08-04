import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import ProductItem from "../components/ProductItem"

const CategoryProductScreen = ({ navigation, route }) => {

    const [postsList, setPostsList] = useState([])

    const getPosts = async () => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + route.params.userId)
            .then(response => response.json())
            .then(posts => {
                setPostsList(posts)
            })
    }

    useEffect(() => {
        getPosts()
    }, []
    )

    const renderPostItem = ({item}) => (
        <ProductItem item={item}  />
    )

    return (
        <View style={styles.screen}>
            <FlatList
                data={postsList}
                renderItem={renderPostItem}
                keyExtractor={(item) => item.id}
                numColumns='2'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryProductScreen