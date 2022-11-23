import { useEffect, useState } from "react";

const useColor = () => {

    function getClassColor(type) {
        switch (type) {
            case 'normal':
                return 'normal'
                break;
            case 'fighting':
                return 'fighting'
                break;
            case 'flying':
                return 'flying'
                break;
            case 'poison':
                return 'poison'
                break;
            case 'ground':
                return 'ground'
                break;
            case 'rock':
                return 'rock'
                break;
            case 'bug':
                return 'bug'
                break;
            case 'ghost':
                return 'ghost'
                break;
            case 'steel':
                return 'steel'
                break;
            case 'fire':
                return 'fire'
                break;
            case 'water':
                return 'water'
                break;
            case 'grass':
                return 'grass'
                break;
            case 'electric':
                return 'electric'
                break;
            case 'psychic':
                return 'psychic'
                break;
            case 'ice':
                return 'ice'
                break;
            case 'dark':
                return 'dark'
                break;
            case 'fairy':
                return 'fairy'
                break;
            case 'shadow':
                return 'shadow'
                break;
            default:
                return 'unknown'
                break;
        }
    }

    return [{
        getClassColor: getClassColor
    }]
}

export default useColor