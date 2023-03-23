import React from "react";

import { Modal, Backdrop, Fade, Box, IconButton, Button } from "@mui/material";
import { Link } from 'react-router-dom'

import { style } from '../Navbar/City/City'

import { BsX } from 'react-icons/bs'

import '../../Css/Authenticate.css'

interface propsTypes {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Authenticate (props: propsTypes) {

    const [number, setNumber] = React.useState('09033465611')
    const [isVerifying, setIsVerifying] = React.useState(false)

    const [counter, setCounter] = React.useState(120)

    React.useEffect(() => {
        if (isVerifying && counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000)
        }
    }, [isVerifying, counter])

    const handleClose = () => { props.setOpen(false); setIsVerifying(false) }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            className='login'
        >
            <Fade in={props.open}>
                <Box sx={style}>
                    <div className="modal-top">
                        <span>ورود به حساب کاربری</span>
                        <IconButton onClick={handleClose}>
                            <BsX />
                        </IconButton>
                    </div>
                    <div className="modal-content">
                        <p className='title'>
                            {
                                isVerifying ? ( 'کد تأیید را وارد کنید.' ) : ( 'شمارهٔ موبایل خود را وارد کنید.' )
                            }
                        </p>

                        <p className="verify-note">
                            لطفاً کد تأییدی را که به شمارهٔ { number } پیامک شده وارد کنید.
                        </p>

                        <div className="input-parent">
                            <input type="text" className="input" placeholder={ isVerifying ? ( 'کد تأیید' ) : ( 'شمارهٔ موبایل' )}/>
                        </div>
                        {
                            isVerifying ? (
                                <p>
                                    <Link to={'/'} target='_blank'>
                                        تغییر شمارهٔ موبایل
                                    </Link>
                                </p>
                            ) : (
                                <p>
                                    <Link to={'/'} target='_blank'>
                                        شرایط استفاده از خدمات
                                    </Link>
                                    &nbsp;و&nbsp;
                                    <Link to={'/'} target='_blank'>
                                        حریم خصوصی
                                    </Link>
                                    &nbsp;دیوار را می‌پذیرم.
                                </p>
                            )
                        }
                        <div className="mt-4 ms-auto d-flex">
                            {
                                isVerifying && (
                                    counter === 0 ? (
                                        <Button className='me-2' variant='outlined' color='error'>
                                            <span className="fw-bold">
                                                درخواست کد
                                            </span>
                                        </Button>
                                    ) : (
                                        <p className='send-again'>
                                            درخواست مجدد(0{ Math.floor(counter / 60) }:{ ('0' + counter % 60).slice(-2) })
                                        </p>
                                    )
                                )
                            }
                            <Button variant='contained' color='error' onClick={ () => {
                                if (isVerifying) {
                                    handleClose()
                                } else {
                                    setIsVerifying(true)
                                }
                            }}>
                                <span className="fw-bold">
                                    { isVerifying ? ( 'تایید' ) : ( 'دریافت کد تایید' ) }
                                </span>
                            </Button>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}

export default Authenticate