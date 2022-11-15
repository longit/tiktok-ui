import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Menu.scss';

export default function Header({ title, onBack }) {
    return (
        <header className="header">
            <button className="btn-back" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="header-title">{title}</h4>
        </header>
    );
}
