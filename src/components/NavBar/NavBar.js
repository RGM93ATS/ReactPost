import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => (
    <header>
        <nav>
            <ul>
                <li><NavLink 
                        to="/posts/"
                        exact 
                        activeClassName="my-active" 
                        activeStyle={{
                            color: "rgb(55, 141, 255)",
                            textDecoration: 'underline'
                        }}>Posts</NavLink></li>
                <li><NavLink to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>Nuevo Post</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default navbar;