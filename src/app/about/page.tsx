import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full mx-auto h-[2900px] md:h-[2400px] lg:h-[2000px]">
      <div className="container px-5 lg:px-20 mx-auto md:max-lg:max-w-full flex flex-col xl:flex-row gap-6 items-center">
        <Image
          className="object-cover h-[400px] mt-6 rounded-xl"
          src="/img about.webp"
          alt="hero section"
          height={400}
          width={500}
        />

        <div className="mx-auto">
          <h1 className="font-semibold text-3xl flex gap-2 text-[#7d5d3f]">
            Dream
            <span className="text-[#d5904e] font-semibold text-3xl flex gap-2">
              House
            </span>
          </h1>
          <p className="text-[#515e70]">
            Pengembang Terpercaya di Indonesia, Dream House berfokus pada
            pengembangan properti perumahan yang Aman dan Nyaman. Dream House
            memberikan nilai tambah kepada konsumen, berupa kemudahan dalam
            pilihan kostumisasi desain, struktur dan denah. Dukungan 15 Bank
            Terkemuka menunjukan tingkat kepercayaan lembaga keuangan nasional
            atas kredibilitas Dream House dalam merealisasikan komitmen kepada
            pelanggan.
          </p>
        </div>
      </div>

      <div className="container mx-auto md:max-lg:max-w-full">
        <div className="[w-3000px] bg-[#D5904E] flex justify-center items-center mt-7 lg:mt-20 h-[250px] lg:h-[360px] lg:gap-14 flex-row">
          <div className="flex flex-row gap-6 lg:gap-20">
            <div className="flex flex-col">
              <figure className="flex justify-center">
                <div className="border-2 rounded-xl px-2 py-2 w-[100px] h-[130px] flex flex-col">
                  <img
                    src="/rumah.png"
                    alt="icon rumah"
                    width={200}
                    height={200}
                  />
                  <p className="text-center text-white font-bold text-xl lg:text-2xl">
                    +1200
                  </p>
                </div>
              </figure>
              <p className="text-center text-white font-bold text-xs lg:text-2xl mt-2">
                Rumah Terjual
              </p>
            </div>

            <div className="flex flex-col">
              <figure className="flex justify-center">
                <div className="border-2 rounded-xl px-2 py-2 w-[100px] h-[130px]">
                  <img
                    src="/lokasi.png"
                    alt="icon lokasi"
                    width={200}
                    height={200}
                  />
                  <p className="text-center text-white font-bold text-xl lg:text-2xl">
                    +20
                  </p>
                </div>
              </figure>
              <p className="text-center text-white font-bold text-xs lg:text-2xl mt-2">
                Lokasi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:px-10 mx-auto md:max-lg:max-w-full flex flex-col xl:flex-row gap-6 items-center">
        <div className="container px-5 lg:px-10 mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-[#7d5d3f] mb-4">
            Sejarah Kami
          </h2>
          <p className="text-[#515e70]">
            Dream House didirikan pada tahun 2000 dengan visi untuk menyediakan
            perumahan berkualitas tinggi yang aman dan nyaman bagi masyarakat
            Indonesia. Sejak awal berdirinya, Dream House telah berkomitmen
            untuk memberikan nilai tambah kepada konsumen melalui inovasi dalam
            desain, struktur, dan fleksibilitas dalam kostumisasi denah.
          </p>
          <p className="text-[#515e70] mt-4">
            Dalam dua dekade terakhir, Dream House telah berkembang pesat dan
            menjadi salah satu pengembang properti terkemuka di Indonesia. Pada
            tahun 2010, Dream House mendapatkan dukungan dari 15 bank terkemuka,
            yang menunjukkan tingkat kepercayaan lembaga keuangan nasional
            terhadap kredibilitas dan komitmen Dream House.
          </p>
          <p className="text-[#515e70] mt-4">
            Hingga kini, Dream House telah membangun lebih dari 1200 rumah di
            berbagai lokasi strategis di Indonesia, dengan fokus pada kenyamanan
            dan keamanan penghuninya. Dream House terus berinovasi dan berusaha
            untuk menjadi yang terbaik dalam industri pengembangan properti
            perumahan.
          </p>
        </div>
      </div>

      <div className="container lg:px-10 mx-auto md:max-lg:max-w-full flex flex-col xl:flex-row gap-6 items-center">
        <div className="container px-5 lg:px-10 mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-[#7d5d3f] mb-4">
            Tim Kami
          </h2>
          <p className="text-[#515e70]">
            Dream House terdiri dari tim profesional yang berpengalaman di
            bidang pengembangan properti. Dengan berbagai latar belakang, setiap
            anggota tim kami membawa keahlian dan perspektif unik yang mendukung
            terciptanya proyek-proyek perumahan berkualitas tinggi.
          </p>
          <p className="text-[#515e70] mt-4">
            Kami percaya bahwa kesuksesan kami adalah hasil dari kerja keras,
            kolaborasi, dan dedikasi tim kami. Setiap proyek yang kami kerjakan
            adalah hasil dari upaya bersama untuk mencapai visi dan misi
            perusahaan.
          </p>
        </div>
      </div>

      <div className="container lg:px-10 mx-auto md:max-lg:max-w-full flex flex-col xl:flex-row gap-6 items-center">
        <div className="container px-5 lg:px-10 mx-auto mt-10 mb-10">
          <h2 className="text-2xl font-semibold text-[#7d5d3f] mb-4">
            Budaya Kami
          </h2>
          <p className="text-[#515e70]">
            Budaya di Dream House didasarkan pada nilai-nilai inti kami yaitu
            integritas, inovasi, dan pelayanan pelanggan. Kami berusaha untuk
            menciptakan lingkungan kerja yang inklusif dan kolaboratif, di mana
            setiap orang merasa dihargai dan didukung untuk mencapai potensi
            penuh mereka.
          </p>
          <p className="text-[#515e70] mt-4">
            Kami mendorong inovasi dan kreativitas dalam setiap aspek pekerjaan
            kami. Tim kami diberdayakan untuk mengambil inisiatif dan menemukan
            solusi baru untuk tantangan yang dihadapi. Dengan demikian, kami
            dapat terus meningkatkan kualitas dan efisiensi dalam setiap proyek
            yang kami kerjakan.
          </p>
          <p className="text-[#515e70] mt-4">
            Pelayanan pelanggan adalah prioritas utama kami. Kami berkomitmen
            untuk memberikan pengalaman terbaik kepada setiap pelanggan melalui
            komunikasi yang terbuka, transparan, dan responsif terhadap
            kebutuhan dan harapan mereka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
