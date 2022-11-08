import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../components/Popper';

import './Menu.scss';
import MenuItems from './MenuItem';

export default function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItems key={index} data={item} />
        ));
    };
    return (
        <Tippy
            visible
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu-list" tabIndex="-1" {...attrs}>
                    <PopperWapper>{renderItems()}</PopperWapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
