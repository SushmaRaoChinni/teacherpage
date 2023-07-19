import React from 'react'
import './Teacher.css';
import { Card } from 'primereact/card';
import {FaGraduationCap} from "react-icons/fa";
import {CiFacebook} from "react-icons/ci";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";

function Teacher() {
  return (
    <div> 
        <section className="container d-flex  p-relative align-items-center">
            <div className="grid">
                <div className="align-items-center">
                    <div className="col-12 ">
                        <h2 className="heading">Teacher</h2>
                    </div>
                    <div className="wrap">
                        <nav aria-label="tech">
                            <ol className="teach">
                                <li className="item active" 
                                aria-current="page">
                                     Home
                                </li>
                                <li className="item active" 
                                aria-current="page">| Teacher</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
       
        <div>
        <h1 className='title mt-8 '><FaGraduationCap />Our Teacher</h1>
        <p className='para text-center '>Our Expert Teacher</p>
          
        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/an-img-17.png"alt=""/>

         <div className="card-container flex flex-row m-8  text-center">

        <Card className="md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team09.png'
           alt="img"/>
          <h1>Howard Holmes</h1>
          <p className='text-orange-500 '>CEO & Founder</p>
          <CiFacebook /> <AiOutlineInstagram/> <BsTwitter/>
          </Card>

          <Card className="md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team10.png'
           alt="img"/>
          <h1>Ella Thompson</h1>
          <p className='text-orange-500 '>Kids Teacher</p>
          <CiFacebook/> <AiOutlineInstagram/> <BsTwitter/>
          </Card>

          <Card className="md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team11.png'
           alt="img"/>
          <h1>Vinccent Cooper</h1>
          <p className='text-orange-500 '>Kids Teacher</p>
          <CiFacebook/> <AiOutlineInstagram/> <BsTwitter/>
          </Card>

          <Card className="md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team12.png'
           alt="img"/>
          <h1>Danielle  Bryant</h1>
          <p className='text-orange-500 '>Kids Teacher</p>
          <CiFacebook/> <AiOutlineInstagram/> <BsTwitter/>
          
          </Card> 
        </div>
        </div>

        <div>
        <h1 className='title mt-8 '><FaGraduationCap />Our Teacher</h1>
        <p className='para text-center '>Our Expert Teacher</p>

         <div className="card-container2 flex flex-row m-8  text-center">

        <Card className="card1 md:w-25rem mr-5 flex" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team01.jpg'
           alt="img" className='img'/>
          <h1>Mona Mattews</h1>
          <p className='text-orange-500 '>CEO & Founder</p>
          <CiFacebook /> <AiOutlineInstagram/> <BsTwitter/>
          </Card>

          <Card className="card1 md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team02.jpg'
           alt="img" className='img'/>
          <h1>Dawon Crisen</h1>
          <p className='text-orange-500 '>Kids Teacher</p>
          <CiFacebook/> <AiOutlineInstagram/> <BsTwitter/>
          </Card>

          <Card className="card1 md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team03.jpg'
           alt="img" className='img'/>
          <h1>David Suarz</h1>
          <p className='text-orange-500 '>Kids Teacher</p>
          <CiFacebook/> <AiOutlineInstagram/> <BsTwitter/>
          </Card>

          <Card className="card1 md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team04.jpg'
           alt="img" className='img'/>
          <h1>Gerard Peano</h1>
          <p className='text-orange-500 '>Kids Teacher</p>
          <CiFacebook/> <AiOutlineInstagram/> <BsTwitter/>
          
          </Card> 
        </div>
        </div>

    </div>
  )
}

export default Teacher