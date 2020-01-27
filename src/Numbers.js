import React from 'react';

import { utils } from './Utils';

export const Numbers = (props) => (
    utils.range(1, 9).map(number =>
        <button key={number} className="number">{number}</button>
    )
)