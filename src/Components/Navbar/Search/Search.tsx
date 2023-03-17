import { Chip, IconButton } from "@mui/material";
import * as React from "react";
import {GoSearch} from "react-icons/go";
import {BsX} from "react-icons/bs";

interface Props {
    inputStatus: boolean;
    setInputStatus: React.Dispatch<boolean>;
}

function Search (props: Props) {

    const [value, setValue] = React.useState('')

    return (
        <>
            <div className="input-parent" style={ { width: 480, height: 40 } }>

                {
                    value &&
	                <IconButton className='p-0 clear' color="default" component="label" onClick={ () => setValue('') }>
		                <BsX className='pointer' fontSize={18} />
	                </IconButton>
                }
                <input className='search-input' value={value} onChange={ (event) => setValue(event.target.value) } placeholder='جستجو در همه آگهی ها' type="text" onFocus={ () => props.setInputStatus(true) } onBlur={ () => props.setInputStatus(false) }/>
                <GoSearch className='search' color='rgba(0,0,0,.32)' size={20} />

                <div className={`most-searched-box ${ props.inputStatus && 'show-box' }`}>
                    <p className='title'>بیشترین جستجو های دیوار</p>
                    <div className='d-flex flex-wrap'>
                        <Chip className='chip' onClick={ () => {} } label="خودرو سواری" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="فروش آپارتمان" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="اجاره آپارتمان" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="موبایل" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="صندلی و نیمکت" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="حیوانات" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="وسایل شخصی" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="خدمات" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="استخدام" variant="outlined" />
                        <Chip className='chip' onClick={ () => {} } label="تلویزیون" variant="outlined" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search