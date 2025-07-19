"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { motion } from "framer-motion";

export function Slideshow() {
  const slides = [
    "https://plus.unsplash.com/premium_photo-1661872817492-fd0c30404d74?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  // const slides = [
  //   "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459706/0-online-shopping-sales-infographics___media_library_original_1600_900_ikndda.jpg",
  //   "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459792/0-sales-strategy-and-digital-marketing___media_library_original_1600_900_uvgv8v.jpg",
  //   "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459846/0-online-minimarket-social-media-strategy___media_library_original_1600_900_hnbhmr.jpg",
  //   "https://res.cloudinary.com/ddtd7avvo/image/upload/v1740459939/0-shopping-center-sales___media_library_original_1600_900_jies32.jpg",
  // ];

  return (
    <motion.div
      className="w-full h-auto"
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
        className="w-full mx-auto h-full "
      >
        {slides.map((src, index) => (
          <SplideSlide
            key={index}
            className="h-full w-full md:w-[80%] lg:w-[60%] pb-8"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full md:w-[80%] lg:w-[60%] object-cover  mx-auto"
            />
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
}
