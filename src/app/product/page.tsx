import Card from "@/components/Card";
import { getEntries } from "@/libs/contenful";
import React from "react";

const Product = async () => {
  const percobaan = await getEntries();

  console.log("ini adalah isi dari percobaan", percobaan);

  return (
    <section className="w-full mx-auto h-[4600px] lg:h-[4700px] xl:h-[2200px]">
      <div className="container lg:px-10 mx-auto md:max-lg:max-w-full flex gap-6 items-center">
        <div className="container px-5 lg:px-10 mx-auto mt-1 lg:mt-0">
          {/* ini card */}
          <div className="grid gap-1 md:gap-[15px] lg:gap-[30px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center">
            {percobaan?.map((company: any, index: number) => {
              return (
                <Card
                  key={index}
                  image={`https:${company.image.fields.file.url}`}
                  title={company.title}
                  desc={company.desc}
                  price={company.price}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto md:max-lg:max-w-full mt-14 md:mt-20 lg:mt-32">
        <div className="container px-5 lg:px-10 mx-auto flex justify-center items-center">
          <div className="w-[300px] md:w-[350px] lg:w-[600px] h-[250px] md:h-[275px] lg:h-[300px] px-3 lg:px-5 bg-slate-200">
            <div className="text-xs md:text-xl font-bold mt-7 text-[#7d5d3f]">
              TESTIMONIALS
            </div>
            <div className="text-xl md:text-3xl lg:text-3xl font-bold text-[#d5904e]">
              Our Happy Clients
            </div>
            <div className="container mt-3 lg:mt-5 px-1 lg:px-3 mx-auto h-24 lg:h-28 border-solid ring-offset-2 ring-2 text-xs lg:text-lg">
              Proses pembelian rumah dengan PT. Dream House sangat mudah dan
              menyenangkan. Kami sangat puas dengan kualitas rumah dan pelayanan
              yang diberikan. Terima kasih telah membantu kami menemukan rumah
              impian kami!
            </div>
            <div className="text-xs md:text-xl font-bold mt-3 text-[#7d5d3f]">
              - Budi Santoso
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:max-lg:max-w-full">
        <div className="w-full mx-auto bg-[#D5904E] flex justify-center items-center mt-32 lg:mt-32 h-[200px] lg:h-[120px]">
          <div className="w-full flex flex-col lg:flex-row gap-1 px-5  lg:px-40 items-center justify-between">
            <div className="text-white font-bold text-xl lg:text-2xl">
              Info Lebih Lanjut
            </div>
            <div className="text-[#7d5d3f] bg-white rounded-3xl px-3 py-1 lg:px-5 font-bold text-xl lg:text-3xl">
              WhatsApp +62-111-1111
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
