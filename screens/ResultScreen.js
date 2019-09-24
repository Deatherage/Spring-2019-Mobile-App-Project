import React, {Component} from "react"
import {Text, StyleSheet} from "react-native"
import {Container, Content, Card, CardItem, Body, Button} from "native-base"



const resultsTest = "I like cats"
const noSleep= "I like dogs"

const styles = StyleSheet.create({
  spacing:{
    padding: 10,

  },

  back: {
    backgroundColor: '#dfdfdf',
  },

})



//all of the buttons for the various categories of items in game here
export default class SelectScreen extends React.Component{

  constructor(props){
    super(props)


    this.state = {
      cabbage:this.props.navigation.state.params.cabbage,
    };
  }//constructor


  render(){
    const {stats1, stats2, stats3, stats4, stats5, stats6, description} = this.props.navigation.getParam('value')
    return(
        <Container style={styles.back}>
          <Content padder>
            <Card>
              <Text style={styles.spacing}> {stats1}</Text>
            </Card>
            <Text style={styles.spacing}></Text>
            <Card>
              <Text style={styles.spacing}> {stats2}</Text>
            </Card>
            <Text style={styles.spacing}></Text>
            <Card>
              <Text style={styles.spacing}> {stats3}</Text>
            </Card>
            <Text style={styles.spacing}></Text>
            <Card>
              <Text style={styles.spacing}> {stats4}</Text>
            </Card>
            <Text style={styles.spacing}></Text>
            <Card>
              <Text style={styles.spacing}> {stats5}</Text>
            </Card>
            <Text style={styles.spacing}></Text>
            <Card>
              <Text style={styles.spacing}> {stats6}</Text>
            </Card>
            <Text style={styles.spacing}></Text>
            <Card>
              <Text style={styles.spacing}> {description}</Text>
            </Card>
          </Content>
        </Container>
      )
  }//render
}//class end
