import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { useDebounce } from '../../../../hook';

import request from '../../../../utils/request';
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

    //Dùng Debounced khi search ký tự cuối cùng thì mới bắn sang API gọi 1 lần search
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        request
            .get('users/search', {
                params: {
                    q: debounced,
                    type: 'less',
                },
            })
            .then((res) => {
                // console.log(res.data.data);
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

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
