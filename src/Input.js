import React from 'react'
import Square from './Square'
import colorNames from 'colornames'


const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color name</label>
            <input type="text"
                required
                autoFocus
                placeholder='Add color value'
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }} />
            <button
                type='button'
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

Square.defaultProps = {
    colorValue: "Empty color value"
}

export default Input
