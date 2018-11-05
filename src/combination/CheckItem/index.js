import {Checkbox} from 'antd-mobile'
import 'antd-mobile/lib/checkbox/style';
import React, { Component } from 'react'
import { View ,Text,StyleSheet} from 'react-native';

export default class CheckboxItem extends React.Component{

    render(){
        return(
            <View style={styles.main}>
           
            <Checkbox
                {...this.props}
            >
            </Checkbox>
            <Text style={{flex:1,marginLeft:10,fontSize:15}}>
            {this.props.title}
        </Text>
        </View>
        )
    }
}
const styles =StyleSheet.create({
     main:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
     }
})