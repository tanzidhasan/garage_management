import React from "react";
import "../../styles/css/welcome.css";
import Logo from "../jsx_compo/logo";


function Welcome(){

    return(
        <>
            <div className="welcome_page">

                <div className="welcome_logo_with_nav">
                    <Logo/> 

                    {/* <div className="welcome_nav">
                        <div className="nav about">
                            About
                        </div>

                        <div className="nav services">
                            Services
                        </div>

                        <div className="nav contact">
                            Contact
                        </div>

                    </div> */}
                </div>

                {/* <div className="page_front">
                    <div className="page_front_text_1">
                        Welcome to Hasan's Garage.
                    </div>

                    <div className="page_front_text_2">
                        You would like to
                    </div>

                    <div className="page_front_option">
                        <div className="page_front_option_">
                            Repair
                        </div>

                        <div className="page_front_option_text">
                            or
                        </div>

                        <div className="page_front_option_">
                            Park
                        </div>
                    </div>

                    

                </div> */}

            </div>
            
        </>
    );
}

export default Welcome;