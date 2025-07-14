"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { motion } from "framer-motion";

export function Slideshow() {
  const slides = [
    "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459706/0-online-shopping-sales-infographics___media_library_original_1600_900_ikndda.jpg",
    "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459792/0-sales-strategy-and-digital-marketing___media_library_original_1600_900_uvgv8v.jpg",
    "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459846/0-online-minimarket-social-media-strategy___media_library_original_1600_900_hnbhmr.jpg",
    "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459939/0-shopping-center-sales___media_library_original_1600_900_jies32.jpg",
  ];

  return (
    <motion.div
      className="w-full h-auto mb-8 lg:mb-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true,
          pauseOnHover: false,
          speed: 800,
        }}
        className="w-full lg:w-[70%] mx-auto h-full "
      >
        {slides.map((src, index) => (
          <SplideSlide key={index} className="h-full pb-8 lg:pb-0 ">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
}
