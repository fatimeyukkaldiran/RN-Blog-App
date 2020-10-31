import { Button, Container, Content, Header} from 'native-base';
import React, { Component } from 'react'
import { Text, View } from 'react-native'


export class ArticleComment extends Component {
    CommentFunc = (id) => {
        let body = {
            id: id,
            token: "benim tokenim"
        }
        fetch("url", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                
            })
            .catch(err => {
                alert("WARNING", err);
            });
        alert("Your comment is added");
    }
   
    render() {
        
        return (
            <Container>
        <Header />
        <Content padder>
        <Button
            onPress={() => {this.CommentFunc(1)}
}
          >
            <Text>Add Comment</Text>
          </Button>
          </Content>
          </Container>
        )
    }
}

export default ArticleComment
