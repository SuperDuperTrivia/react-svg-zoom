import { ViewTransform, ViewDimensions } from './interfaces';
export declare function calcDistance(x1: number, y1: number, x2: number, y2: number): number;
export declare function calcCenter(x1: number, y1: number, x2: number, y2: number): {
    x: number;
    y: number;
};
export declare function createIdentityTransform(): {
    scaleX: number;
    skewX: number;
    skewY: number;
    scaleY: number;
    translateX: number;
    translateY: number;
};
export declare function createTranslationMatrix(translateX: number, translateY: number): ViewTransform;
export declare function createScalingMatrix(scale: number): ViewTransform;
export declare function viewTransformMult(vtA: ViewTransform, vtB: ViewTransform): ViewTransform;
export declare function getBoundedPinchTransform(oldTransform: ViewTransform, newTransform: ViewTransform, minScale: number, maxScale: number): ViewTransform;
export declare function getBoundedTouchTransform(initialTransform: ViewTransform, oldTransform: ViewTransform, newTransform: ViewTransform, viewDim: ViewDimensions, canvasWidth: number, canvasHeight: number): ViewTransform;
