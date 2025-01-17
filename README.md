# react-native-rotate-view

Rotate Anything you want.

### Installation
```bash
npm i react-native-rotate-view
```

### Example

    import React, { useState } from 'react'
    import RotateView from 'react-native-rotate-view'

    export default function App() {

        const [rotate, setRotate] = useState(true)

        return (            
            <RotateView
                rotate={rotate}
            >
            ...
            </RotateView>
        )
    }


### RotateView:
| Prop      | Type          | Default             | Description |
| :-------------: |:-------------:|:------------:       | ----------- |
| rotate          | bool        | false          | Change this variable to trigger rotation
| degree         | string (number + 'deg')       | '90deg'           | Degree that the Animated.View will rotate to. (set negative to rotate backwards)
| duration       | number          | 100                | Time to run the animation
| initialDegree   | string (number + 'deg')        | '0deg'    | Initial degree of the animation
| style   | style        | null    | Style of the Animated.View
| children   | Component        |  null    | React Component to render inside the Animated.View
| onAnimationEnd   | func        |  null    | Callback when animation ends

