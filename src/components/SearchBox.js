import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ handleCityChange }) => {
    const [input, setInput] = useState('');
    const [placeholder, setPlaceholder] = useState('Enter City');

    const handleFocus = () => {
        setPlaceholder('');  // 포커스 시 플레이스홀더 제거
      };

    const handleBlur = () => {
        if (!input) {
          setPlaceholder('Enter City');  // 입력 값이 없을 때 플레이스홀더 복원
        }
      };    

    return (
        <div className="search-box">
            <button onClick={() => handleCityChange("current")}>
                <FontAwesomeIcon icon={faLocationPin} />
            </button>
            <input
                type="text"
                placeholder={placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />        
            <button onClick={() => handleCityChange(input)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBox;
