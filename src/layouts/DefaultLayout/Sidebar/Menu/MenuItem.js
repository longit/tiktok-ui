import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem(title, to, icon) {
    return (
        <div className="menu-items-sidebar">
            <ul>
                <li><NavLink to="/for-you">For you</NavLink></li>
                <li><NavLink to="/following">Following</NavLink></li>
                <li><NavLink to="live">Live</NavLink></li>
            </ul>



        </div>
    )

}

export default MenuItem;
