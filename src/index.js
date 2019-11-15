import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'

const RotateView = ({ rotate, degree, initialDegree, duration, children, style, ...otherProps }) => {

    const [rotateValue] = useState(new Animated.Value(0))

    useEffect(() => {
        const toValue = rotate ? 1 : 0
        Animated.timing(
            rotateValue,
            {
                toValue,
                duration,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start()
    }, [rotate, duration, rotateValue])

    const spin = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [initialDegree, degree]
    })

    return (
        <Animated.View
            style={[{
                transform: [{ rotate: spin }],
                justifyContent: 'center'
            }, style]}
            {...otherProps}
        >
            {children}
        </Animated.View>
    )
}

RotateView.defaultProps = {
    rotate: false,
    degree: '90deg',
    duration: 100,
    initialDegree: '0deg',
    style: {}
}

RotateView.propTypes = {
    rotate: PropTypes.any,
    degree: PropTypes.string,
    duration: PropTypes.number,
    initialDegree: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}

export default RotateView
