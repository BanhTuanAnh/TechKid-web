import React from 'react';
import { readFileSync } from 'fs';
export default function CountNumber(props) {
    return (
        <div>
            <div>
                Count:{props.countNumProps}
            </div>
            <div>
                Count:{props.countNumProps}
            </div>
        </div>

    )
}