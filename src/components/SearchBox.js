import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ handleCityChange }) => {
    const [input, setInput] = useState('');

    return (
        <div className="search-box">
            <button onClick={() => handleCityChange("current")}>
                <FontAwesomeIcon icon={faLocationPin} />
            </button>
            <input
                type="text"
                placeholder="Enter City"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleCityChange(input)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBox;
