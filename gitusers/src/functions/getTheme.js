import {DARCULA, PEARL, BASIC} from '../themes'
import THEMES from "../constants/theme"

export const getTheme = themeName => {
    switch (themeName) {
        case THEMES.DARCULA: return DARCULA;
        case THEMES.PEARL: return PEARL;
        default: return DARCULA
    }
}