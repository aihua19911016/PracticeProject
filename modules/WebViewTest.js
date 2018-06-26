/**
 * @author chengaihua
 * @create 2018/6/25 下午3:41
 */
import React, {Component} from 'react';
import {View, WebView, Text} from 'react-native';

export default class WebViewTest extends Component {

    onTest() {
        let a = 2;
        let b = 3;
        return a + b;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text onPress={() => this.onTest()}
                >WebView测试</Text>
            </View>
        );
    }
}