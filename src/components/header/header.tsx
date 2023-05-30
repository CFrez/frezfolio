import React from "react";

import background from '/images/topper/background.svg'
import archdesign from '/images/topper/archdesign.svg'
import archeng from '/images/topper/archeng.svg'
import humanfactors from '/images/topper/humanfactors.svg'
import code from '/images/topper/code.svg'
import ux from '/images/topper/ux.svg'



import './header.sass'

export const Header: React.FC = () => {

    const topper = (
        <div className="topper">
            <img className="background" src={background} alt="dallas skyline background" />
            <img className="ux" src={ux} alt="user experience" />
            <img className="code" src={code} alt="code" />
            <img className="hf" src={humanfactors} alt="human factors" />
            <img className="ae" src={archeng} alt="architectural engineering" />
            <img className="ad" src={archdesign} alt="architectural design" />
        </div>
    )

    return (
        <header>
            {topper}
        </header>
    )
}