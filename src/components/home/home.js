import React, { Component } from 'react'
import {Redirect,Link} from "react-router-dom";
import { FaReact } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { FaUserCircle} from 'react-icons/fa';
import { FaAirbnb } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import {FaRegFolderOpen } from 'react-icons/fa';
import { GoNote } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import {TiMessages } from 'react-icons/ti';
import { FiSettings } from 'react-icons/fi';
import { IoMdMenu } from 'react-icons/io';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {GiSandsOfTime} from 'react-icons/gi';
import {FaTasks} from 'react-icons/fa';
import {GoComment} from 'react-icons/go';
import {TiDocumentText} from 'react-icons/ti';

class home extends Component {
    constructor(props) {
        super(props)
    const token=localStorage.getItem("token")
    let loggedIn=true
    if(token == null){
        loggedIn=false
    }
    this.state={
        loggedIn
    }
    }
    
    render() {
        if(this.state.loggedIn ===false){
            return <Redirect to="/"/>
        }
        return (
            <div>
               <div className="outer1">
                <div className="left">
               <h1 className="hea"><span className="re"><FaReact/></span>Reactjs</h1> <span className="se"><FiSearch/></span> <input type="text" className="sea" placeholder="Search for Project and Tasks"/>
               </div>
               <div className="right">
                   <button>New Project</button>
                   <span className="con"><FaBell/></span>
                <Link to="/">  <span  className="con"><FaUserCircle/></span>
                </Link> 
               </div>
               </div>
            
            <div className="outer2">
                < div className="side">
                    <div className="logo"><FaAirbnb/></div><div className="title"><p>Airbnd</p>
                    <p className="p1">Administrator</p>
                    
                    </div>
                    <div>
                        <ul>
                            <li><span className="icon"><AiOutlineHome /></span>Home</li>
                            <li><span className="icon"><FaRegFolderOpen /></span>projects</li>
                            <li><span className="icon"><GoNote /></span>Notes</li>
                            <li><span className="icon"><FaRegUser/></span>Members</li>
                            <li><span className="icon"><FaUsers/></span>Teams</li>
                            <li><span className="icon"><TiMessages/></span>Helps & Support</li>
                            <li><span className="icon"><FiSettings/></span>Settings</li>
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <div className="box0">
                        <div className="box1">
                        <p className="par">Frequently Asked Question</p>
                        <select><option>All Project</option></select>
                    </div>
                    
                    <div className="bor2">
                      
                       <span className="icon1"><IoMdMenu/></span>
    
                    </div>
                    
                    </div>
                    <div className="bg">

                    <div className="bor">
                        <div class="box3"><p className="par">Project In-Set</p></div>
                        <div class="box4"><select className="sele"><option>Sort by Draft Status</option></select></div>
                    </div>
                    
                     <div className="boxs">
                         <div className="c1">
                         <p className="text-center pl"><IoIosAddCircleOutline/></p>
                         <p className=" text-center pl1">Project</p>

                         </div>
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            <p className="text-center tc2">creative on mar 12th 19</p>
                            <p className="tc3">Expires in 30 day</p>
                            </div>
                            <div className="do">
                                <p className="tc4"><GiSandsOfTime/> due on mar 12th 19</p>
                                <p  className="tc4"> <FaUserCircle/> You</p>
                            </div >
                            <div className="g1">
                                <p className="left">Draft</p><p className="right">Approval pending</p>
                            </div>

                         </div>
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            <p className="text-center tc2">creative on mar 12th 19</p>
                            <p className="tc3">Expires in 30 day</p>
                            </div>
                            <div className="do">
                                <p className="tc4"><GiSandsOfTime/> due on mar 12th 19</p>
                                <p  className="tc4"> <FaUserCircle/> You</p>
                            </div >
                            <div className="g1">
                                <p className="left">Draft</p><p className="right">Approval pending</p>
                            </div>

                         </div>
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            <p className="text-center tc2">creative on mar 12th 19</p>
                            <p className="tc3">Expires in 30 day</p>
                            </div>
                            <div className="do">
                                <p className="tc4"><GiSandsOfTime/> due on mar 12th 19</p>
                                <p  className="tc4"> <FaUserCircle/> You</p>
                            </div >
                            <div className="g1">
                                <p className="left">Draft</p><p className="right">Approval pending</p>
                            </div>

                         </div>
                     </div>
                     <div className="bor">
                        <div class="box3"><p className="par">Project </p></div>
                        <div class="box4"><select className="sele"><option>Sort by Draft Status</option></select></div>
                    </div>
                    <div className="boxs">
                         
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            
                            <p className="tc4 text-center"><GiSandsOfTime/> due on mar 12th 19</p>
                            </div>
                            <div className="do">
                                <p  className="tc4"> <FaTasks/> 9 Tasks</p>
                                <p  className="tc4"> <GoComment/> 4 Comments</p>
                                <p  className="tc4"> <TiDocumentText/> 12 Documents</p>
                            </div >
                            <div className="g1">
                                <p className="left"><FaUserCircle/>user</p><p className="right0">active</p>
                            </div>

                         </div>
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            
                            <p className="tc4 text-center"><GiSandsOfTime/> due on mar 12th 19</p>
                            </div>
                            <div className="do">
                                <p  className="tc4"> <FaTasks/> 9 Tasks</p>
                                <p  className="tc4"> <GoComment/> 4 Comments</p>
                                <p  className="tc4"> <TiDocumentText/> 12 Documents</p>
                            </div >
                            <div className="g1">
                                <p className="left"><FaUserCircle/>user</p><p className="right0">active</p>
                            </div>

                         </div>
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            
                            <p className="tc4 text-center"><GiSandsOfTime/> due on mar 12th 19</p>
                            </div>
                            <div className="do">
                                <p  className="tc4"> <FaTasks/> 9 Tasks</p>
                                <p  className="tc4"> <GoComment/> 4 Comments</p>
                                <p  className="tc4"> <TiDocumentText/> 12 Documents</p>
                            </div >
                            <div className="g1">
                                <p className="left"><FaUserCircle/>user</p><p className="right0">active</p>
                            </div>

                         </div>
                         <div className="c1">
                            <div className="do"><h5 className="text-center tc1">market Analysisn</h5>
                            
                            <p className="tc4 text-center"><GiSandsOfTime/> due on mar 12th 19</p>
                            </div>
                            <div className="do">
                                <p  className="tc4"> <FaTasks/> 9 Tasks</p>
                                <p  className="tc4"> <GoComment/> 4 Comments</p>
                                <p  className="tc4"> <TiDocumentText/> 12 Documents</p>
                            </div >
                            <div className="g1">
                                <p className="left"><FaUserCircle/>user</p><p className="right0">active</p>
                            </div>

                         </div>
                         
                         
                            
                         
                           
                            

                         </div>
                     </div>

                </div>
               
                
            
            </div>
        
            </div>
        )
    }
}

export default home
