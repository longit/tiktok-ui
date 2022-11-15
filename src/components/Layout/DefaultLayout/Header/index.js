import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import logo from '../../../../assets/images/logo.svg';
import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';

export default function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 4]);
        }, 0);
    }, []);
    return (
        <header className="wapper">
            <div className="container-wapper">
                <div className="logo">
                    <img src={logo} alt="title logo" />
                </div>
                <div className="b__form--search">
                    <Tippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div
                                className="search-result"
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWapper>
                                    <h4 className="search-title">Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWapper>
                            </div>
                        )}
                    >
                        <form>
                            <input
                                type="text"
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                            />
                            <button className="clear">
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className="loading"
                                icon={faSpinner}
                            />
                            <button type="submit" className="search-btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </Tippy>
                </div>
                <div className="b__action">
                    <Button
                        primary
                        to="/login"
                        className="btn-login"
                        taget="_blank"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}
