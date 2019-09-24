import React, {Component} from "react"
import { StyleSheet, TextInPut, View} from "react-native"
import {Container, Content, Card, CardItem, Body, Button, List, ListItem, Text} from "native-base"


import { data } from "../src/UnlimitedArrayWorks"

const styles = StyleSheet.create({
  spacing:{
    padding: 10,

  },

  back: {
    backgroundColor: '#dfdfdf',
  },

  buttonColor: {
    backgroundColor: '#88d9fd',

  }

})



//all of the buttons for the various categories of items in game here
export default class HomeScreen extends Component{
  render(){
    return(
      <Container style={styles.back}>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Where do you want to search?</Text>
              </Body>
            </CardItem>
          </Card>

          <List
              dataArray={data.categories}
              renderRow={(category, _, index)=>
                <ListItem>
                <Button full style={styles.buttonColor}
                  onPress={() =>
                  this.props.navigation.navigate('Select', {value: category.value})}>
                    <Text> {category.name} </Text>
                </Button>
                </ListItem>
              }>
            </List>
        </Content>
      </Container>
    )
  }
}
