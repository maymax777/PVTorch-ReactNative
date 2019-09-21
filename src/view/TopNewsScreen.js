import React, { Component } from "react";
import {  View, Text} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../component/carousel/styles/SliderEntry.style';
import SliderEntry from '../component/carousel/components/SliderEntry';
import styles from '../component/carousel/styles/index.style';
import { ENTRIES1} from '../component/carousel/static/entries';


export default class TopNewsScreen extends Component {
    constructor(props){
        super(props);        
    }

    _renderItem ({item, index}) {
        const {navigation} = this.props;
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} navigation={navigation}/>;
    }

    renderCarousel (title, type) {        
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{title}</Text>                
                <Carousel
                  data={ENTRIES1}
                  firstItem={0}
                  renderItem={this._renderItem.bind(this)}
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
        const carousel = this.renderCarousel('Latest News', 'stack');
        
        return(
            <View>
                { carousel }
            </View>
        );
    }
}