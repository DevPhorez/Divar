import React from "react";

import RightSide from "../../Components/Right Side/RightSide";
import Posts from "../../Components/Posts/Posts";

function Home () {
    return (
        <div className="container-fluid" style={ { marginTop: '5rem' } }>
            <div className="row">
                <div className="col-3">
                    <div className='position-relative' style={ { width: '100%' } }>
                        <RightSide />
                    </div>
                </div>
                <div className="col-9 p-0">
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Home