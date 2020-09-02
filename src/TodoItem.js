import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function TodoItem(props) {
    return (
        <View style={styles.todo}>
            <Text>
                {props.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightblue',
        borderRadius: 5
    }
})