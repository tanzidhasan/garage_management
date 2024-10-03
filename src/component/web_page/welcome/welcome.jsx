import React from "react";

import "./welcome.css";
import Navbar from "../../page_compo/navbar/navbar";


export default function Welcome(){

    return(
        <>

            <Navbar />
            <div className="welcome_page">


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
