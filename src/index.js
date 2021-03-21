/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/animate.css';
import './styles/aos.css';
import './styles/app.css';
import './styles/bootstrap.min.css';
import './styles/magnific-popup.css';
import './styles/owl.theme.default.min.css';
import './styles/splitting.css';
import './styles/style.css';
import './styles/fontawesome-all.css';
import './styles/icomoon.css';
import './styles/swiper.css';
import './styles/themify-icons.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Index from './components/Index';
import VisiMisi from './pages/VisiMisi';
import Prosedur from './pages/praktikum/Prosedur';
import KegiatanAsisten from './pages/praktikum/KegiatanAsisten';
import ModelPembelajaran from './pages/praktikum/ModelPembelajaran';
import PenanggungJawab from './pages/laboratorium/PenanggungJawab';
import Asisten from './pages/laboratorium/Asisten';
import Kegiatan from './pages/laboratorium/Kegiatan';
import KompetensiLaboranDanAsisten from './pages/laboratorium/KompetensiLaboranDanAsisten';
import SaranaDanPrasarana from './pages/laboratorium/SaranaDanPrasarana';
import TentangKami from './pages/TentangKami';
import Kontak from './pages/Kontak';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";





function Utama() {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
    }, []);
  return (
      <React.Fragment>

          <div className="body_wrap">
              <div id="thetop"></div>
              <div id="backtotop">
                  <a href="#" id="scroll">
                      <i className="fal fa-arrow-up"></i>
                      <i className="fal fa-arrow-up"></i>
                  </a>
              </div>
              <Header></Header>
              <Sidebar></Sidebar>
              <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route exact path="/tamu/visi-dan-misi" component={VisiMisi} />
                  <Route exact path="/tamu/praktikum/prosedur" component={Prosedur} />
                  <Route exact path="/tamu/praktikum/kegiatan-asistensi" component={KegiatanAsisten} />
                  <Route exact path="/tamu/praktikum/model-pembelajaran" component={ModelPembelajaran} />
                  <Route exact path="/tamu/laboratorium/penanggung-jawab" component={PenanggungJawab} />
                  <Route exact path="/tamu/laboratorium/asisten" component={Asisten} />
                  <Route exact path="/tamu/laboratorium/kegiatan" component={Kegiatan} />
                  <Route exact path="/tamu/laboratorium/kompetensi-laboran-dan-asisten" component={KompetensiLaboranDanAsisten} />
                  <Route exact path="/tamu/laboratorium/sarana-dan-prasarana" component={SaranaDanPrasarana} />
                  <Route exact path="/tamu/tentang-kami" component={TentangKami} />
                  <Route exact path="/tamu/kontak" component={Kontak} />
              </Switch>
              <Footer></Footer>
          </div>
      </React.Fragment>
  );
}

ReactDOM.render(<BrowserRouter><Utama/></BrowserRouter>, document.getElementById('root'));
