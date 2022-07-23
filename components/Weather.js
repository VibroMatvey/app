import React from "react";
import propTypes from 'prop-types';
import {Text, StyleSheet, View, StatusBar} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const WeatherOptions = {
    Rain: {
        iconName: 'rainy',
        gradient: ['#757f9a', '#d7dde8'],
        title: 'Дождь'
    },
    Snow: {
        iconName: 'snow',
        gradient: ['#403B4A', '#E7E9BB'],
        title: 'Снег'
    },
    Clouds: {
        iconName: 'cloud',
        gradient: ['#bdc3c7', '#2c3e50'],
        title: 'Облачно'
    },
    Thunderstorm: {
        iconName: 'thunderstorm',
        gradient: ['#536976', '#292E49'],
        title: 'Гроза'
    },
    Drizzle: {
        iconName: 'cloud-drizzle',
        gradient: ['#2980b9', '#2c3e50'],
        title: 'Дождик'
    },
    Dust: {
        iconName: 'eye-off',
        gradient: ['#6D6027', '#D3CBB8'],
        title: 'Пыльно'
    },
    Haze: {
        iconName: 'eye-off',
        gradient: ['#16222A', '#3A6073'],
        title: 'Туман'
    },
    Mist: {
        iconName: 'eye-off',
        gradient: ['#16222A', '#3A6073'],
        title: 'Туман'
    },
    Clear: {
        iconName: 'sunny',
        gradient: ['#CAC531', '#F3F9A7'],
        title: 'Солнечно'
    },
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

export default function Weather ({temp, condition}) {
    return (
            <LinearGradient
                colors={WeatherOptions[condition].gradient}
                style={styles.main}>
                <StatusBar barStyle="light-content" />
                <View style={styles.title__container}>
                    <Text style={styles.title}>Текущий прогноз погоды</Text>
                </View>
                <View style={styles.temp__container}>
                    <View>
                        <Ionicons name={WeatherOptions[condition].iconName} size={90} color='#fff'/>
                        <Text style={styles.temp}>{temp} °С</Text>
                    </View>
                    <View style={styles.condition__container}>
                        <Text style={styles.condition}>{WeatherOptions[condition].title}</Text>
                    </View>
                </View>
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    temp: {
        fontSize: 32,
        width: '100%',
        color: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        width: '100%',
        color: '#fff'
    },
    title__container: {
        flex: 1,
        //backgroundColor: 'red',
        //justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        paddingVertical: 50
    },
    temp__container: {
        flex: 2,
        //backgroundColor: 'green',
        //justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    condition: {
        fontSize: 20,
        width: '100%',
        color: '#fff'
    },
    condition__container: {
        marginTop: '10%'
    },

})