/**
 * Created by hsy on 2017/7/17.
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import Game2048 from "./2048/Game2048";

class index extends Component {

    render() {
        return (
            <Game2048/>
        )
    }
}

AppRegistry.registerComponent("rn_2048", () => index)



