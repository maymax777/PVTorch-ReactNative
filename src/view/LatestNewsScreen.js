import React, { Component } from "react";
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import BrickList from 'react-native-masonry-brick-list';
import {Fab, Icon} from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from 'react-native';

export default class LatestNewsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            //Just id (unique) and span (1,2,3, ...) is required
            data:[                
                {id: '1', name: "Beautiful and dramatic Antelope Canyon", span: 1, img_url: 'https://i.imgur.com/UYiroysl.jpg', date:'10/10/2019'},
                {id: '2', name: "Earlier this morning, NYC", span: 1, img_url: 'https://i.imgur.com/UPrs1EWl.jpg', date:'9/10/2019'},
                {id: '3', name: "White Pocket Sunset",span: 1,img_url: 'https://i.imgur.com/MABUbpDl.jpg', date:'8/10/2019'},
                {id: '4', name: "Acrocorinth, Greece", span: 1, img_url: 'https://i.imgur.com/KZsmUi2l.jpg', date:'7/10/2019'},
                {id: '5', name: "The lone tree, majestic landscape of New Zealand", span: 1, img_url: 'https://i.imgur.com/2nCt3Sbl.jpg', date:'6/10/2019'},
                {id: '6', name: "Middle Earth, Germany", span: 1, img_url: 'https://i.imgur.com/lceHsT6l.jpg', date:'5/10/2019'},
                {id: '7', name: "Beautiful and dramatic Antelope Canyon",  span: 1, img_url: 'https://i.imgur.com/UYiroysl.jpg', date:'4/10/2019'},
                {id: '8', name: "Earlier this morning, NYC",span: 1, img_url: 'https://i.imgur.com/UYiroysl.jpg', date:'3/10/2019'},
                {id: '9', name: "White Pocket Sunset",  span: 1, img_url: 'https://i.imgur.com/UPrs1EWl.jpg', date:'2/10/2019'},
                {id: '10', name: "The lone tree, majestic landscape of New Zealand", span: 1,img_url: 'https://i.imgur.com/MABUbpDl.jpg', date:'1/10/2019'},
                {id: '11', name: "Middle Earth, Germany", span: 1, img_url: 'https://i.imgur.com/KZsmUi2l.jpg', date:'10/9/2019'},
                {id: '12', name: "Acrocorinth, Greece", span: 1, img_url: 'https://i.imgur.com/2nCt3Sbl.jpg', date:'30/9/2019'},
                {id: '13', name: "Earlier this morning, NYC", span: 1, img_url: 'https://i.imgur.com/lceHsT6l.jpg', date:'29/9/2019'},
                {id: '14', name: "Beautiful and dramatic Antelope Canyon", span: 1, img_url: 'https://i.imgur.com/UYiroysl.jpg', date:'28/9/2019'},
                {id: '15', name: "The lone tree, majestic landscape of New Zealand", span: 1, img_url: 'https://i.imgur.com/UPrs1EWl.jpg', date:'27/9/2019'},
                {id: '16', name: "Earlier this morning, NYC", span: 1, img_url: 'https://i.imgur.com/lceHsT6l.jpg', date:'26/9/2019'},
            ],
        }
    }

    renderNextButton(){
        return(            
            <Fab            
            containerStyle={{ }}
            style={{ backgroundColor: '#6d4c41' }}
            position="bottomRight"
            >
                <FontAwesome name="chevron-right" />
            </Fab>
        );
    }
    renderPrevButton(){
        return(
            <Fab            
            containerStyle={{ }}
            style={{ backgroundColor: '#6d4c41' }}
            position="bottomLeft"
            >
                <FontAwesome name="chevron-left" />            
            </Fab>
        );
    }
    detailScreen = () => {
        this.props.navigation.navigate('NewsListScreen');
    }

    //RenderAnyItem
    renderView=(item)=>{        
        return(        
            <TouchableOpacity key={item.id} style={styles.card} onPress={this.detailScreen} >
                <ImageBackground source={{uri:item.img_url}} style={{width: '100%', height: '100%'}} resizeMode={'stretch'}>                
                    <Text style={styles.text} numberOfLines={1}>
                        {item.name}
                    </Text>                
                    <Text style={styles.text} numberOfLines={1}>
                        {item.date}
                    </Text>                
                </ImageBackground>
                
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View>
                {this.renderPrevButton()}
                {this.renderNextButton()}
                <BrickList
                    data = {this.state.data}
                    renderItem={(item)=>this.renderView(item)}
                    columns = {2}
                    
                />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    card:{
        margin: 2,
        borderRadius: 6,            
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        paddingHorizontal:5,
        backgroundColor:'rgba(156,120,108, 0.7)', 
        //backgroundColor:'#9c786c', 
        color:'#e8f5e9', 
        fontSize:18, 
        textAlign:'center', 
        fontWeight:'300', 
        fontStyle:'italic',
        justifyContent:'center'
    },
});
