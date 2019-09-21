import {StyleSheet,Platform} from "react-native";
import {primary, primary_dark,primary_light} from './colors';

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;

export const styles = StyleSheet.create({
    header:{
        backgroundColor:primary,        
    },
    container:{
        backgroundColor:primary_light,        
    },
    content:{        
        width:'100%',
        height:'90%',
        alignItems:'center',
        justifyContent:'center',
    },

    tabheading:{        
        backgroundColor:primary_dark,
    },

    tab:{
        backgroundColor:primary_light,
    },

    image:{            
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius    
    },

    title: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        color: 'rgba(30, 35, 35, 0.75)',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    text: {
        marginTop: 5,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        color: 'rgba(30, 35, 35, 0.75)',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'justify'
    },
    date: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(3, 3, 3, 0.85)',
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'left'
    },
});
