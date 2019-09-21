import React, { Component } from "react";
import { Container, Body, Right, Title ,Tab, Tabs, Header, Left, TabHeading, Text} from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {styles} from "../config/styles";

import TopNewsScreen from './TopNewsScreen';
import LatestNewsScreen from './LatestNewsScreen';

export default class NewsScreen extends Component {
    static navigationOptions = {
        header: null 
    }
    
    render(){
        return(
            <Container>
                <Header hasTabs style={styles.header}>
                    <Left>     
                        <FontAwesome name={"diamond"} size={20} color="#FFFFFF"/>                   
                    </Left>
                    <Body>
                        <Title> News </Title>
                    </Body>
                    <Right>
                        <FontAwesome name={"diamond"} size={20} color="#FFFFFF"/>                   
                    </Right>
                </Header>

                <Tabs locked>
                    <Tab style={styles.tab} heading={<TabHeading style={styles.tabheading}><FontAwesome name={"newspaper-o"} size={20} color="#FFFFFF"/><Text>Latest News</Text></TabHeading>}>                        
                        <TopNewsScreen navigation={this.props.navigation}/>
                    </Tab>
                    <Tab style={styles.tab} heading={<TabHeading style={styles.tabheading}><FontAwesome name={"calendar"} size={20} color="#FFFFFF"/><Text>History</Text></TabHeading>}>                        
                        <LatestNewsScreen navigation={this.props.navigation}/>
                    </Tab>                    
                </Tabs>
            </Container>
        );
    }
}


