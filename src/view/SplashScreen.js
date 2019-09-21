import React from 'react';
import { View, StyleSheet , Text, Image, Dimensions} from 'react-native';
//import Logo from '../assets/splash.png'

const SCREEN_DELAY = 2500;
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class SplashScreen extends React.Component<Props> {    
    static navigationOptions = {
        header: null
    }
    
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('NewsScreen') } , SCREEN_DELAY)
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
          this.props.navigation.navigate('NewsScreen');
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Hello</Text>
            <Image source={require('../asset/logo.png')}           
                style = {styles.logo}
                resizeMode={'stretch'}/>                                                                
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFill,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    logo:{
        width:screenWidth,
        height:screenHeight,
    },
});

