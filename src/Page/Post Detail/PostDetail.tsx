import * as React from "react";

import { Breadcrumbs, Link, Typography, IconButton, Button } from "@mui/material";

import { MdKeyboardArrowLeft, MdOutlineFeedback, MdOutlineLocalShipping } from 'react-icons/md'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FiShare2 } from 'react-icons/fi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbTrashFilled } from 'react-icons/tb'


// import Slider from "./Slider/Slider";
import '../../Css/PostDetail.css'

function PostDetail () {

    const [noteValue, setNoteValue] = React.useState('')

    return (
        <div className='container post-detail px-5' style={ { marginTop: '5rem' } }>

            <Breadcrumbs
                separator={<MdKeyboardArrowLeft fontSize="18" />}
                aria-label="breadcrumb"
                className='breadcrumb'
            >
                <Link underline="hover" key="1" color="inherit" href="/">
                    خانه و آشپز آشپزخانه
                </Link>,
                <Link
                    underline="hover"
                    key="2"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    لوازم خانگی برقی
                </Link>,
                <Link
                    underline="hover"
                    key="3"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    سماور، چای ساز و قهوه ساز
                </Link>,
                <Typography key="4" color="text.primary" fontSize='.7rem'>
                    سماور زغالی
                </Typography>,
            </Breadcrumbs>

            <div className="row">
                <div className="col-5">
                    <div className="post-header">
                        <p className='post-title'>سماور زغالی</p>
                        <p className='post-subtitle'>دقایقی پیش در اصفهان، دستگرده</p>
                        <div className='post-tag'>
                            <BsFillPatchCheckFill color='#92e000' />
                            <span>
                                عضو دیوارِ فروشگاه‌ها
                            </span>
                        </div>
                    </div>
                    <div className="post-action">
                        <Button variant='contained' color='error'>
                            اطلاعات تماس
                        </Button>
                        <div>
                            <IconButton color="default" aria-label="upload picture" component="label">
                                <FiShare2 fontSize={20} />
                            </IconButton>
                            <IconButton color="default" aria-label="upload picture" component="label">
                                <FiShare2 fontSize={20} />
                            </IconButton>
                        </div>
                    </div>
                    <div className="post-info">
                        <div className="field">
                            <span className="title">
                                وضعیت
                            </span>
                            <span className="value">
                                نو
                            </span>
                        </div>
                        <div className="field">
                            <span className="title">
                                آخرین به‌روزرسانی آگهی
                            </span>
                            <span className="value">
                                دقایقی پیش
                            </span>
                        </div>
                        <div className="field">
                            <span className="title">
                                قیمت
                            </span>
                            <span className="value">
                                ۱۵۰٬۰۰۰ تومان
                            </span>
                        </div>
                    </div>
                    <div className="post-description">
                        <p className="title">توضیحات</p>
                        <p className="description">
                            هوای اصفهان و اصفهانی ها را داریم

                            فروش شنبه تا آخر هفته حتی تعطیلات و جمعه ها
                            سماور سازی پورحیدر تک و عمده
                            مستقیم از کارگاه به مصرف کننده
                            زیر قیمت کل تولیدی های کشور
                            تک فروشی میکنیم اما به قیمت تعداد
                            از سماور تک یک لیتری ۱۵۰ تومان
                            نقد و قسطی انجام میگیره
                            ۳ لیتری با سرویس ۸۵۰ تومان
                            چهار لیتری سفارشی با سرویس ۹۵۰ تومان
                            یک و نیم لیتری با سرویس تومان ۴۷۰ تومان
                            ۱۱۰۰ مدل تنوع ۵۳ سال سابقه درخشان
                            آدرس : اصفهان دروازه تهران خیابان رباط اول نرسیده به پل رباط مقابل بانک رفاه داخل کوچه ۲۲ جنب مطب دکتر مختاری سماور سازی پورحیدر
                        </p>
                    </div>
                    <div className="feedback">
                        <div>
                            <MdOutlineFeedback className='me-2' fontSize={24} color='rgba(0, 0, 0, 0.56)' />
                            <span>کمک به بهبود قیمت و اطلاعات آگهی</span>
                        </div>
                        <MdKeyboardArrowLeft fontSize={24} color='rgba(0, 0, 0, 0.56)' />
                    </div>
                    <Button className='' variant='contained' color='secondary' style={ { color: 'rgba(0,0,0,.56)' } }>
                        سماور، چای ساز و قهوه ساز
                    </Button>
                    <Button className='my-3 d-block' variant='contained' color='secondary' style={ { color: 'rgba(0,0,0,.56)' } }>
                        سماور، چای ساز و قهوه ساز در دستگرده
                    </Button>
                </div>
                <div className="col-6 offset-1">
                    {/*<Slider />*/}
                    <br/>
                    <br/>
                    <div className="note">
                        <div className="input-parent">
                            <textarea className='textarea input py-2 px-3' value={noteValue} name="note" id="note" rows={3} placeholder='یادداشت شما...' style={ { height: 'unset' } } onChange={ (event) => setNoteValue(event.target.value)}></textarea>
                            {
                                noteValue &&
			                    <IconButton className='textarea-clear' size='small' component="label" onClick={ () => setNoteValue('') }>
				                    <TbTrashFilled size={15} />
			                    </IconButton>
                            }
                        </div>
                        <p>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.</p>
                    </div>
                    <div className="store">
                        <div>
                            <img src="/Images/sotre.jpg" alt=""/>
                        </div>
                        <div>
                            <p className="store-title">
                                فروشگاه سماور سازی پورحیدر شیرازی
                            </p>
                            <p style={ { fontSize: '.875rem', color: 'rgba(0,0,0,.5)', lineHeight: '28px', margin: '0' } }>
                                مشاهدهٔ همهٔ آگهی‌ها
                            </p>
                        </div>
                        <IconButton className='flex-shrink-0 ms-auto' color="default" aria-label="upload picture" component="label">
                            <MdKeyboardArrowLeft fontSize={24} />
                        </IconButton>
                    </div>
                    <div className='store-info'>
                        <p className="title">نحوهٔ خرید از فروشگاه</p>
                        <div className="field">
                            <MdOutlineLocalShipping color='rgba(0,0,0,.56)' className='me-2' fontSize={24} style={ { transform: 'rotateY(180deg)' } } />
                            <span>امکان ارسال به دیگر شهرها</span>
                        </div>
                        <div className="field">
                            <RiAccountPinCircleLine color='rgba(0,0,0,.56)' className='me-2' fontSize={24} style={ { transform: 'rotateY(180deg)' } } />
                            <span>امکان پرداخت در محل در دیگر شهرها</span>
                        </div>
                        <div className="field">
                            <HiOutlineLocationMarker color='rgba(0,0,0,.56)' className='me-2' fontSize={24} style={ { transform: 'rotateY(180deg)' } } />
                            <span>امکان مراجعهٔ حضوری به فروشگاه</span>
                        </div>
                        <div className="field border-0">
                            <span>آدرس: اصفهان دروازه تهران خیابان رباط اول نرسیده به پل رباط مقابل بانک رفاه داخل کوچه شماره 22 سماور سازی پورحیدر شیرازی</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;