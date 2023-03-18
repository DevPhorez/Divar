import React from "react";

import Categories from "./Categories/Categories";

import '../../Css/RightSide.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

function RightSide () {

    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight - 80)

    window.addEventListener('resize', () => {
        setWindowHeight(window.innerHeight - 80)
    })

    return (
        <section className='right-side' style={ { maxHeight: windowHeight } }>
            <Categories />
            <div className="filter-field">
                <MdKeyboardArrowDown className='me-1' size={24} color='rgba(0,0,0,.3)' />
                <span>محل</span>
            </div>
            <div className="filter-field">
                <MdKeyboardArrowDown className='me-1' size={24} color='rgba(0,0,0,.3)' />
                <span>قیمت</span>
            </div>
            <div className="filter-field">
                <MdKeyboardArrowDown className='me-1' size={24} color='rgba(0,0,0,.3)' />
                <span>وضعیت آگهی</span>
            </div>
            <footer>
                <div className="footer-items">
                    <span className="item">
                        درباره دیوار
                    </span>
                    <span className="item">
                        دریافت برنامه
                    </span>
                    <span className="item">
                        بلاگ دیوار
                    </span>
                    <span className="item">
                        کسب و کارها
                    </span>
                    <span className="item">
                        پشتیبانی و قوانین
                    </span>
                </div>
                <div className="social-media">
                    <BsTwitter size={18} />
                    <RiInstagramFill size={18} />
                    <FaLinkedin size={18} />
                    <SiAparat size={18} />
                </div>
                <div className='enamad'>
                    <div>
                        <img className='img-fluid' src="/Images/eNamd.png" alt=""/>
                    </div>
                    <div>
                        <img className='img-fluid' src="/Images/country.png" alt=""/>
                    </div>
                    <div>
                        <img className='img-fluid' src="/Images/meli.png" alt=""/>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default RightSide;