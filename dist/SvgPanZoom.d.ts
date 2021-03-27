import { Component } from "react";
import { View, PanResponderInstance, Animated, ViewStyle, LayoutChangeEvent, PanResponderGestureState } from "react-native";
import { Point, ViewTransform, ViewDimensions } from "./interfaces";
/*********************************************************
 * Interfaces
 *********************************************************/
export interface Props {
    minScale?: number;
    maxScale?: number;
    initialZoom?: number;
    canvasHeight?: number;
    canvasWidth?: number;
    canvasStyle?: ViewStyle;
    viewStyle?: ViewStyle;
    onZoom?: (zoom: number) => void;
    disabled?: boolean;
}
export interface State {
    layoutKnown: boolean;
    viewDimensions: ViewDimensions;
    viewTransform: ViewTransform;
    isScaling: boolean;
    initialDistance: number;
    initialTransform: ViewTransform;
    initialScale: number;
    initialTranslation: Point;
    isMoving: boolean;
    initialGestureState: {
        dx: number;
        dy: number;
    };
    scaleAnimation: Animated.Value;
    TranslationAnimation: Animated.ValueXY;
}
/*********************************************************
 * Component
 *********************************************************/
export default class SvgPanZoom extends Component<Props, State> {
    static defaultProps: Partial<Props>;
    mainViewRef?: View | null;
    prInstance: PanResponderInstance;
    prTargetSelf: any;
    prTargetOuter: any;
    constructor(props: Props);
    dropNextEvt: number;
    componentDidMount(): void;
    render(): JSX.Element;
    _onLayout: (event: LayoutChangeEvent) => void;
    getInitialViewTransform(canvasWidth: number, canvasHeight: number, scale: number): ViewTransform;
    zoomToPoint: (x: number, y: number, scale: number, duration?: number) => void;
    processPinch: (x1: number, y1: number, x2: number, y2: number) => void;
    processTouch: (gestureState: PanResponderGestureState) => void;
}
