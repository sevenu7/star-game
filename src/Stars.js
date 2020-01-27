import React from 'react';

import { utils } from './Utils';

export const Stars = (props) => (
    utils.range(1, props.count).map(starId =>
        <div key={starId} className="star" />
    )
)