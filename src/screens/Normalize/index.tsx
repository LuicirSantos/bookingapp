import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const scale: number = SCREEN_WIDTH / 360;

export function pixelNormalize(size: number){
    const newSize: number = size * scale;
    if(Platform.OS === "ios"){
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
