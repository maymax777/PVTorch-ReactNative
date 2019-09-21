import React, { Component } from "react";
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Body, Right, Title ,Tab, Tabs, Header, Left, TabHeading, Text, Content, View, Form} from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {styles} from "../config/styles";

const data = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        content: "Could it be that Tarzan was based on a real person? According to journalist Thomas Llewellan Jones in a 1959 article for Man's Adventure magazine, the 14th Earl of Streatham, William Charles Mildin, spent 15 years living in the wilds of Africa between 1868 and 1883.\n"
            +"Could it be that Tarzan was based on a real person? According to journalist Thomas Llewellan Jones in a 1959 article for Man's Adventure magazine, the 14th Earl of Streatham, William Charles Mildin, spent 15 years living in the wilds of Africa between 1868 and 1883.\n"
            +"Could it be that Tarzan was based on a real person? According to journalist Thomas Llewellan Jones in a 1959 article for Man's Adventure magazine, the 14th Earl of Streatham, William Charles Mildin, spent 15 years living in the wilds of Africa between 1868 and 1883.\n"
            +"Could it be that Tarzan was based on a real person? According to journalist Thomas Llewellan Jones in a 1959 article for Man's Adventure magazine, the 14th Earl of Streatham, William Charles Mildin, spent 15 years living in the wilds of Africa between 1868 and 1883.\n",
        date: '10/10/2019',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
];

export default class NewsDetailScreen extends Component {
    
    static navigationOptions = {
        header: null 
    }

    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>     
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <FontAwesome name={"chevron-left"} size={20} color="#FFFFFF"/>                   
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title> Details </Title>
                    </Body>
                    <Right>
                        <FontAwesome name={"diamond"} size={20} color="#FFFFFF"/>                   
                    </Right>
                </Header>
                <View style={styles.content}>
                    <View style={{width:'90%', height:'90%', backgroundColor:'rgba(222,222,222, 0.5)', borderRadius:8}}>                        
                        <Image source={{uri:data[0].illustration}} resizeMode={'stretch'} style={[styles.image, {height:'30%'}]}/>
                        <ScrollView style={{height:'70%'}}>                                
                            <Text style={styles.title}>{data[0].title}</Text>
                            <Text style={styles.date}><FontAwesome name={"clock-o"} size={14} />{data[0].date}</Text>
                            <Text style={styles.text}>{data[0].content}</Text>                            
                        </ScrollView>
                    </View>
                </View>
            </Container>
        );
    }
}
