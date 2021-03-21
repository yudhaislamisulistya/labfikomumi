import React from 'react'
import { url } from '../const'

const Feature = (props) => {
    return (
        <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="service_primary text-center" data-aos="fade-up" data-aos-delay="300">
                <div class="icon_wrap">
                    <div class={"item_icon " + props.warnaIkon}>
                        <i class={props.ikon}></i>
                    </div>
                    <span class="icon_deco icon_deco_1">
                        <img src={url.image + "shapes/shape_3.png"} alt="shape_not_found"/>
                    </span>
                    <span class="icon_deco icon_deco_2">
                        <img src={url.image + "shapes/shape_4.png"} alt="shape_not_found"/>
                    </span>
                    <span class="icon_deco icon_deco_3">
                        <img src={url.image + "shapes/shape_5.png"} alt="shape_not_found"/>
                    </span>
                    <span class="icon_deco icon_deco_4">
                        <img src={url.image + "shapes/shape_6.png"} alt="shape_not_found"/>
                    </span>
                </div>
                <h4 class="item_title text-white">
                    {props.nama}
                </h4>
            </div>
        </div>
    )
}

export default Feature
