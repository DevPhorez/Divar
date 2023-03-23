import '../../Css/support.css'

import { GoSearch } from 'react-icons/go'

function Support () {
    return (
        <div className='support' style={ { marginTop: '5rem' } }>
            <p className='title'>چطور می توانیم کمکتان کنیم؟</p>
            <div className='w-50 mx-auto'>
                <div className="input-parent">
                    <input type="text" className="input" placeholder='جستجو در مقالات راهنما'/>
                    <GoSearch className='search' color='rgba(0,0,0,.56)' size={20} />
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src="/Images/articles/category icon/01.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>ورود و حساب کاربری</h2>
                            <ul>
                                <li>
                                    چگونه در «دیوار» حساب کاربری بسازم؟
                                </li>
                                <li>
                                    چگونه اپلیکیشن دیوار را دانلود کنم؟
                                </li>
                                <li>
                                    آیا برای ثبت آگهی باید حساب کاربری بسازم؟
                                </li>
                                <li>
                                    چگونه وارد حساب خود شوم؟
                                </li>
                                <li>
                                    چگونه از حساب کاربری خود خارج شوم؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/02.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>ثبت و مدیریت آگهی</h2>
                            <ul>
                                <li>
                                    شرایط ثبت آگهی در دیوار
                                </li>
                                <li>
                                    چگونه در دیوار آگهی ثبت کنم؟
                                </li>
                                <li>
                                    دسته بندی های اصلی دیوار کدامند؟
                                </li>
                                <li>
                                    آیا برای ثبت آگهی باید حساب کاربری بسازم؟
                                </li>
                                <li>
                                    چطور آگهی های خود را مدیریت کنم؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/03.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>بررسی و رد آگهی</h2>
                            <ul>
                                <li>
                                    چطور از علت حذف یا رد آگهی خود با خبر شوم؟
                                </li>
                                <li>
                                    چرا آگهی من به خاطر دسته بندی غیر مرتبط رد شده است؟
                                </li>
                                <li>
                                    چرا آگهی من منتشر نشده است؟
                                </li>
                                <li>
                                    چرا آگهی من از روی دیوار حذف شده است؟
                                </li>
                                <li>
                                    پر تکرار ترین دلایل رد عکس آگهی کدامند؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/04.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>نمایش و جستجوی آگهی</h2>
                            <ul>
                                <li>
                                    چطور آگهی مورد نظر خود را دیوار پیدا کنم؟
                                </li>
                                <li>
                                    صفحه نمایش آگهی چه امکاناتی دارد؟
                                </li>
                                <li>
                                    چرا اطلاعات تماس من برای من نمایش داده نمی شود؟
                                </li>
                                <li>
                                    آگهی من در چه شهر هایی نمایش داده می شود؟
                                </li>
                                <li>
                                    چطور آگهی های ثبت شده در شهر دیگر را پیدا کنم؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/05.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>چت دیوار</h2>
                            <ul>
                                <li>
                                    چت دیوار چیست؟
                                </li>
                                <li>
                                    پستچی دیوار چیست؟
                                </li>
                                <li>
                                    قوانین استفاده از چت دیوار
                                </li>
                                <li>
                                    چرا چت دیوار من مسدود شده است؟
                                </li>
                                <li>
                                    چطور تنظیمات چت و نوتیفیکیشن را تغییر دهم؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/06.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>پرداخت و موارد مالی</h2>
                            <ul>
                                <li>
                                    آیا ثبت آگهی در دیوار هزینه دارد؟
                                </li>
                                <li>
                                    خدمات دیوار برای ارتقای آگهی (نردبان، فوری و...) چیست؟
                                </li>
                                <li>
                                    چگونه از کد هدیه استفاده کنم؟
                                </li>
                                <li>
                                    چرا وضعیت آگهی من «در انتظار پرداخت» است؟
                                </li>
                                <li>
                                    چطور در دیوار پرداخت انجام دهم؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/08.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>تخلفات و گزارش ها</h2>
                            <ul>
                                <li>
                                    فیشینگ (کلاهبرداری آنلاین از طریق درگاه بانکی غیر واقعی) چیست؟
                                </li>
                                <li>
                                    در صورت ایجاد مزاحمت در کانال‌های ارتباطی چه‌کار کنم؟
                                </li>
                                <li>
                                    چگونه مشکل یک آگهی  را گزارش کنم؟
                                </li>
                                <li>
                                    در صورت دریافت درخواست مشکوک به کلاهبرداری چه کار کنم؟
                                </li>
                                <li>
                                    چطور شکایت خود را  ثبت کنم؟
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/Images/articles/category icon/agency-panel.png" alt="ورود و حساب کاربری"/>
                        <div className='articles'>
                            <h2 className='articles-title'>دیوار کسب و کارها</h2>
                            <ul>
                                <li>
                                    فروشگاه شما در دیوار
                                </li>
                                <li>
                                    نمایشگاه خودرو شما در دیوار
                                </li>
                                <li>
                                    آژانس املاک شما در دیوار
                                </li>
                                <li>
                                    سرویس استخدام شما در دیوار
                                </li>
                                <li>
                                    پروفایل خدمات شما در دیوار
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support