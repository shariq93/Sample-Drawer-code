  import React, { Component } from 'react';
  import {View} from 'react-native'
  import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, } from 'native-base';
  import { Constants } from 'expo';
  import Drawer from 'react-native-drawer'
  import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
  import Sidebar from './Sidebar' // import the sidebar.js to use as drawer
  export default class HeaderIconButtonTextButtonExample extends Component {
    render() {
      return (
        <Drawer
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.5}
        captureGestures={true}
        closedDrawerOffset={-1}
        styles={{
          drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
          main: { paddingLeft: 3 },
        }}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}

        ref={(ref) => this._drawer = ref}
        content={<Sidebar   />}
      >
      <GestureRecognizer
      
    
      onSwipeRight={(state) => this._drawer.open() }
    
      config={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      }}
      style={{
        flex: 1,

      }}
      >
    <Container>
        <View style={{
          backgroundColor: "#329111",
          height: Constants.statusBarHeight,
        }} />
        <Header style={{ backgroundColor: '#329111', marginLeft: -5 }}>
          <Left>
            <Button transparent onPress={()=>{
              this._drawer.open()
            }}>
              <Icon name='menu' style={{color:'#fff'}} />
            </Button>
          </Left>
          <Body style={{flex:1}}>
            <Text style={{ fontFamily: 'f_light', color: '#fff', fontSize: 18 }}>Main Menu</Text>
          </Body>
          <Right>
            
          </Right>
        </Header>
      
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text>Home Content</Text>
            </View>

      </Container>

      </GestureRecognizer>
  </Drawer>
      );
    }

  }