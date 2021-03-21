import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { url } from '../../const'

function ModelPembelajaran() {
    return (
        <React.Fragment>
            <Breadcrumb halaman="Model Pembelajaran Praktikum" deskripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
					<div className="container">

						<div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
							<h2 className="title_text mb-0">Model Pembelajaran</h2>
						</div>

						<div className="row mb-80">
							<div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-delay="400">
								<div className="service_boxed_1">
									<div className="icon_wrap">
										<div className="item_icon bg_gradient_blue">
											<i className="icon-graph"></i>
										</div>
										<span className="icon_deco icon_deco_1">
											<img src={url.image + "shapes/shape_3.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_2">
											<img src={url.image + "shapes/shape_4.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_3">
											<img src={url.image + "shapes/shape_5.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_4">
											<img src={url.image + "shapes/shape_6.png"} alt="shape_not_found"/>
										</span>
									</div>
									<h3 className="item_title">
										<a href="case_study_details.html">Latihan Jangka Pendek</a>
									</h3>
									<p className="mb-50">
                                        Dalam pembelajaran ini mahasiswa diberikan pertanyaan atau masalah untuk dipecahkan kemudian komputer akan memberikan respon atas jawaban yang diberikan mahasiswa.
									</p>
									<a href="case_study_details.html" className="details_btn"><i className="icon-arrow-right-style-1"></i></a>
								</div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-delay="500">
								<div className="service_boxed_1">
									<div className="icon_wrap">
										<div className="item_icon bg_gradient_green">
											<i className="icon-marketing"></i>
										</div>
										<span className="icon_deco icon_deco_1">
											<img src={url.image + "shapes/shape_3.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_2">
											<img src={url.image + "shapes/shape_4.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_3">
											<img src={url.image + "shapes/shape_5.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_4">
											<img src={url.image + "shapes/shape_6.png"} alt="shape_not_found"/>
										</span>
									</div>
									<h3 className="item_title">
										<a href="case_study_details.html">Tutorial</a>
									</h3>
									<p className="mb-50">
                                        Model pembelajaran ini menyediakan rancangan pembelajaran yang kompleks berisi materi pembelajaran, latihan yang disertai umpan balik.
									</p>
									<a href="case_study_details.html" className="details_btn"><i className="icon-arrow-right-style-1"></i></a>
								</div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-delay="600">
								<div className="service_boxed_1">
									<div className="icon_wrap">
										<div className="item_icon bg_gradient_orange">
											<i className="icon-paper-plane"></i>
										</div>
										<span className="icon_deco icon_deco_1">
											<img src={url.image + "shapes/shape_3.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_2">
											<img src={url.image + "shapes/shape_4.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_3">
											<img src={url.image + "shapes/shape_5.png"} alt="shape_not_found"/>
										</span>
										<span className="icon_deco icon_deco_4">
											<img src={url.image + "shapes/shape_6.png"} alt="shape_not_found"/>
										</span>
									</div>
									<h3 className="item_title">
										<a href="case_study_details.html">Simulasi</a>
									</h3>
									<p className="mb-50">
                                        Model pembelajaran ini menyajikan pembelajaran dengan sistem suatu proses peniruan dari sesuatu yang nyata dalam bentuk animasi.
									</p>
									<a href="case_study_details.html" className="details_btn"><i className="icon-arrow-right-style-1"></i></a>
								</div>
							</div>
						</div>

					</div>
				</section>

                <div className="container" data-aos="fade-up" data-aos-delay="300">
					<hr className="m-0"/>
				</div>

        </React.Fragment>
    )
}

export default ModelPembelajaran
