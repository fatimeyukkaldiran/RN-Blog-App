import { Button } from "native-base";
import React, {Component} from "react";
import { View, Text, FlatList,StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { activity, popular } from "../data/data";


export default class BlogHome extends Component {
 
  renderPosts = ({ item, index }) => {
    return (   
                <View style = {{marginTop:50}}>
                <Image  style = {styles.avatar} source = {{uri: item.image}}
                />
                <Text style = {{paddingHorizontal:10}}> {item.title}</Text> 
                </View>
        
          
    );
  };
  renderActivity = ({ item, index }) => {
    return (   
                <View style = {{marginTop:70}}>
               {/*  <Button title = {item.title} onPress={ () => {this.props.navigation.navigate('ArticleDetail',)}} > */}
                   <Image  style = {styles.avatar} source = {{uri: item.image}} />
                 
              <Text style = {{paddingHorizontal:10}}> {item.title}</Text>  
                </View>
        
          
    );
  };

  render() {
    return (
      <View >

        <Text style = {{fontSize:20, fontWeight:'900', color: 'purple', marginTop:40}}>Popular Articles </Text>
        <FlatList horizontal
          data={popular}
          renderItem={this.renderPosts}
          keyExtractor = {item => item.id.toString()}
         
        />
         <Text style = {{fontSize:20, fontWeight:'900', color: 'purple', marginTop:50}}>Popular Activities </Text>
             <FlatList horizontal
          data={activity}
          renderItem={this.renderActivity}
          keyExtractor = {item => item.id.toString()}
         
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
	avatar: {
		width: 300,
		height: 100,
    marginHorizontal: 10
	},
	
});