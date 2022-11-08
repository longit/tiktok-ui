import React from 'react';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { Wapper as PopperWapper } from '../../../Popper';

import './Header.scss';
import logo from '../../../../assets/images/logo.svg';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback end help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboarch shortcuts',
    },
];

export default function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
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
                    <Button className="btn btn-text" taget="_blank">
                        Upload
                    </Button>
                    <Button className="btn primary" taget="_blank">
                        Login
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className="btn-more" taget="_blank">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
