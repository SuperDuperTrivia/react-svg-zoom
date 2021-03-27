import React, { Component } from 'react';
import { G } from 'react-native-svg';
const GView = G;
export default class ResponderElement extends Component {
    constructor() {
        super(...arguments);
        this.releasedNaturally = true;
    }
    render() {
        return (<GView x={this.props.x} y={this.props.y} onStartShouldSetResponder={(evt) => true} onMoveShouldSetResponder={(evt) => false} onResponderGrant={(evt) => {
                this.releasedNaturally = true;
                if (this.props.onClick)
                    this.props.onClick(evt);
            }} onResponderTerminationRequest={(evt) => {
                if (evt.nativeEvent.touches.length > 1) {
                    this.releasedNaturally = false;
                    return true;
                }
                if (this.props.onClickCanceled)
                    this.props.onClickCanceled(evt);
                return false;
            }} onResponderMove={this.props.onDrag} onResponderRelease={(evt) => {
                if (this.releasedNaturally) {
                    if (this.props.onClickRelease)
                        this.props.onClickRelease(evt);
                    this.releasedNaturally = true;
                }
            }}>
        {this.props.children}
      </GView>);
    }
}
ResponderElement.defaultProps = {
    onClick: (evt) => { },
    onClickRelease: (evt) => { },
    onClickCanceled: (evt) => { },
    onDrag: (evt) => { }
};
