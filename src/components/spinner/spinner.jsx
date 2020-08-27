import React from 'react'

import { RingContainer, RingDot } from './spinnerStyles'

const Spinner = ({size}) => (
    <RingContainer size={size}>
        <RingDot />
        <RingDot />
        <RingDot />
        <RingDot />
        <RingDot />
        <RingDot />
    </RingContainer>
)

export default Spinner;