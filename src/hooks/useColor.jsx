import { useEffect, useState } from "react";

const useColor = (type) => {
    const [color, setColor] = useState('yellow');

    typeColor()

    function typeColor() {
        if (type.toLowerCase() === 'flying') {
            setColor('green')
        }
    }

    return [{
        color: color
    }]
}

export default useColor