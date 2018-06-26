/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import WebViewTest from './modules/WebViewTest'

export default class PracticeProject extends Component {

    renderScene(route, navigator) {
        let Component = route.component;
        return <Component navigator={navigator} {...route.params}/>
    }

    render() {
        return (
            <Navigator
                initialRoute={{component: WebViewTest}}
                renderScene={(route, navigator) => this.renderScene(route, navigator)}
            />
        )
    }

}

AppRegistry.registerComponent('PracticeProject', () => PracticeProject);
