import Image from "next/image";
import Link from "next/link";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function ProfileCard({
  name,
  role,
  image,
  location,
  github,
  linkedin,
  facebook,
}) {
  return (
    <div class="outer-div ">
      <div class="inner-div">
        <div class="front">
          <div class="front__bkg-photo"></div>
          <div class="front__face-photo">
            <Image src={image} alt={name} />
          </div>
          <div class="front__text">
            <h3 class={`${nunito.className} front__text-header`}>{name}</h3>
            <p class="front__text-para">
              <i class="fas fa-map-marker-alt front-icons"></i>
              {location}
            </p>
            <p class="front__text-para">
              <i class="fas fa-user front-icons"></i>
              {role}
            </p>

            <span class="front__text-hover">Hover to Find Me</span>
          </div>
        </div>

        <div class="back">
          <div class="social-media-wrapper">
            <Link target="_blank" href={github} class="social-icon">
              <i class="fab fa-github-square" aria-hidden="true"></i>
            </Link>
            <Link target="_blank" href={linkedin} class="social-icon">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </Link>
            <Link target="_blank" href={facebook} class="social-icon">
              <i class="fab fa-facebook-square" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
