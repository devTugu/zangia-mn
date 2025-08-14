// Homepage-ийн хэсгүүдийг импортолж байна
import AboutUs from "@/components/section/Homepage/AboutUs";
import Hero from "@/components/section/Homepage/Hero";
import Video from "@/components/section/Homepage/VideoAndServices";
import WhyChooseUs from "@/components/section/Homepage/WhyChooseUs";
import BrandAndStudies from "@/components/section/Homepage/BrandAndStudies";
import Working from "@/components/section/Homepage/Working";
import Team from "@/components/section/Homepage/Team";
import Testimonials from "@/components/section/Homepage/Testimonials";
import Subscribe from "@/components/section/Homepage/Subscribe";
import Posts from "@/components/section/Homepage/Posts";

// Home компонент - Нүүр хуудасны үндсэн бүтэц
export default function Home() {
  return (
    <div>
      {/* Хамгийн эхний хэсэг: Hero section */}
      <Hero />

      {/* Бидний тухай хэсэг */}
      <AboutUs />

      {/* Видео болон үйлчилгээний хэсэг */}
      <Video />

      {/* Яагаад биднийг сонгох ёстой вэ хэсэг */}
      <WhyChooseUs />

      {/* Брэнд болон судалгааны хэсэг */}
      <BrandAndStudies />

      {/* Ажиллах процессын хэсэг */}
      <Working />

      {/* Багийн гишүүдийн хэсэг */}
      <Team />

      {/* Testominals хэсэг */}
      <Testimonials />

      {/* Имэйлээр бүртгүүлэх хэсэг */}
      <Subscribe />

      {/* Сүүлийн нийтлэлүүдийн хэсэг */}
      <Posts />
    </div>
  );
}
