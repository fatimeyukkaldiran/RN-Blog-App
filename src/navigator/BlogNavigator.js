import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ActivityList from '../screens/Activity/ActivityList';
import BlogHome from '../screens/BlogHome';
import ArticleList from '../screens/Article/ArticleList';
import BlogContact from '../screens/BlogContact';
import ArticleDetail from '../screens/Article/ArticleDetail';
import ActivityDetail from '../screens/Activity/ActivityDetail';
import ArticleCommentList from '../screens/Article/ArticleCommentList';
import ArticleComment from '../screens/Article/ArticleComment';
import ActivityCommentList from '../screens/Activity/ActivityCommentList'
import ActivityComment from '../screens/Activity/ActivityComment'
import { Icon } from 'native-base';
import { popular } from '../data/data';

const RootStack = createStackNavigator();
const TabStack = createBottomTabNavigator();


export class BlogNavigator extends Component {

    BottomChecker = () => {
        return (
            <TabStack.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: '#000',
                }}>
                <TabStack.Screen popular = {popular}
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                        tabBarLabel: 'HomePage',
                        tabBarIcon: ({ color, size }) => (
                            <Icon  name="thumbs-up" color={color} size={25} />
                        ),
                     
                    }}
                    name="Home"
                    component={BlogHome}
                />
                <TabStack.Screen
                
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                        tabBarLabel: 'Activity',
                        tabBarIcon: ({ color, size }) => (
                            <Icon  active name="home" color={color} size={25} />
                        ),
                            
                        
                    }}
                    
                    name="ActivityList"
                    component={ActivityList}
                />
                <TabStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                        tabBarLabel: 'Article',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="receipt" color={color} size={size} />
                        ),
                    }}
                    name="ArticleList"
                    component={ArticleList}
                />
                <TabStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="person" color={color} size={size} />
                        ),
                    }}
                    
                    name="Contact"
                    component={BlogContact}
                />
                
            </TabStack.Navigator>
        )
    }
    render() {
        return (
            <RootStack.Navigator>
                <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="Root"
                    component={this.BottomChecker}
                />
                <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                        headerBackTitle: null,
                    }}
                    name="ArticleDetail"
                    component={ArticleDetail}
                />
                <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="ActivityDetail"
                    component={ActivityDetail}
                />
                      <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="ArticleCommentList"
                    component={ArticleCommentList}
                />
                   <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="ArticleComment"
                    component={ArticleComment}
                />
                   <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="ActivityCommentList"
                    component={ActivityCommentList}
                />
                       <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="ActivityComment"
                    component={ActivityComment}
                />
                               <RootStack.Screen
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true,
                    }}
                    name="Contact"
                    component={BlogContact}
                />

            </RootStack.Navigator>
            
        )
    }
}

export default BlogNavigator




 


