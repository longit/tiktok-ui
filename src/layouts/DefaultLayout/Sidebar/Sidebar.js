import React from 'react';
import Menu from './Menu/Menu';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <aside className="b__sidebar">
            <Menu />
        </aside>
    );
}
