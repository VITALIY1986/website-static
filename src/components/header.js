import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import iconGitHub from "../../static/images/icon-github.svg"
const Header = ({siteTitle}) => (
    <header>
        <div className={'inside'}>
            <div className={'phone_icon'}>
                <a href="tel:050-590-89-78">
                   <img alt={"GitHub"} src={iconGitHub}/>     
                                   
                           
                </a>
           </div>
       
           <div className={'menu_button'}>

           </div>
           <div className={'center_logo'}>
               <div className={'logocen'}></div>
           </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
