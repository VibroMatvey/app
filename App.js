import React from "react";
import { Alert } from "react-native";
import * as Location from 'expo-location';
import Loading  from "./components/Loading";
import Weather from "./components/Weather";
import axios from 'axios'

const API_KEY = '946b0fa72412a9203d44b58c4d02e414';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false, 
      temp: temp,
      condition: weather[0].main
    });
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение(', 'Предоставьте доступ к вашим геоданным')
    }
  }

  componentDidMount () {
    this.getLocation();
  }
  
  render () {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    )
  }
}