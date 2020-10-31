import React, {Component} from 'react';
import {Dimensions, Text, Image} from 'react-native';
import {Container, Content, Card, CardItem, Icon, Right, Body, Form, Item, Input, Left, Header, Button} from 'native-base';
const { height, width } = Dimensions.get('screen');
export default class BlogContact extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    };
  }
  render() {

    return (
        
        <Container>
            <Header transparent>
                   <Image style = {{height: 158, width: 400, marginTop:3}} source = {{uri: 'https://www.venusmuhendislik.com.tr/eng/images/contact-banner.jpeg' }}/>
                   
                </Header>
      <Content style={{
        marginTop: 75
      }}>
        {/* Icon sıkıntı var, yazım doğru ama ekleyince sayfa açılmıyor */}
        <Card>
          <CardItem>
          {/* <Icon active name="logo-googleplus" /> */}
            <Text>Googleplus: +Selim Yaman</Text>
            <Right>
              
            </Right>
          </CardItem>

          <CardItem>
            {/* <Icon active name="logo-facebook"/> */}
            <Text> Facebook: Selim.Yaman</Text>
            <Right>
             {/*  <Icon name="arrow-forward"/> */}
            </Right>
          </CardItem>
          <CardItem>
            {/* <Icon active name="logo-facebook"/> */}
            <Text> Email Adress: selim.yaman@gmail.com</Text>
            <Right>
             {/*  <Icon name="arrow-forward"/> */}
            </Right>
          </CardItem>
          <CardItem>
            {/* <Icon active name="logo-facebook"/> */}
            <Text> Mobile Phone : +905486985875</Text>
            <Right>
             {/*  <Icon name="arrow-forward"/> */}
            </Right>
          </CardItem>
          <CardItem>
            {/* <Icon active name="logo-twitter"/> */}
            <Text>Twitter: @activities</Text>
            <Right>
              {/* <Icon name="arrow-forward"/> */}
            </Right>
          </CardItem>
        </Card>
       
        <Form style = {{marginTop: 60, backgroundColor: '#7FFFD4'}}>
        <Left style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#FF7F50', fontSize: 25}}>
                            Contact Form
                        </Text>
                    </Left>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input keyboardType='email-address' placeholder="Email Adress" />
            </Item>
            <Item>
              <Input keyboardType='numeric' placeholder="Phone Number" />
            </Item>

          </Form>
          <Button   block danger onPress={ () => 
                    {this.props.navigation.navigate('Contact') }}>
                      <Text>Send</Text>
                    </Button>
       
      </Content>
      </Container>
    );
  }
}

module.export = BlogContact;