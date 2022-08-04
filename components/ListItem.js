import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../Constants';

const ListItem = ({ item, onSelected }) => {

    function getColor(userId) {
        var color;
        switch (userId % 2) {
            case 0:
                color = COLORS.accent;
                break;
            default:
                color = COLORS.grey;
                break;
        }
        return color;
    }

    return (
        <View style={styles.listItem}>
            <TouchableOpacity
            style={{...styles.container, backgroundColor: getColor(item.id)}}
            onPress={() => onSelected(item)}
            >
                <View>
                    <Text>
                        {item.username}
                    </Text>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                    <Text>
                        {item.email}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
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

      listItem: {
        flex: 1,
        borderRadius: 6,
        marginHorizontal: "5%",
        marginVertical: "2%",
      },
      title: {
        fontFamily: 'QuicksandBold'
      }
})

export default ListItem