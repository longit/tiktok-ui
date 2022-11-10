import React from 'react';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Wapper as PopperWapper } from '../../../Popper';
import 'tippy.js/dist/tippy.css';

import './Header.scss';
import logo from '../../../../assets/images/logo.svg';
import avatar from '../../../../assets/images/img_avatar.jpg';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Images';
const currentUSer = true;
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
            setSearchResult([1, 1, 1, 1]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className="wapper">
            <div className="container-wapper">
                <div className="logo">
                    <img src={logo} alt="title logo" />
                </div>
                <div className="b__form--search">
                    <HeadlessTippy
                        interactive
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
                    </HeadlessTippy>
                </div>
                <div className="b__action">
                    {/* Checked User login hay chưa */}
                    {currentUSer ? (
                        <div className="b__login">
                            <Tippy content="Upload video" placement="bottom">
                                <button className="btn-action">
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <div className="b__notLogin">
                            <Button className="btn btn-text" taget="_blank">
                                Upload
                            </Button>
                            <Button className="btn primary" taget="_blank">
                                Login
                            </Button>
                        </div>
                    )}
                    <Menu
                        items={currentUSer ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUSer ? (
                            <Image
                                className="user-avatar"
                                src="images/dfdf.png"
                                alt="Title avatar"
                            />
                        ) : (
                            <button className="btn-more" taget="_blank">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
