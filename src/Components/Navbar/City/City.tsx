import * as React from 'react';

import { Button, Fade, Modal, Box, Backdrop, Typography, Chip, IconButton, Divider } from '@mui/material'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsX } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'


export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 488,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
};

function Cities () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [citySearch, setCitySearch] = React.useState('')

    return (
        <li className="nav-item city">
            <Button className='city-open' variant="text" color={'inherit'} startIcon={<HiOutlineLocationMarker size={18} style={ { marginLeft: '.7rem' } } />} onClick={handleOpen}>اصفهان</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className='modal-box'  >
                        <header className='city-modal-header'>
                            <Typography className='mb-3' variant="h6" component="h2">
                                انتخاب شهر
                            </Typography>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <Chip
                                            className='px-1'
                                            label="اصفهان"
                                            color='error'
                                            variant="outlined"
                                            icon={
                                                <IconButton className='p-0' color="error" component="label">
                                                    <BsX className='pointer' fontSize={18} />
                                                </IconButton>
                                            }
                                            style={ { direction: 'ltr' } }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='input-parent'>
                                {
                                    citySearch && <IconButton className='p-0 clear' color="default" component="label" onClick={ () => setCitySearch('') }>
				                        <BsX className='pointer' fontSize={18} />
			                        </IconButton>
                                }
                                <input className='input mt-3 mb-0' value={citySearch} placeholder='جستجو در شهر ها' onChange={ (event) => setCitySearch(event.target.value)} type="text"/>
                                <GoSearch className='search' color='rgba(0,0,0,.32)' size={20} />
                            </div>
                        </header>
                        <div className="city-modal-content">
                            <div className="cities">
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                                <Divider color='999' />
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="city-title">اصفهان</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                            </div>
                        </div>
                        <div className="city-modal-bottom">
                            <div>
                                <Button onClick={ () => setOpen(false) } variant="outlined" color='inherit'>انصراف</Button>
                            </div>
                            <div style={ { cursor: 'not-allowed' } }>
                                <Button variant="contained" disabled>تایید</Button>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </li>
    );
}

export default Cities