import React from 'react'
import { url } from '../const'

const Member = (props) => {
    return (
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="team_grid" data-aos="fade-up" data-aos-delay="300">
            <div class="member_image">
                <img src={url.image + "team/img_2.jpg"} alt="image_not_found"/>
            </div>
            <h3 class="member_name">
                <a href="#!">{props.nama}</a>
            </h3>
            <span class="member_title">{props.kemampuan}</span>
        </div>
    </div>
    )
}

export default Member
