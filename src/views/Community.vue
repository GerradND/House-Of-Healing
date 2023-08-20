<template>
    <main>
        <div class="foto_atas">
            <div class="container-fluid p-0">
                <div class="text-container">
                    <p class="text-line1">
                        Mempersiapkan Umat Yang Layak Menjadi Seperti Kristus
                        Dalam
                    </p>
                    <p class="text-line2">Kesatuan Hati,Tumbuh Bersama</p>
                    <p class="text-line3">Dan Memenangkan Jiwa.</p>
                </div>
            </div>
        </div>
        <div class="Page2">
            <div class="section">
                <div class="text">
                    <h1>Apa Itu Cool?</h1>
                    <div class="line"></div>
                    <p class="Paragraf1">
                        <strong>(Community Of Love)</strong> adalah kelompok
                        kecil beranggotakan 3-15 orang yang bertujuan untuk
                        tumbuh bersama dalam praktik gaya hidup Allah. Prinsip
                        utama Cool adalah Cari-Gembalakan-Utus.Seorang Gembala
                        COOL memimpin kelompok ini, memfasilitasi pembelajaran
                        yang sehat dan saling melayani seperti keluarga.
                    </p>
                    <p class="paragraf2">
                        Komunitas ini juga terbagi berdasarkan rentang usia,
                        yaitu remaja dan dewasa muda (18-30 tahun), dan dewasa
                        (31 tahun ke atas).
                    </p>
                </div>
                <img src="../assets/COOL.png" alt="" />
            </div>
        </div>
    </main>

    <!-- Halaman baru -->
    <!-- <div class="halaman-baru">
        <p class="text-line4">Apa Itu Cool?</p>
        <div class="line"></div>
        <div class="row">
            <p class="text-line5 col d-flex flex-column">
                <strong>(Community Of Love)</strong> adalah kelompok kecil
                beranggotakan 3-15 orang yang bertujuan untuk tumbuh bersama
                dalam praktik gaya hidup Allah. Prinsip utama Cool adalah
                Cari-Gembalakan-Utus.Seorang Gembala COOL memimpin kelompok ini,
                memfasilitasi pembelajaran yang sehat dan saling melayani
                seperti keluarga. Komunitas ini juga terbagi berdasarkan rentang
                usia, yaitu remaja dan dewasa muda (18-30 tahun), dan dewasa (31
                tahun ke atas).
            </p>
            <div class="col d-flex flex-column justify-content-center">
                <img src="../assets/FIX.png" alt="" />
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    name: "CommunityView",
};
</script>

<style>
.foto_atas {
    min-height: 100vh;
    background-image: url(../assets/opacity.com.png);
    background-size: cover;
    padding: 80px 90px;
}

.text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 90px;
}

.text-line1 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    letter-spacing: 1.2px;
}

.text-line2 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 57px */
    letter-spacing: 1.9px;
}
.text-line3 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 57px */
    letter-spacing: 1.9px;
}

/* Page 2 */
.section {
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Membagi kontainer menjadi dua kolom */
    align-items: center;
    padding: 80px 90px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    grid-column-gap: 100px;
    min-height: 100vh;
}

.image img {
    max-width: 100%; /* Maksimal lebar gambar adalah lebar kontainer */
    height: auto;
    display: block; /* Menghilangkan jarak bawah gambar */
    float: right;
}

h1 {
    font-size: 64px;
    text-align: left;
    padding-bottom: 0px;
    color: #000;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 6.4px;
}

p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    line-height: 150%; /* 36px */
    letter-spacing: 1.2px;
    text-align: left;
}
.paragraf2 {
    padding-top: 20px;
}

.line {
    border-top: 10px solid green; /* Set the border to be a 2px wide solid green line */
    width: 100%;
    padding-bottom: 20px;
}

@media only screen and (max-width: 992px) {
    .image img {
        margin-bottom: 20px; /* Memberikan margin bawah agar gambar dan teks tidak menempel */
    }

    .text-line1 {
        text-align: center; /* Mengatur teks menjadi tengah */
    }
}
@media only screen and (max-width: 768px) {
    .foto_atas {
        min-height: 50vh;
        position: relative; /* Diperlukan untuk mengatur posisi teks */
        padding: 60px 16px;
    }

    .foto_atas img {
        max-width: 100%;
        height: auto;
    }

    .text-line1,
    .text-line2,
    .text-line3 {
        position: absolute; /* Mengatur posisi teks relatif terhadap .foto_atas */
        width: 100%;
        text-align: center;
    }

    .text-line1 {
        font-size: 16px;
        bottom: 144px;
        padding-left: 6px;
        padding-right: 6px;
    }

    .text-line2 {
        font-size: 20px;
        padding-top: 6px; /* Atur posisi vertikal */
        bottom: 78px;
        padding-left: 6px;
        padding-right: 6px;
    }

    .text-line3 {
        font-size: 20px;
        bottom: 46px; /* Atur posisi dari bawah */
    }
    /* Page 2 */
    .section {
        padding: 60px 16px;
        display: grid; /* Tambahkan display: grid; untuk mengaktifkan grid layout */
        grid-template-columns: 1fr; /* Satu kolom */
        grid-template-rows: 1fr; /* Satu baris */
        align-items: center;
        text-align: center; /* Mengubah agar teks dan gambar berada di tengah secara horizontal */
    }
    .text {
        order: 1; /* Menjadikan teks menjadi urutan pertama (atas) */ /* Menambah jarak antara teks dan gambar */
    }
    .image {
        order: 2; /* Menjadikan gambar menjadi urutan kedua (bawah) */
    }
    .image {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
    .image img {
        max-width: 100%;
        height: auto;
    }
    .text h1 {
        top: 10px;
        color: #000;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: 2px;
        margin-bottom: 8px;
    }
    .text p {
        font-size: 16px;
        margin-bottom: 5px;
    }
    /* End of Page 2 */
}
</style>
