import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import logo from '../../../../assets/images/logo.svg';

export default function Header() {
    return (
        <header className="wapper">
            <div className="container-wapper">
                <div className="logo">
                    <img src={logo} alt="title logo" />
                </div>
                <div className="b__form--search">
                    <form>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className="clear">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className="loading" icon={faSpinner} />
                        <button type="submit" className="search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
                <div className="b__action">
                    
                </div>
            </div>
        </header>
    );
}
