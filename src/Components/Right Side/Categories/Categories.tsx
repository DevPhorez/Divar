import { TbBuildingCommunity, TbLamp } from 'react-icons/tb'
import { BiCar } from 'react-icons/bi'
import { AiOutlineMobile } from 'react-icons/ai'
import { RiPaintBrushLine } from 'react-icons/ri'
import { FiWatch } from 'react-icons/fi'
import { GiRollingDices } from 'react-icons/gi'
import { HiOutlineUsers } from 'react-icons/hi'
import { TfiBag } from 'react-icons/tfi'
import { SlWrench } from 'react-icons/sl'


function Categories () {
    return (
        <div className='categories'>
            <h2 className='categories-title'>دسته ها</h2>
            <ul>
                <li>
                    <TbBuildingCommunity className='me-2' size={20} />
                    املاک
                </li>
                <li>
                    <BiCar className='me-2' size={20} />
                    وسایل نقلیه
                </li>
                <li>
                    <AiOutlineMobile className='me-2' size={20} />
                    کالای دیجیتال
                </li>
                <li>
                    <TbLamp className='me-2' size={20} />
                    خانه و آشپزخانه
                </li>
                <li>
                    <RiPaintBrushLine className='me-2' size={20} />
                    خدمات
                </li>
                <li>
                    <FiWatch className='me-2' size={20} />
                    وسایل شخصی
                </li>
                <li>
                    <GiRollingDices className='me-2' size={20} />
                    سرگرمی و فراغت
                </li>
                <li>
                    <HiOutlineUsers className='me-2' size={20} />
                    اجتماعی
                </li>
                <li>
                    <SlWrench className='me-2' size={20} />
                    تجهیزات و صنعتی
                </li>
                <li>
                    <TfiBag className='me-2' size={20} />
                    استخدام و کاریابی
                </li>
            </ul>
        </div>
    )
}

export default Categories