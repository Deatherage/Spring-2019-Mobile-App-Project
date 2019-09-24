import React, {Component} from "react"
import {Text, StyleSheet, Platform, View} from "react-native"
import {Container, Content, Card, CardItem, Body, Button, List, ListItem} from "native-base"





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

});





//all of the buttons for the various categories of items in game here
export default class SelectScreen extends Component{

  constructor(props){
    super(props)


    this.state = {
      buttonText:this.props.navigation.state.params.buttonText,
    };
  }//constructor



  render(){
      return(
          <Container style={styles.back}>
            <Content padder>
            <List
                dataArray={this.props.navigation.getParam('value')}
                renderRow={(type, _, index)=>
                  <ListItem>
                  <Button full style={styles.buttonColor}
                    onPress={() =>
                    this.props.navigation.navigate('Result', {value: type.value})}>
                      <Text> {type.name} </Text>
                  </Button>
                  </ListItem>
                }>
              </List>

            </Content>
          </Container>
        )
}//render


}//end of class
