import React, {useEffect} from 'react'
import Breadcrumb from '../../components/Breadcrumb'
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


function Kegiatan() {

    useEffect(() => {
        $(document).ready(function () {
            $('#kegiatanPraktikumLama').DataTable({
                "scrollY": true,
            });
            $('#kegiatanPraktikumBaru').DataTable({
                "scrollY": true,
            });
        });
    }, []);

    // const [listPracticum, setListPracticum] = useState([]);

    // useEffect(() => {
    //     async function fetchDataPracticum(){
    //         const res = await practicumService.listPracticum();
    //         console.log(res.data);
    //         setListPracticum(res.data)
    //     }

    //     fetchDataPracticum();
    // }, []);

    /* {
    listPracticum.map((item)=>{
        return(
            <tr>
                <th>{item.id}</th>
                <td>Teknik Informatika</td>
                <td>{item.details}</td>
                <td>Informatika Industri</td>
                <td>Semester {item.semester}</td>
            </tr>
        )
    })
    } */

    return (
        <React.Fragment>
            <Breadcrumb halaman="Kegiatan Laboratorium" deskripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
                <div className="container">
                    <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="title_text mb-0">Kegiatan Laboratorium Praktikum Lama Semester Genap 2020/2021</h2>
                    </div>

                    <div className="row mb-20" data-aos="fade-up" data-aos-delay="400">
                        <div className="col-md-12 m-auto">
                            <table class="table table-striped" id="kegiatanPraktikumLama" >
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Hari</th>
                                    <th scope="col">Jam</th>
                                    <th scope="col">Mata Praktikum</th>
                                    <th scope="col">Semester</th>
                                    <th scope="col">Asisten 1</th>
                                    <th scope="col">Asisten 2</th>
                                    <th scope="col">Link Wa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr><td>1</td><td>Senin</td><td>08.00 - 09.40</td><td>C2</td><td>Basis Data 1</td><td>Kasmira</td><td>Nurul A'ayunnisa</td><td><a target="_blank" href="https://chat.whatsapp.com/C2lVX8e6hsE4XcpomslNpx">Whatsapp</a></td></tr>
                                <tr><td>2</td><td>Sabtu</td><td>08.00 - 09.40</td><td>D1</td><td>Basis Data 1</td><td>Ericha Apriliyani</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/GgWkcesxjLbDLka1Qwtq12">Whatsapp</a></td></tr>
                                <tr><td>3</td><td>Senin</td><td>09.40 - 11.20</td><td>C2</td><td>Pemrograman Java Lanjut</td><td>Yudha Islami Sulistya</td><td>Kasmira</td><td><a target="_blank" href="https://chat.whatsapp.com/JoiDHzs7jKY5zszblrSXE0">Whatsapp</a></td></tr>
                                <tr><td>4</td><td>Selasa</td><td>09.40 - 11.20</td><td>C3</td><td>Pemrograman Java Lanjut</td><td>Yudha Islami Sulistya</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/LC0tZCAX3f7HzZrduV1G4E">Whatsapp</a></td></tr>
                                <tr><td>5</td><td>Senin</td><td>14.40 - 16.20</td><td>C2</td><td>Mobile Programming</td><td>Yudha Islami Sulistya</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/BwkCHVgNzzi9uRFzdSh6vW">Whatsapp</a></td></tr>
                                <tr><td>6</td><td>Selasa</td><td>08.00 - 09.40</td><td>C2</td><td>Jaringan Komputer</td><td>Taufik Baharsyah</td><td>Ikraam Ar Razaaq</td><td><a target="_blank" href="https://chat.whatsapp.com/D4fbVj3Mhh7Hpk9l1VbwPz">Whatsapp</a></td></tr>
                                <tr><td>7</td><td>Selasa</td><td>13.00 - 14.40</td><td>C3</td><td>Jaringan Komputer</td><td>Taufik Baharsyah</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/EWes0CuqQg6KgdOhERtrOn">Whatsapp</a></td></tr>
                                <tr><td>8</td><td>Sabtu</td><td>09.40 - 11.20</td><td>D1</td><td>Jaringan Komputer</td><td>Ikraam Ar Razaaq</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/BriIHSKoMk09imMiU4RAwN">Whatsapp</a></td></tr>
                                <tr><td>9</td><td>Selasa</td><td>14.40 - 16.20</td><td>C2</td><td>Pemrograman Terstruktur</td><td>Andi Muchlisa</td><td>Nurul A'ayunnisa</td><td><a target="_blank" href="https://chat.whatsapp.com/IaMiVOxwB9aDjvnGdZ8AhT">Whatsapp</a></td></tr>
                                <tr><td>10</td><td>Rabu</td><td>08.00 - 09.40</td><td>C2</td><td>Struktur Data</td><td>Muhammad Trisnandar</td><td>Ericha Apriliyani</td><td><a target="_blank" href="https://chat.whatsapp.com/FdhF6y5vAvEK9y52yCj43W">Whatsapp</a></td></tr>
                                <tr><td>11</td><td>Rabu</td><td>13.00 - 14.40</td><td>C3</td><td>Struktur Data</td><td>Muhammad Trisnandar</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/LCGCXnzXqx7ItVra8VQcll">Whatsapp</a></td></tr>
                                <tr><td>12</td><td>Rabu</td><td>14.40 - 16.20</td><td>C2</td><td>Pemrograman Visual</td><td>La Saiman</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/LsDTsSdVx9i0T8vOA0PS46">Whatsapp</a></td></tr>
                                <tr><td>13</td><td>Kamis</td><td>08.00 - 09.40</td><td>C2</td><td>Pemrograman Web</td><td>La Saiman</td><td>Andi Muchlisa</td><td><a target="_blank" href="https://chat.whatsapp.com/JByj760UC6RGu8508tYlJN">Whatsapp</a></td></tr>
                                <tr><td>14</td><td>Kamis</td><td>13.00 - 14.40</td><td>C3</td><td>Pemrograman Web</td><td>La Saiman</td><td>-</td><td><a target="_blank" href="https://chat.whatsapp.com/IF4ErrPNN5cIpthip4q7nO">Whatsapp</a></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container" data-aos="fade-up" data-aos-delay="300">
                <hr className="m-0"/>
            </div>

            <section id="service_section" className="service_section sec_ptb_120 clearfix">
                <div className="container">
                    <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="title_text mb-0">Kegiatan Laboratorium Praktikum Kurikulum 2021 Semester Genap 2020/2021</h2>
                    </div>

                    <div className="row mb-20" data-aos="fade-up" data-aos-delay="400">
                        <div className="col-md-12 m-auto">
                            <table class="table table-striped" id="kegiatanPraktikumBaru" >
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>PRODI</th>
                                        <th>HARI</th>
                                        <th>JAM</th>
                                        <th>MATAKULIAH</th>
                                        <th>FREKUENSI</th>
                                        <th>KELAS</th>
                                        <th>DOSEN</th>
                                        <th>RUANGAN</th>
                                        <th>JUMLAH PESERTA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>1</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 1</td><td>A1</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB RPL</td><td>31</td></tr>
                                    <tr><td>2</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 1</td><td>A1</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB RPL</td><td>31</td></tr>
                                    <tr><td>3</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 2</td><td>A2</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB KOMPUTASI DASAR</td><td>34</td></tr>
                                    <tr><td>4</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 2</td><td>A2</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB KOMPUTASI DASAR</td><td>34</td></tr>
                                    <tr><td>5</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 3</td><td>A3</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>6</td><td>TI</td><td>SENIN</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 3</td><td>A3</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>7</td><td>TI</td><td>SELASA</td><td>16.20 - 18.20</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 4</td><td>A4</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB RPL</td><td>34</td></tr>
                                    <tr><td>8</td><td>TI</td><td>SENIN</td><td>16.20 - 18.20</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 4</td><td>A4</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB RPL</td><td>34</td></tr>
                                    <tr><td>9</td><td>TI</td><td>SENIN</td><td>08.00 - 10.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 5</td><td>A5</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB KOMPUTASI DASAR</td><td>33</td></tr>
                                    <tr><td>10</td><td>TI</td><td>SELASA</td><td>08.00 - 10.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 5</td><td>A5</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB KOMPUTASI DASAR</td><td>33</td></tr>
                                    <tr><td>11</td><td>TI</td><td>SENIN</td><td>08.00 - 10.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 6</td><td>A6</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB MULTIMEDIA</td><td>36</td></tr>
                                    <tr><td>12</td><td>TI</td><td>SELASA</td><td>08.00 - 10.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 6</td><td>A6</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB MULTIMEDIA</td><td>36</td></tr>
                                    <tr><td>13</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 7</td><td>B1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB KOMPUTASI DASAR</td><td>34</td></tr>
                                    <tr><td>14</td><td>TI</td><td>SENIN</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 7</td><td>B1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB KOMPUTASI DASAR</td><td>34</td></tr>
                                    <tr><td>15</td><td>TI</td><td>SENIN</td><td>08.00 - 10.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 8</td><td>B2</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB RPL</td><td>35</td></tr>
                                    <tr><td>16</td><td>TI</td><td>SELASA</td><td>08.00 - 10.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 8</td><td>B2</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB RPL</td><td>35</td></tr>
                                    <tr><td>17</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 9</td><td>B3</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB MULTIMEDIA</td><td>29</td></tr>
                                    <tr><td>18</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 9</td><td>B3</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB MULTIMEDIA</td><td>29</td></tr>
                                    <tr><td>19</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 10</td><td>C1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB MULTIMEDIA</td><td>19</td></tr>
                                    <tr><td>20</td><td>TI</td><td>SENIN</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 10</td><td>C1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB MULTIMEDIA</td><td>19</td></tr>
                                    <tr><td>21</td><td>TI</td><td>SABTU</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 11</td><td>D1</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>5</td></tr>
                                    <tr><td>22</td><td>TI</td><td>AHAD</td><td>13.00 - 15.00</td><td>Algoritma & Pemrograman 2 *</td><td>TI_ALGO2 - 11</td><td>D1</td><td>St. Hajrah Mansyur, S.Kom.,M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>5</td></tr>
                                    <tr><td>23</td><td>SI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Algoritma & Struktur Data *</td><td>SI_ASD - 1</td><td>A1</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>20</td></tr>
                                    <tr><td>24</td><td>SI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Algoritma & Struktur Data *</td><td>SI_ASD - 1</td><td>A1</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>20</td></tr>
                                    <tr><td>25</td><td>SI</td><td>SENIN</td><td>08.00 - 10.00</td><td>Algoritma & Struktur Data *</td><td>SI_ASD - 2</td><td>B1</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>10</td></tr>
                                    <tr><td>26</td><td>SI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Algoritma & Struktur Data *</td><td>SI_ASD - 2</td><td>B1</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>10</td></tr>
                                    <tr><td>27</td><td>SI</td><td>SELASA</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>SI_BD1 - 1</td><td>A1</td><td>Muhammad Arfah Asis, S.Kom., M.T</td><td>LAB INFORMATIKA INDUSTRI</td><td>22</td></tr>
                                    <tr><td>28</td><td>SI</td><td>JUMAT</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>SI_BD1 - 1</td><td>A1</td><td>Muhammad Arfah Asis, S.Kom., M.T</td><td>LAB INFORMATIKA INDUSTRI</td><td>22</td></tr>
                                    <tr><td>29</td><td>TI</td><td>RABU</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>TI_BD1 - 1</td><td>A1</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB RPL</td><td>31</td></tr>
                                    <tr><td>30</td><td>TI</td><td>KAMIS</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>TI_BD1 - 1</td><td>A1</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB RPL</td><td>31</td></tr>
                                    <tr><td>31</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>TI_BD1 - 2</td><td>A2</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB MULTIMEDIA</td><td>34</td></tr>
                                    <tr><td>32</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 2</td><td>A2</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB MULTIMEDIA</td><td>34</td></tr>
                                    <tr><td>33</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>TI_BD1 - 3</td><td>A3</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB RPL</td><td>34</td></tr>
                                    <tr><td>34</td><td>TI</td><td>KAMIS</td><td>16.20 - 18.20</td><td>Basis Data I *</td><td>TI_BD1 - 3</td><td>A3</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB RPL</td><td>34</td></tr>
                                    <tr><td>35</td><td>TI</td><td>RABU</td><td>16.20 - 18.20</td><td>Basis Data I *</td><td>TI_BD1 - 4</td><td>A4</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB RPL</td><td>34</td></tr>
                                    <tr><td>36</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 4</td><td>A4</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB RPL</td><td>34</td></tr>
                                    <tr><td>37</td><td>TI</td><td>RABU</td><td>16.20 - 18.20</td><td>Basis Data I *</td><td>TI_BD1 - 5</td><td>A5</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>33</td></tr>
                                    <tr><td>38</td><td>TI</td><td>KAMIS</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>TI_BD1 - 5</td><td>A5</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>33</td></tr>
                                    <tr><td>39</td><td>TI</td><td>RABU</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>TI_BD1 - 6</td><td>A6</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>40</td></tr>
                                    <tr><td>40</td><td>TI</td><td>KAMIS</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>TI_BD1 - 6</td><td>A6</td><td>Herman, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>40</td></tr>
                                    <tr><td>41</td><td>SI</td><td>SELASA</td><td>16.20 - 18.20</td><td>Basis Data I *</td><td>SI_BD1 - 2</td><td>B1</td><td>Muhammad Arfah Asis, S.Kom., M.T</td><td>LAB INFORMATIKA INDUSTRI</td><td>10</td></tr>
                                    <tr><td>42</td><td>SI</td><td>JUMAT</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>SI_BD1 - 2</td><td>B1</td><td>Muhammad Arfah Asis, S.Kom., M.T</td><td>LAB INFORMATIKA INDUSTRI</td><td>10</td></tr>
                                    <tr><td>43</td><td>TI</td><td>RABU</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>TI_BD1 - 7</td><td>B1</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB KOMPUTASI DASAR</td><td>34</td></tr>
                                    <tr><td>44</td><td>TI</td><td>KAMIS</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>TI_BD1 - 7</td><td>B1</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB KOMPUTASI DASAR</td><td>34</td></tr>
                                    <tr><td>45</td><td>TI</td><td>RABU</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 8</td><td>B2</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>35</td></tr>
                                    <tr><td>46</td><td>TI</td><td>KAMIS</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>TI_BD1 - 8</td><td>B2</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>35</td></tr>
                                    <tr><td>47</td><td>TI</td><td>RABU</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 9</td><td>B3</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>48</td><td>TI</td><td>KAMIS</td><td>08.00 - 10.00</td><td>Basis Data I *</td><td>TI_BD1 - 9</td><td>B3</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>49</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Basis Data I *</td><td>TI_BD1 - 10</td><td>C1</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>50</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 10</td><td>C1</td><td>Andi Ulfa Tenripada, S,Kom., M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>51</td><td>TI</td><td>SABTU</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 11</td><td>D1</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB INFORMATIKA INDUSTRI</td><td>4</td></tr>
                                    <tr><td>52</td><td>TI</td><td>AHAD</td><td>10.00 - 12.00</td><td>Basis Data I *</td><td>TI_BD1 - 11</td><td>D1</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB INFORMATIKA INDUSTRI</td><td>4</td></tr>
                                    <tr><td>53</td><td>SI</td><td>JUMAT</td><td>10.00 - 12.00</td><td>Multimedia System *</td><td>SI_MS - 1</td><td>A1</td><td>Huzain Azis, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>21</td></tr>
                                    <tr><td>54</td><td>SI</td><td>SABTU</td><td>10.00 - 12.00</td><td>Multimedia System *</td><td>SI_MS - 1</td><td>A1</td><td>Huzain Azis, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>21</td></tr>
                                    <tr><td>55</td><td>SI</td><td>JUMAT</td><td>08.00 - 10.00</td><td>Multimedia System *</td><td>SI_MS - 2</td><td>B1</td><td>Huzain Azis, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>11</td></tr>
                                    <tr><td>56</td><td>SI</td><td>SABTU</td><td>08.00 - 10.00</td><td>Multimedia System *</td><td>SI_MS - 2</td><td>B1</td><td>Huzain Azis, S.Kom.,M.Cs.</td><td>LAB MULTIMEDIA</td><td>11</td></tr>
                                    <tr><td>57</td><td>SI</td><td>RABU</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>SI_PBO - 1</td><td>A1</td><td>Tasrif Hasanuddin, S.T., M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>3</td></tr>
                                    <tr><td>58</td><td>SI</td><td>KAMIS</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>SI_PBO - 1</td><td>A1</td><td>Tasrif Hasanuddin, S.T., M.Cs.</td><td>LAB INFORMATIKA INDUSTRI</td><td>3</td></tr>
                                    <tr><td>59</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 1 </td><td>A1</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB JARINGAN</td><td>28</td></tr>
                                    <tr><td>60</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 1 </td><td>A1</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB JARINGAN</td><td>28</td></tr>
                                    <tr><td>61</td><td>TI</td><td>RABU</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 2</td><td>A2</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>62</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 2</td><td>A2</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>63</td><td>TI</td><td>RABU</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 3</td><td>A3</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB MULTIMEDIA</td><td>29</td></tr>
                                    <tr><td>64</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 3</td><td>A3</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB MULTIMEDIA</td><td>29</td></tr>
                                    <tr><td>65</td><td>TI</td><td>RABU</td><td>16.20 - 18.20</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 4</td><td>A4</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>66</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 4</td><td>A4</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>67</td><td>TI</td><td>RABU</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 5</td><td>A5</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB MULTIMEDIA</td><td>29</td></tr>
                                    <tr><td>68</td><td>TI</td><td>KAMIS</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 5</td><td>A5</td><td>Mardiyyah Hasnawi, S.Kom.,M.T.</td><td>LAB MULTIMEDIA</td><td>29</td></tr>
                                    <tr><td>69</td><td>TI</td><td>RABU</td><td>16.20 - 18.20</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 6</td><td>A6</td><td>Amaliah Faradibah S.Kom., M.Kom</td><td>LAB MULTIMEDIA</td><td>26</td></tr>
                                    <tr><td>70</td><td>TI</td><td>KAMIS</td><td>16.20 - 18.20</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 6</td><td>A6</td><td>Amaliah Faradibah S.Kom., M.Kom</td><td>LAB MULTIMEDIA</td><td>26</td></tr>
                                    <tr><td>71</td><td>TI</td><td>RABU</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 7</td><td>A7</td><td>Amaliah Faradibah S.Kom., M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>21</td></tr>
                                    <tr><td>72</td><td>TI</td><td>KAMIS</td><td>16.20 - 18.20</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 7</td><td>A7</td><td>Amaliah Faradibah S.Kom., M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>21</td></tr>
                                    <tr><td>73</td><td>TI</td><td>RABU</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 8</td><td>A8</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>20</td></tr>
                                    <tr><td>74</td><td>TI</td><td>KAMIS</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 8</td><td>A8</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>20</td></tr>
                                    <tr><td>75</td><td>TI</td><td>RABU</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 9</td><td>B1</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>76</td><td>TI</td><td>KAMIS</td><td>08.00 - 10.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 9</td><td>B1</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>77</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 10</td><td>B2</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>32</td></tr>
                                    <tr><td>78</td><td>TI</td><td>KAMIS</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 10</td><td>B2</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB KOMPUTASI DASAR</td><td>32</td></tr>
                                    <tr><td>79</td><td>TI</td><td>RABU</td><td>16.20 - 18.20</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 11</td><td>B3</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>80</td><td>TI</td><td>KAMIS</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 11</td><td>B3</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>81</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 12</td><td>B4</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB RPL</td><td>25</td></tr>
                                    <tr><td>82</td><td>TI</td><td>KAMIS</td><td>16.20 - 18.20</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 12</td><td>B4</td><td>Muhammad Na'im Al Jumuah, S.Kom.,M.Kom</td><td>LAB RPL</td><td>25</td></tr>
                                    <tr><td>83</td><td>TI</td><td>RABU</td><td>13.00 - 15.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 13</td><td>C1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB INFORMATIKA INDUSTRI</td><td>7</td></tr>
                                    <tr><td>84</td><td>TI</td><td>KAMIS</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 13</td><td>C1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB INFORMATIKA INDUSTRI</td><td>7</td></tr>
                                    <tr><td>85</td><td>TI</td><td>SABTU</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 14</td><td>D1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB KOMPUTASI DASAR</td><td>11</td></tr>
                                    <tr><td>86</td><td>TI</td><td>AHAD</td><td>10.00 - 12.00</td><td>Pemrograman Berorientasi Objek *</td><td>TI_PBO - 14</td><td>D1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB KOMPUTASI DASAR</td><td>11</td></tr>
                                    <tr><td>87</td><td>SI</td><td>SELASA</td><td>16.20 - 18.20</td><td>Pemrograman Mobile *</td><td>SI_MOBILE - 1</td><td>A1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB INFORMATIKA INDUSTRI</td><td>11</td></tr>
                                    <tr><td>88</td><td>SI</td><td>JUMAT</td><td>13.00 - 15.00</td><td>Pemrograman Mobile *</td><td>SI_MOBILE - 1</td><td>A1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB INFORMATIKA INDUSTRI</td><td>11</td></tr>
                                    <tr><td>89</td><td>SI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Pemrograman Mobile *</td><td>SI_MOBILE - 2</td><td>B1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB INFORMATIKA INDUSTRI</td><td>23</td></tr>
                                    <tr><td>90</td><td>SI</td><td>JUMAT</td><td>10.00 - 12.00</td><td>Pemrograman Mobile *</td><td>SI_MOBILE - 2</td><td>B1</td><td>Lutfi Budi Ilmawan, S.Kom.,M.Cs</td><td>LAB INFORMATIKA INDUSTRI</td><td>23</td></tr>
                                    <tr><td>91</td><td>TI</td><td>SELASA</td><td>08.00 - 10.00</td><td>Pemrograman Web *</td><td>TI_WEB - 1</td><td>A1</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB MULTIMEDIA</td><td>28</td></tr>
                                    <tr><td>92</td><td>TI</td><td>SENIN</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 1</td><td>A1</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB MULTIMEDIA</td><td>28</td></tr>
                                    <tr><td>93</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 2</td><td>A2</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB MULTIMEDIA</td><td>33</td></tr>
                                    <tr><td>94</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 2</td><td>A2</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB MULTIMEDIA</td><td>33</td></tr>
                                    <tr><td>95</td><td>TI</td><td>SELASA</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 3</td><td>A3</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>96</td><td>TI</td><td>SENIN</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 3</td><td>A3</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>97</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 4</td><td>A4</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>98</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 4</td><td>A4</td><td>RAMDANIAH, S.Kom., M.T</td><td>LAB KOMPUTASI DASAR</td><td>29</td></tr>
                                    <tr><td>99</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 5</td><td>A5</td><td>Irawati, S.Kom.</td><td>LAB JARINGAN</td><td>30</td></tr>
                                    <tr><td>100</td><td>TI</td><td>SELASA</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 5</td><td>A5</td><td>Irawati, S.Kom.</td><td>LAB JARINGAN</td><td>30</td></tr>
                                    <tr><td>101</td><td>TI</td><td>SENIN</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 6</td><td>A6</td><td>Irawati, S.Kom.</td><td>LAB JARINGAN</td><td>27</td></tr>
                                    <tr><td>102</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 6</td><td>A6</td><td>Irawati, S.Kom.</td><td>LAB JARINGAN</td><td>27</td></tr>
                                    <tr><td>103</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 7</td><td>A7</td><td>Irawati, S.Kom.</td><td>LAB INFORMATIKA INDUSTRI</td><td>20</td></tr>
                                    <tr><td>104</td><td>TI</td><td>SENIN</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 7</td><td>A7</td><td>Irawati, S.Kom.</td><td>LAB INFORMATIKA INDUSTRI</td><td>20</td></tr>
                                    <tr><td>105</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 8</td><td>A8</td><td>Irawati, S.Kom.</td><td>LAB RPL</td><td>21</td></tr>
                                    <tr><td>106</td><td>TI</td><td>SENIN</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 8</td><td>A8</td><td>Irawati, S.Kom.</td><td>LAB RPL</td><td>21</td></tr>
                                    <tr><td>107</td><td>TI</td><td>SENIN</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 9</td><td>B1</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>108</td><td>TI</td><td>SELASA</td><td>08.00 - 10.00</td><td>Pemrograman Web *</td><td>TI_WEB - 9</td><td>B1</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>33</td></tr>
                                    <tr><td>109</td><td>TI</td><td>SENIN</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 10</td><td>B2</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>32</td></tr>
                                    <tr><td>110</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 10</td><td>B2</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>32</td></tr>
                                    <tr><td>111</td><td>TI</td><td>SENIN</td><td>08.00 - 10.00</td><td>Pemrograman Web *</td><td>TI_WEB - 11</td><td>B3</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>32</td></tr>
                                    <tr><td>112</td><td>TI</td><td>SELASA</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 11</td><td>B3</td><td>Dedy Atmajaya, S.Kom.,M.Eng.</td><td>LAB RPL</td><td>32</td></tr>
                                    <tr><td>113</td><td>TI</td><td>SENIN</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 12</td><td>B4</td><td>Irawati, S.Kom.</td><td>LAB JARINGAN</td><td>25</td></tr>
                                    <tr><td>114</td><td>TI</td><td>SELASA</td><td>10.00 - 12.00</td><td>Pemrograman Web *</td><td>TI_WEB - 12</td><td>B4</td><td>Irawati, S.Kom.</td><td>LAB JARINGAN</td><td>25</td></tr>
                                    <tr><td>115</td><td>TI</td><td>SENIN</td><td>16.20 - 18.20</td><td>Pemrograman Web *</td><td>TI_WEB - 13</td><td>C1</td><td>Irawati, S.Kom.</td><td>LAB MULTIMEDIA</td><td>13</td></tr>
                                    <tr><td>116</td><td>TI</td><td>SELASA</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 13</td><td>C1</td><td>Irawati, S.Kom.</td><td>LAB MULTIMEDIA</td><td>13</td></tr>
                                    <tr><td>117</td><td>TI</td><td>SABTU</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 14</td><td>D1</td><td>Irawati, S.Kom.</td><td>LAB MULTIMEDIA</td><td>11</td></tr>
                                    <tr><td>118</td><td>TI</td><td>AHAD</td><td>13.00 - 15.00</td><td>Pemrograman Web *</td><td>TI_WEB - 14</td><td>D1</td><td>Irawati, S.Kom.</td><td>LAB MULTIMEDIA</td><td>11</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Kegiatan
