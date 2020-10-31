import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem, View } from 'native-base';
import React from 'react';
import { Image, Dimensions, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('screen');

export default function ActivityDetail ( props) {
        const {description,image, likes,readtime, title, topic,comment } = props.route.params;
  
        
        return (
           
            <Container>
                <Content>
                <Header transparent/>
                <Card>
              <CardItem header>
              <Left>
                <Text note >{topic} </Text>
                </Left>
               
                <Right>
                <Text note >{readtime} </Text> 
                </Right>
              </CardItem>
  
              <CardItem header>
              <Text style = {{color: 'purple', fontSize:20}}>{title}</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source ={{uri:image} } style={{height: 250, width: null, flex: 1, }}/>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {{marginTop: 20}}>{description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style = {{width: width, height: null, padding: 10}}>
              <Left> 

                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text style={{ fontSize: 12 }}>{likes} likes</Text>
                </Button>
              </Left>
              
              <Body>
          
                <Button  transparent >
                  <Icon  active name="chatbubbles" />
                  <Text onPress={ () => 
                    {props.navigation.navigate('ActivityCommentList' ) }}
                    style={{ fontSize: 12 }}>{comment} Comments</Text>
                    
                </Button>
              </Body>
              <Right>
                <Text note style={{ fontSize: 12 }}>shared 11h ago</Text>
              </Right>
            </CardItem>
                    </Card>

                </Content>
            </Container >

      
      
        ) 
             
  
       
    }









