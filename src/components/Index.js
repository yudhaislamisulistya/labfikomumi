import React from 'react'
import { Link } from 'react-router-dom'
import { url } from '../const'
import Feature from './Feature'
// import Information from './Information'
import Service from './Service'

function Index() {
    return (
        <React.Fragment>
            <section id="banner_section" className="banner_section agency_banner deco_wrap d-flex align-items-center clearfix">
                    <div className="container w-1520">
                        <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">

                            <div className="col-lg-7 col-md-7 col-sm-8 order-last">
                                <div className="banner_image scene">
                                    <div className="big_image">
                                        <div className="layer" data-depth="0.1">
                                            <div data-aos="fade-up" data-aos-delay="500">
                                                <img src={url.image + "logo/logo_2.png"} alt="image_not_found" data-parallax='{"y" : 30}'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leaf_1">
                                        <div className="layer" data-depth="0.2">
                                            <div data-aos="fade-up" data-aos-delay="600">
                                                <img src={url.image + "banner/01_agency/shape_6.png"} alt="Leaf_Image" data-parallax='{"y" : 50}'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leaf_2">
                                        <div className="layer" data-depth="0.2">
                                            <div data-aos="fade-up" data-aos-delay="700">
                                                <img src={url.image + "banner/01_agency/shape_7.png"} alt="Leaf_Image" data-parallax='{"y" : 60}'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6 col-sm-8">
                                <div className="banner_content">
                                    <h1 className="title_text mb-30 text_effect_wrap clearfix">
                                        <span className="mb-50" data-aos="fade-up" data-aos-delay="200">Kami Adalah ICLABS&nbsp;</span>
                                        <span className="mb-50" data-aos="fade-up" data-aos-delay="200">Belajar dan Belajar Adalah Prioritas Kami</span>
                                    </h1>
                                    <p className="mb-50" data-aos="fade-up" data-aos-delay="200">
                                        Laboratorium Komputer Terpadu, Fakultas Ilmu Komputer, Universitas Muslim Indonesia.
                                    </p>
                                    <div className="btns_group ul_li" data-aos="fade-up" data-aos-delay="300">
                                        <ul className="clearfix">
                                            <li>
                                                <a href="https://recruitment.labfikom.com/" className="btn btn_border border_blue mb-2">Gabung Bersama Kami</a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/channel/UCrWS7b-_DSuAH-PmhUQrmVg">
                                                    <small className="btn btn-primary">Watch Video</small>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="deco_image bg_1" data-aos="fade-left" data-aos-delay="100">
                        <img src={url.image + "banner/01_agency/shape_1.png"} alt="spahe_not_found"/>
                    </div>
                    <div className="deco_image bg_2" data-aos="fade-left" data-aos-delay="200">
                        <img src={url.image + "banner/01_agency/shape_2.png"} alt="spahe_not_found"/>
                    </div>

                    <div className="clouds_wrap scene_1">
                        <div className="deco_image cloud_1">
                            <div className="layer" data-depth="0.2">
                                <div data-aos="fade-up" data-aos-delay="700">
                                    <img src={url.image + "banner/01_agency/shape_3.png"} alt="spahe_not_found" data-parallax='{"y" : 80}'/>
                                </div>
                            </div>
                        </div>
                        <div className="deco_image cloud_2">
                            <div className="layer" data-depth="0.2">
                                <div data-aos="fade-up" data-aos-delay="600">
                                    <img src={url.image + "banner/01_agency/shape_4.png"} alt="spahe_not_found" data-parallax='{"y" : 50}'/>
                                </div>
                            </div>
                        </div>
                        <div className="deco_image cloud_3">
                            <div className="layer" data-depth="0.1">
                                <div data-aos="fade-up" data-aos-delay="800">
                                    <img src={url.image + "banner/01_agency/shape_5.png"} alt="spahe_not_found" data-parallax='{"y" : 90}'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service_section" className="service_section sec_ptb_120 pt-0 deco_wrap clearfix">
                    <div className="container w-1520">
                        <div className="section_title text-center mb-30 c_slide_in">
                            <h3 className="sub_title mb-15">
                                <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                                    Laboratorium
                                </span>
                            </h3>
                            <h2 className="title_text mb-0">
                                <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                                    Sarana dan Prasarana
                                </span>
                            </h2>
                        </div>

                        <div className="row">
                            <Service ikon="fal fa-window" warnaIkon="icon_blue" nama="Laboratorium Rekayasa Perangkat Lunak" deskripsi=""></Service>
                            <Service ikon="fal fa-network-wired" warnaIkon="icon_red" nama="Laboratorium Jaringan Komputer" deskripsi=""></Service>
                            <Service ikon="fal fa-industry" warnaIkon="icon_orange" nama="Laboratorium Informatika Industri" deskripsi=""></Service>
                            <Service ikon="fal fa-laptop-code" warnaIkon="icon_green" nama="Laboratorium Komputasi Dasar" deskripsi=""></Service>
                            <Service ikon="fal fa-search" warnaIkon="icon_purple" nama="Laboratorium Riset 1" deskripsi=""></Service>
                            <Service ikon="fal fa-pen-nib" warnaIkon="icon_blue" nama="Laboratorium Multimedia" deskripsi=""></Service>
                            <Service ikon="fal fa-search-plus" warnaIkon="icon_orange" nama="Laboratorium Riset 2" deskripsi=""></Service>
                            <Service ikon="fal fa-microchip" warnaIkon="icon_yellow" nama="Laboratorium Mikrocontroller" deskripsi=""></Service>
                        </div>
                    </div>

                    <div className="deco_image dot_image_1" data-aos="fade-up" data-aos-delay="300">
                        <img src={url.image + "shapes/shape_25.png"} alt="image_not_found" data-parallax='{"y" : 90}'/>
                    </div>
                </section>



                {/* <div className="container" data-aos="fade-up" data-aos-delay="300">
                    <hr className="m-0"/>
                </div> */}


                <section id="feature_section" class="feature_section bg_gradient_blue sec_ptb_120 clearfix">
					<div class="container w-1520">
						<div class="section_title text-center mb-30" data-aos="fade-up" data-aos-delay="300">
							<h3 class="sub_title text-white mb-15 c_slide_in">
                                Laboratorium
							</h3>
							<h2 class="title_text text-white mb-0 c_slide_in">
                                Kompetensi Laboran dan Asisten
							</h2>
						</div>

						<div class="row mb-80 justify-content-lg-between">
                            <Feature nama="Kompetensi Kepribadian" ikon="fal fa-user-graduate" warnaIkon="bg_gradient_blue"></Feature>
                            <Feature nama="Kompetensi Sosial" ikon="fal fa-people-carry" warnaIkon="bg_gradient_green"></Feature>
                            <Feature nama="Kompetensi Administratif" ikon="fal fa-file" warnaIkon="bg_gradient_red"></Feature>
                            <Feature nama="Kompetensi Profesional" ikon="fal fa-user-tie" warnaIkon="bg_gradient_orange"></Feature>
						</div>

						<div class="btn_wrap text-center" data-aos="fade-up" data-aos-delay="100">
                            <Link to="/tamu/laboratorium/kompetensi-laboran-dan-asisten" className="btn btn-white text-white btn_border border_brinjal">Lebih Detail</Link>
						</div>
					</div>
				</section>

                <section id="feature_section" class="feature_section sec_ptb_120 deco_wrap clearfix">
					<div class="container">
                    <div class="feature_item">
							<div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
								<div class="col-lg-4 col-md-7 col-sm-9">
									<div class="feature_image_14 scene_1">
										<div class="big_image">
											<div class="layer" data-depth="0.2">
												<div data-aos="fade-up" data-aos-delay="100">
													<img src={url.image + "features/img_33.png"} alt="image_not_found" data-parallax='{"y" : 30}'/>
												</div>
											</div>
										</div>
										<div class="child_image">
											<div class="layer" data-depth="0.5">
												<div data-aos="fade-up" data-aos-delay="200">
													<img src={url.image + "features/img_34.png"} alt="image_not_found" data-parallax='{"y" : 60}'/>
												</div>
											</div>
										</div>
										<div class="deco_image dot_image_1">
											<div class="layer" data-depth="0.3">
												<div data-aos="fade-up" data-aos-delay="300">
													<img src={url.image + "shapes/shape_25.png"} alt="image_not_found" data-parallax='{"y" : 70}'/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-lg-5 col-md-7 col-sm-9">
									<div class="section_title decrease_size ml--30 c_slide_in">
										<h2 class="title_text mb-30 c_slide_in_wrap1" data-aos="fade-up" data-aos-delay="300">
                                            Alur Pembayaran Praktikum
										</h2>

										<div class="child_feature_2 clearfix" data-aos="fade-up" data-aos-delay="300">
											<div class="item_icon icon_purple">
												<i class="icon-ring"></i>
											</div>
											<div class="item_content">
												<h3 class="item_title">Pertama</h3>
												<p class="mb-0">
                                                    Pembayaran lab diwajibkan bagi mahasiswa yang mengulang atau membelanjakan ulang mata kuliah praktikum.
												</p>
											</div>
										</div>

										<div class="child_feature_2 clearfix" data-aos="fade-up" data-aos-delay="400">
											<div class="item_icon icon_yellow">
												<i class="icon-verified-avatar"></i>
											</div>
											<div class="item_content">
												<h3 class="item_title">Kedua</h3>
												<p class="mb-0">
                                                    Mahasiswa melakukan transaksi pembayaran melalui Saudari Fatimah, dengan biaya sebesar :
                                                    <ul>
                                                        <li>Rp. 55.000/lab (Mahasiswa Reguler)</li>
                                                        <li>Rp. 90.000/lab (Mahasiswa Eksekutif)</li>
                                                    </ul>
												</p>
											</div>
										</div>

										<div class="child_feature_2 clearfix" data-aos="fade-up" data-aos-delay="400">
											<div class="item_icon icon_purple">
												<i class="icon-verified-avatar"></i>
											</div>
											<div class="item_content">
												<h3 class="item_title">Ketiga</h3>
												<p class="mb-0">
                                                    Mahasiswa melakukan Registrasi Ulang Praktikum melalui <a href="https://bit.ly/registrasiulang_labfikomumi" target="blank_">Google Form</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
                    </div>
                </section>

                <div className="container" data-aos="fade-up" data-aos-delay="300">
                    <hr className="m-0 mb-20 "/>
                </div>

                <section id="service_section" className="service_section sec_ptb_120 pt-0 deco_wrap clearfix">
                    <div className="container w-1520">
            ``            <div className="section_title text-center mb-30 c_slide_in">
                            <h3 className="sub_title mb-15">
                                <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                                    Laboratorium
                                </span>
                            </h3>
                            <h2 className="title_text mb-0">
                                <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                                    Informasi
                                </span>
                            </h2>
                        </div>

                        <div className="row">
                            {/* <Information judul="Pembayaran Lab 2020" konten="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"></Information>
                            <Information judul="Pembayaran Lab 2021" konten="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"></Information>
                            <Information judul="Pembayaran Lab 2022" konten="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"></Information> */}
                        </div>
                    </div>

                    <div className="deco_image dot_image_1" data-aos="fade-up" data-aos-delay="300">
                        <img src={url.image + "shapes/shape_25.png"} alt="image_not_found" data-parallax='{"y" : 90}'/>
                    </div>
                </section>



        </React.Fragment>
    )
}

export default Index
