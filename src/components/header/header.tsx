import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PageUrl, topperProperties } from "../../data/pages";
import { LogoLink, Contact } from "..";

import './header.sass'



export const Header: React.FC = () => {
    const { pathname } = useLocation();

    const topper = (
        <div className={`topper ${PageUrl.About === pathname ? 'about' : ''}`}>
            {Object.entries(topperProperties).map(([key, {src, alt, link}]) => (
                <Link key={key} className={key} to={link}>
                    <img
                        className={`${key} ${link === pathname ? 'active' : ''}`}
                        src={src}
                        alt={alt}
                    />
                </Link>
            ))}
        </div>
    )

    return (
        <header>
            <div className="info">
                <LogoLink />
                <Contact />
            </div>
            {topper}
        </header>
    )
}