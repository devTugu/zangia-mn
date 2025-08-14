import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";

// Footer компонент
const Footer = () => {
  return (
    <footer>
      {/* Дээд хэсэг: Арын зурагтай */}
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/homepage/footer.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 container max-w-6xl mx-auto pt-[94px] pb-[84px] px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Зүүн хэсэг - Уриалга */}
            <div className="flex flex-col gap-[54px]">
              <h2 className="text-[35px] font-bold leading-tight mb-4">
                Let's start
                <br />
                working together
                <br />
                get in touch!
              </h2>
              <Button className="w-fit bg-[#684df4] hover:bg-purple-700 text-white text-[16px] px-[40px] py-[22px] rounded-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                GET STARTED NOW
              </Button>
            </div>

            {/* Гол хэсэг - Холбоо барих мэдээлэл */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-[50px]">
                Contact Information
              </h3>
              <div className="flex flex-col gap-[30px]">
                {/* Хаяг */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#684df4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px]">
                      374 William S Canning Blvd, Fall River
                    </p>
                    <p className="text-[16px]">MA 2721, USA</p>
                  </div>
                </div>
                {/* Утас */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#684df4] flex-shrink-0" />
                  <p className="text-[16px]">(+800)155-6969</p>
                </div>
                {/* Имэйл */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#684df4] flex-shrink-0" />
                  <p className="text-[16px]">info@example.com</p>
                </div>
                {/* Ажлын цаг */}
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#684df4] flex-shrink-0" />
                  <p className="text-[16px]">10:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* Баруун хэсэг - Мэдээний захиалга */}
            <div>
              <h3 className="text-xl font-semibold mb-[50px]">
                Subscribe newsletter
              </h3>
              <p className="leading-relaxed mb-[30px]">
                The charms of pleasure of the pulesser empect moment by desire.
              </p>
              <div className="space-y-[30px]">
                {/* Имэйл оруулах талбар */}
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-slate-800 border-slate-700 text-white py-[22px] px-[20px] placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
                />
                {/* Захиалах товч */}
                <Button className="bg-[#684df4] hover:bg-purple-700 text-white text-[16px] px-[40px] py-[22px] rounded-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  SUBSCRIBE NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Доод хэсэг: Зохиогчийн эрх ба сошиал холбоосууд */}
      <div className="bg-[#684df4] py-[25px]">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Зохиогчийн эрх */}
          <p className="text-white text-sm">
            Copyright © 2024, All Rights Reserved.
          </p>
          {/* Лого зураг */}
          <Image
            src={"/logo-white.png"}
            alt="Logo"
            width={1920}
            height={1080}
            className="w-40 h-10"
          />
          {/* Сошиал холбоосууд */}
          <div className="flex items-center gap-[20px]">
            <span className="text-white text-sm">Follow Us :</span>
            <div className="flex gap-[12px]">
              {/* Facebook */}
              <a
                href="#"
                className="hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              {/* Youtube */}
              <a
                href="#"
                className="hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
