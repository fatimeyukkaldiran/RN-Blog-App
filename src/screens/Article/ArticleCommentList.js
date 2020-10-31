import { Body, Button, Container, Content, Footer, FooterTab, Left, List, ListItem, Right, Thumbnail } from "native-base";
import React, {Component} from "react";
import { View, Text, FlatList,StyleSheet, Image } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { profile } from "../../data/data";



export default class ArticleCommentList extends Component {
  
  renderComments = ({ item, index }) => {
    return (  
      
      <List>
          
      <ListItem avatar>
           <Left>
             <Thumbnail source={{ uri:item.profilePic}} />
           </Left>
           <Body>
             <Text style = {{ color : '#F08080', fontSize: 18, fontWeight : 'bold' }}>{item.username}</Text>
             <Text note>{ item.comment}</Text>
           </Body>
           <Right>
             <Text note>3:43 pm</Text>
           </Right>
         </ListItem>
         </List>
       
      
        
    );
  };

  render() {
  
    return (
      <View >
    
        <FlatList style = {{marginTop:80}}
          data={profile}
          renderItem={this.renderComments}
          keyExtractor = {item => item.id.toString()}
         
        />
         <Footer style = {{}}>
          <FooterTab>
            <Button onPress={ () => 
                    {this.props.navigation.navigate('ArticleComment' ) }}>
              <Text>Write Comment</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
      
    );
  
  }
}
