import * as React from "react";
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import Svg, { G, Circle, Rect } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function DonutPete({
  percentage = 100,
  percentage1 = 25,
  percentage2 = 50,
  radius = 31.8,
  strokeWidth = 10,
  duration = 2500,
  color = "tomato",
  delay = 0,
  textColor,
  max = 150,
  max1 = 150,
  max2 = 150,
}) {
  const animated1 = React.useRef(new Animated.Value(0)).current;
  const animated2 = React.useRef(new Animated.Value(0)).current;
  const circle1Ref = React.useRef();
  const circle2Ref = React.useRef();
  // const inputRef = React.useRef();

  const circumference = 2 * Math.PI * radius;
  const offset = circumference / 4; // to start at "12pm" (vs 3pm)
  console.log("offset:" + offset);

  const halfCircle = radius + strokeWidth;

  console.log("radius:" + radius + ", strokeWidth:" + strokeWidth);
  console.log(", percentage1:" + percentage1 + ", percentage2:" + percentage2);
  console.log(", max1:" + max1 + ", max2:" + max2);
  console.log("circumference:" + circumference + ", halfCircle:" + halfCircle);
  // console.log("(circumference * 75) / 100:" + (circumference * 75) / 100);
  // Get rid of the background animation?  Replace it with green?  Do I need two circles?

  const animation1 = (toValue) => {
    console.log("animation1:" + toValue);
    return Animated.timing(animated1, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const animation2 = (toValue) => {
    console.log("animation2:" + toValue);
    return Animated.timing(animated2, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  React.useEffect(() => {
    animation1((percentage1 * circumference) / 100);
    animation2((percentage2 * circumference) / 100);
    animated1.addListener(
      (v) => {
        const maxPerc1 = (100 * v.value) / max1;
        const strokeDashoffset =
          circumference - (circumference * maxPerc1) / 100 - offset;
        console.log("maxPerc1:" + maxPerc1 + ", v.value:" + v.value);
        console.log("strokeDashoffset1:" + strokeDashoffset);
        if (circle1Ref?.current) {
          circle1Ref.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max1, percentage1]
    );
    animated2.addListener(
      (v) => {
        const maxPerc2 = (100 * v.value) / max2;
        const strokeDashoffset =
          circumference - (circumference * maxPerc2) / 100 - offset;
        // console.log("maxPerc2:" + maxPerc2 + ", v.value:" + v.value);
        // console.log("strokeDashoffset2:" + strokeDashoffset);
        if (circle2Ref?.current) {
          circle2Ref.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max2, percentage2]
    );

    return () => {
      animated1.removeAllListeners();
      animated2.removeAllListeners();
    };
  });

  return (
    <View style={{ width: halfCircle * 2, height: halfCircle * 2 }}>
      <Svg
        height={halfCircle * 2}
        width={halfCircle * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#d2d3d4"
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          ref={circle1Ref}
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="green"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDashoffset="50"
          strokeDasharray="50 150"
        />
        <AnimatedCircle
          ref={circle2Ref}
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDashoffset="200"
          strokeDasharray="50 150"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
