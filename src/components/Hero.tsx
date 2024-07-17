import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full mx-auto h-[2200px] lg:h-[2400px] xl:h-[1500px]">
      <div className="container mt-6 lg:mt-10 px-5 lg:px-20 mx-auto md:max-lg:max-w-full flex flex-col xl:flex-row gap-6 items-center">
        <Image
          className="rounded-xl"
          src="/hero.webp"
          alt="hero section"
          height={400}
          width={500}
          objectFit="cover"
        />

        <div className="mx-auto">
          <h1 className="font-semibold text-3xl flex gap-2 text-[#7d5d3f]">
            Dream
            <span className="text-[#d5904e] font-semibold text-3xl flex gap-2">
              House
            </span>
          </h1>
          <p className="text-[#515e70] pb-1 lg:pb-3">
            Pengembang Terpercaya di Indonesia, Dream House berfokus pada
            pengembangan properti perumahan yang Aman dan Nyaman. Dream House
            memberikan nilai tambah kepada konsumen, berupa kemudahan dalam
            pilihan kostumisasi desain, struktur dan denah. Dukungan 15 Bank
            Terkemuka menunjukan tingkat kepercayaan lembaga keuangan nasional
            atas kredibilitas Dream House dalam merealisasikan komitmen kepada
            pelanggan.
          </p>
          <Link
            className="hover:bg-black px-3 py-1 text-white font-semibold text-xs lg:text-xl bg-[#d5904e] rounded-2xl"
            href="/about"
          >
            Selengkapnya
          </Link>
        </div>
      </div>

      <div className="container lg:px-10 mx-auto md:max-lg:max-w-full flex gap-6 items-center">
        <div className="container px-5 lg:px-10 mx-auto mt-10">
          <div className="font-bold text-3xl flex justify-center text-[#7d5d3f]">
            Lokasi Unggulan
          </div>

          <div className="flex flex-col xl:flex-row gap-1 lg:gap-[20px] items-center justify-center">
            <div className="w-full md:w-[500px] lg:w-[500px] h-[350px] lg:h-[390px] mt-7 shadow-xl rounded-3xl">
              <figure>
                <Image
                  className="rounded-xl h-[250px] lg:h-[290px]"
                  src="/img lokasi 1.webp"
                  alt="rumah 1"
                  height={400}
                  width={500}
                  objectFit="cover"
                />
              </figure>
              <div className="flex-col flex items-center justify-center">
                <h2 className="font-bold text-2xl text-[#7d5d3f] mt-5">
                  Dream House Jakarta
                </h2>
                <p className="text-[#515e70]">
                  15 menit ke ke Bandung jika naik pesawat
                </p>
                <p></p>
              </div>
            </div>

            <div className="w-full md:w-[500px] lg:w-[500px] h-[350px] lg:h-[390px] mt-7 shadow-xl rounded-3xl">
              <figure>
                <Image
                  className="rounded-xl h-[250px] lg:h-[290px]"
                  src="/img lokasi 2.webp"
                  alt="rumah 2"
                  height={400}
                  width={500}
                  objectFit="cover"
                />
              </figure>
              <div className="flex-col flex items-center justify-center">
                <h2 className="font-bold text-2xl text-[#7d5d3f] mt-5">
                  Dream House BSD
                </h2>
                <p className="text-[#515e70]">
                  37 jam ke Bandung dengan jalan kaki
                </p>
              </div>
            </div>

            <div className="w-full md:w-[500px] lg:w-[500px] h-[350px] lg:h-[390px] mt-7 shadow-xl rounded-3xl">
              <figure>
                <Image
                  className="rounded-xl h-[250px] lg:h-[290px]"
                  src="/img lokasi 3.webp"
                  alt="rumah 3"
                  height={400}
                  width={500}
                  objectFit="cover"
                />
              </figure>
              <div className="flex-col flex items-center justify-center">
                <h2 className="font-bold text-2xl text-[#7d5d3f] mt-5">
                  Dream House Bandung
                </h2>
                <p className="text-[#515e70]">
                  30 menit ke ke Jakarta jika naik Whoosh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:max-lg:max-w-full gap-6">
        <div className="w-full mx-auto flex justify-center items-center mt-7 lg:mt-20 h-[50px]">
          <div className="flex flex-col gap-1 px-5 lg:gap-[10px] items-center justify-center">
            <div className="text-[#7d5d3f] font-bold text-base md:text-2xl lg:text-3xl">
              Rumah Idaman, Investasi Masa Depan
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:max-lg:max-w-full gap-6">
        <div className="w-full mx-auto bg-[#D5904E] flex justify-center items-center mt-7 lg:mt-20 h-[250px] lg:h-[300px] flex-col gap-1">
          <div className="flex flex-col gap-1 px-5 lg:gap-[10px] items-center justify-center">
            <div className="text-white font-bold text-2xl">
              Info Lebih Lanjut
            </div>
            <div className="text-[#7d5d3f] bg-white rounded-3xl px-3 py-1 lg:px-5 font-bold text-2xl lg:text-3xl">
              WhatsApp +62-111-1111
            </div>
            <p className="text-[#ffffff] mt-2">
              Pengembang Terpercaya di Indonesia Sejak Tahun 2000, Dream House
              berfokus pada pengembangan properti perumahan yang Aman dan
              Nyaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
