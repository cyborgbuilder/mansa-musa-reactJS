import React from 'react'
import styled from 'styled-components';
import {MdFacebook} from "react-icons/md";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";


const ItemCard = (props) => {

    return (
        

        <div class="card-group  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
  <div class="card cardborder p-0 overflow-hidden h-100 shadow">
  <img src={props.img} class="card-img-top img-fluid"/>
  <div class="card-body">
                         <h5 class="card-title imgcrd" color='white'>{props.title}</h5>
                       <p class="card-text imgcrd"color='white'>{props.desc}
                       </p>
                       <div>
                       <MdFacebook className="hov" size="2em" color="#F1BA63" padding="30px"/>
                     <AiOutlineTwitter className="hov" size="2em" color="#F1BA63"/>
                       <AiFillGooglePlusCircle className="hov" size="2em" color="#F1BA63"/>
                    <AiFillLinkedin className="hov"size="2em" color="#F1BA63"/>
                    </div>
                </div>
  </div>
 
</div>
    );
};

export default ItemCard ;


