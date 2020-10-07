import {btnColor} from './color';

export const primaryBtn = {
        background: "white",
        color: btnColor,
        border: `solid 2px ${btnColor}`,
        '&:hover': {
            background: btnColor,
            color: 'white'
        }
}