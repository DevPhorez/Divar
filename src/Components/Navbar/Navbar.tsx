import * as React from "react";

import '../../Css/Navbar.css'

import { Button, Backdrop } from "@mui/material";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Cities from "./City/City";
import Search from "./Search/Search";
import { FaRegUser } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
import { Link } from "react-router-dom";


interface propsTypes {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar (props: propsTypes) {

    // search input
    const [inputStatus, setInputStatus] = React.useState(false)

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-white border-bottom p-0 fixed-top" style={ { height: 64, zIndex: 1000 } }>
            <div className="container-fluid px-3">
                <a className="navbar-brand me-0" href="#">
                    <img className='nav-logo' src="/Images/logo.svg" alt="صفحه اصلی دیوار" width={48} height={48} />
                </a>

                <div className="vertical-line"></div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Cities />
                        </li>
                        <li className="nav-item">
                            <Button className='nav-item-btn me-3' variant="text" color={'inherit'} endIcon={<MdOutlineKeyboardArrowDown size={18} style={ { marginRight: '.7rem' } } />}>دسته ها</Button>
                        </li>
                        <li className="nav-item">
                            <Search inputStatus={inputStatus} setInputStatus={setInputStatus} />
                        </li>
                    </ul>
                    <ul className='navbar-nav align-items-center ms-auto'>
                        <li className="nav-item">
                            <Button className='nav-item-btn' variant="text" color={'inherit'} startIcon={<FaRegUser size={18} style={ { marginLeft: '.7rem' } } />}
                            onClick={ () => props.setOpen(true)}>دیوار من</Button>
                        </li>
                        <li className="nav-item">
                            <Button className='nav-item-btn ms-3' variant="text" color={'inherit'} startIcon={<TbMessageCircle2 size={18} style={ { marginLeft: '.7rem' } } />} >چت</Button>
                        </li>
                        <li className="nav-item">
                            <Link to='/support'>
                                <Button className='nav-item-btn mx-3' variant="text" color={'inherit'}>پشتیبانی</Button>
                            </Link>
                        </li>
                        <Button color='error' variant="contained">ثبت آگهی</Button>
                    </ul>
                </div>
            </div>
        </nav>
        <Backdrop
            sx={{ color: '#fff', zIndex: 100, backgroundColor: 'rgba(0,0,0,.18)' }}
            open={inputStatus}
            onClick={ () => setInputStatus(false) }
        >

        </Backdrop>
    </>
    )
}

export default Navbar