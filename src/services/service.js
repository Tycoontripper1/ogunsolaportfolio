import React from 'react'
import '../services/service.css'
import {BiCheck} from 'react-icons/bi'
import { Slide } from "react-awesome-reveal";
export const Service = () => {
  return (
    <section id='service'>
      <h5 className='text-[#191919] dark:text-[#fff] '>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
       <Slide>
       <article className='service bg-transparent dark:bg-[#2c2c6c]  '>
          <div className='service_head'>
            <h3>Graphics Design</h3>
          </div>

          <ul className='service_list '>
            <li>
              <BiCheck className='service_list-icon' />
              <p>I deisgn flyers and albums at ease</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web Banners</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Posters</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Brochures</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>PowerPoint Templates</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Logo Design</p>
              </li>
          </ul>
        </article> 
       </Slide>
        <article className='service'>
          <div className='service_head'>
            <h3>CopyWriting</h3>
          </div>

          <ul className='service_list '>
            <li>
              <BiCheck className='service_list-icon' />
              <p>SEO content Writing</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Research on relevant topic</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ghost Writing and ghost publishing</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Inprove search engine rankings</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ebook Creation</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web optimization</p>
              </li>
           
          </ul>
        </article> 
       <Slide direction='right'>
       <article className='service'>
          <div className='service_head'>
            <h3>Digital Marketing</h3>
          </div>

          <ul className='service_list '>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Boost Local SEO</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Build your brand to increase Revenue</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Increase The Traffic To Your Sites</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Link Building</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Video editing</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Technical Seo</p>
              </li>
          </ul>
        </article>
       </Slide>
      </div>
    </section>
  )
}
 