import React, { Component } from "react";
import {  Container, View, Text,  } from "native-base";
export default class Sidebar extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#95a5a6'}}>
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Side Drawer</Text>
          </View>
      </Container>
    );
  }
}
