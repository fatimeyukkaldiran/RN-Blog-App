import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import React, { Component } from 'react';
import { Image, Dimensions, ScrollView, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const { height, width } = Dimensions.get('screen');
import { activity } from '../../data/data';
export class ActivityList extends Component {


    /* map function, map in react native */
    /* flatlist yatay olması */
    render() {
        return (
            <Container>
                <Content>

                    <FlatList
                        style={{ flex: 1, width: width }}
                        data={activity}
                        renderItem={({ item }) => (this.renderItem(item))}
                        keyExtractor={item => item.id.toString()}
                        onEndReachedThreshold={0}
                        removeClippedSubviews={false}
                        />

                </Content>
            </Container >
        )
    }
 
    renderItem = (item) => {
        return <Card key={item.id + "b"}>

            <CardItem style={{ flexDirection: 'column' }}>
                <TouchableOpacity 
             onPress={ () => {this.props.navigation.navigate('ActivityDetail', 
             { description: item.description,
                likes: item.likes,
                readtime:item.readtime,
                image: item.image, 
                title: item.title,
                topic: item.topic,
                comment: item.commentCount
             }) }}
            >
            <Text style = {{color: 'blue',fontSize: 20, fontWeight:'bold'}}>{item.title}</Text>
         </TouchableOpacity>   

{/*                 <Text>
                    {item.postBody}
                </Text> */}
                <Image
                    source={{ uri: item.image }}
                    style={{ width: width, height: width }} />
                  
            </CardItem>
        </Card>
    }

}

export default ActivityList
