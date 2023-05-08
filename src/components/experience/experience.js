import React from "react";
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
import { Slide } from "react-awesome-reveal";

<Slide direction="left"></Slide>
export const Experience = () =>{
    return(
        <section id="experience">
            <h5 className="text-[#191919] dark:text-[#fff]">What Skills I Have</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                
                <div className="experience_frontend bg-transparent border-2 border-[#4dbfff]">
                    <h3>
                        Hard Skill
                    </h3>
                    <div className="experience_content ">
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Copywritting</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                             </div>
                            
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>

                             <h4>Creative Writting</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Email Copywritting</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>

                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Excel</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>

                             </div>
                        </article>
                        
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>

                             <h4>Ebook Creator</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                             </div>
                        </article>

                    </div>
                   
                </div>
               
               
                
                <div className="experience_Backend bg-transparent border-2 border-[#4dbfff]">
                    <h3>
                        Soft Skills
                    </h3>
                    <div className="experience_content "> 
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                                
                             <h4>Decision</h4>
                             {/* <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">basics</small> */}
                            </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Time Management</h4>
                             {/* <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small> */}
                                
                            </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Multi Tasking</h4>
                             {/* <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">basics</small> */}
                                
                                </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Critical Thinking</h4>
                             {/* <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small> */}
                                
                                </div>
                        </article>
                       
                    </div>
                   
                </div>
            </div>
        </section>

    


    )
   
}