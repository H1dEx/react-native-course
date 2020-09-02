import React from 'react';
import {View, StyleSheet, Text} from "react-native";


export function Navbar(props) {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: '#222f79',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 21
    }
})