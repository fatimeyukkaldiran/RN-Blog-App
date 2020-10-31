import { Body, Button, Container, Content, Footer, FooterTab, Icon, Left, List, ListItem, Right, Thumbnail } from "native-base";
import React, {Component} from "react";
import { View, Text, FlatList} from "react-native";
import { profile } from "../../data/data";



export default class ActivityCommentList extends Component {
  
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
         <Footer>
          <FooterTab>
            <Button onPress={ () => 
                    {this.props.navigation.navigate('ActivityComment' ) }}>
                    
              <Text>Write Comment</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
      
    );
  
  }
}
