import React from 'react';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../components/Popper';

import MenuItems from './MenuItem';
import Header from './Header';
import './Menu.scss';

export default function Menu({ children, items = [], hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 100]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu-list" tabIndex="-1" {...attrs}>
                    <PopperWapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}

                        {renderItems()}
                    </PopperWapper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
