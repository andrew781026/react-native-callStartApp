// Root.js
import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';


Navigation.setRoot({
    root: {
        bottomTabs: {
            children: [{
                stack: {
                    children: [{
                        component: {
                            name: 'navigation.playground.WelcomeScreen',
                            passProps: {
                                text: 'This is tab 1'
                            }
                        }
                    }],
                    options: {
                        bottomTab: {
                            text: 'Tab 1',
                            icon: require('../images/one.png'),
                            testID: 'FIRST_TAB_BAR_BUTTON'
                        }
                    }
                }
            },
                {
                    component: {
                        name: 'navigation.playground.WelcomeScreen',
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                            bottomTab: {
                                text: 'Tab 2',
                                icon: require('../images/two.png'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }
                }]
        }
    }
});
