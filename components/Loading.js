import React from "react";
import {Text, StyleSheet, View, StatusBar} from "react-native";

export default function Loading () {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Text style={styles.title}>Получение прогноза...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 12
    }
})
