import React, { Component } from "react";
import {  View, Text, TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../component/carousel/styles/SliderEntry.style';
import SliderEntry from '../component/carousel/components/SliderEntry';
import styles from '../component/carousel/styles/index.style';
import {styles as styles2} from "../config/styles";

import { ENTRIES1} from '../component/carousel/static/entries';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Container, Body, Right, Title ,Header, Left} from 'native-base';


export default class NewsListScreen extends Component {
    static navigationOptions = {
        header: null 
    }
    nav=null;

    constructor(props){
        super(props);                
        nav = this.props.navigation;        
    }

    _renderItem ({item, index}) {        
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} navigation={nav} />
    }

    renderCarousel (title, type) {        
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{title}</Text>                
                <Carousel
                  data={ENTRIES1}
                  firstItem={0}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}                  
                  layout={type}
                  loop={false}                  
                />
            </View>
        );
    }
   
    render(){
        const carousel = this.renderCarousel('News', 'stack');
        
        return(
            <Container style={styles2.container}>
                <Header style={styles2.header}>
                    <Left>     
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <FontAwesome name={"chevron-left"} size={20} color="#FFFFFF"/>                   
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title> 10/10/2019 </Title>
                    </Body>
                    <Right>
                        <FontAwesome name={"diamond"} size={20} color="#FFFFFF"/>                   
                    </Right>
                </Header>

                <View>
                    { carousel }
                </View>
            </Container>
        );
    }
}

/*

*/