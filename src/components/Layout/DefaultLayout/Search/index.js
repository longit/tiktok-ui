import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import './Search.scss';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }
        setLoading(true);

        fetch(
            'https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less',
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHidenResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className="search-result" tabIndex="-1" {...attrs}>
                    <PopperWapper>
                        <h4 className="search-title">Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem
                                key={result.Population}
                                data={result}
                            />
                        ))}
                    </PopperWapper>
                </div>
            )}
            onClickOutside={handleHidenResult}
        >
            <form>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className="clear" onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon className="loading" icon={faSpinner} />
                )}
                <button type="submit" className="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </HeadlessTippy>
    );
}

export default Search;
