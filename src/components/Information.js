import React from 'react'
import { url } from '../const'

const Information = (props) => {
    return (
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card text-left">
                <div class="card-body">
                <a href="#!" class="item_image">
                    <img src={url.image + "blogs/img_1.jpg"} alt="image_not_found"/>
                </a>
                <div class="item_content">
                    <h3 class="item_title">
                        <a href="#!">{props.judul}</a>
                    </h3>
                    <p class="mb-30">
                        {props.konten}
                    </p>
                    <div class="row">
                        <div class="col-6">
                            <a href="#!" class="details_btn">Baca Lebih Lanjut <i class="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Information
