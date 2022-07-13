// import React from 'react';
import React, { useState } from "react";
import sliders from '../../Assets/sliders.svg';
import x from '../../Assets/x.svg';

function Sidebar({ showsidebar, sidebarTogglecopy }) {

    const sidebarToggle = () => {
        sidebarTogglecopy(!showsidebar);
    }
    const [isActive, setActive] = useState(false);


    return (

        <React.Fragment>
            <aside className={`${showsidebar ? ' herobanner sideBarToggle' : 'herobanner sideBar-active'}`} >

                <div className='aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 sidebar-demo'>
                    <p>Clothing / Women’s / Outerwear</p>

                    <div className="filter-icon">
                        <h3>Filters</h3>
                        <img src={x} onClick={sidebarToggle} className='cross_icon' alt="cross icon" aria-label="cross filter icon" />
                    </div>
                    <hr />
                    <div className='Attribute-first'>
                        <h4>Attribute</h4>

                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <a href='#'>show more</a>
                    </div>
                    <hr />
                    <div className='attribute-sec'>
                        <h4>Attribute</h4>

                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label>  option</label><br />

                    </div>
                    <hr />
                    <div className='attribute-third'>
                        <h4>Color</h4>
                        <div className='Row1'>
                            <div className='R1'></div>
                            <div className='R2'></div>
                            <div className='R3'></div>
                            <div className='R4'></div>
                        </div>
                        <div className='Row2'>
                            <div className='R5'></div>
                            <div className='R6'></div>
                            <div className='R7'></div>
                            <div className='R8'></div>
                        </div>
                        <div className='Row3'>
                            <div className='R9'></div>
                            <div className='R10'></div>

                        </div>
                    </div>
                    <hr />

                    <div className='attribute-four'>
                        <h4>Attribute</h4>

                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />
                        <input type="checkbox" aria-label="checkbox" />
                        <label >  option</label><br />

                    </div>
                    <hr />
                </div>


            </aside>
        </React.Fragment>
    )
}

export default Sidebar;