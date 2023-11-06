/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export const content = ["index.html"];
export const theme = {
  extend: {
    colors: {
      "soft-red": "hsl(7, 99%, 70%)",
      "yellow": "hsl(51, 100%, 49%)",
      "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
      "dark-blue": "hsl(198, 62%, 26%)",
      "dark-moderate-cyan": "hsl(168, 34%, 41%)",
      "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
      "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
      "dark-grayish-blue": "hsl(232, 10%, 55%)",
      "grayish-blue": "hsl(210, 4%, 67%)",
      "white": "hsl(0, 0%, 100%)"
    },
    backgroundImage: {
      //mobile backgrounds//
      "cone": "url('/images/mobile/image-gallery-cone.jpg')",
      "milkbottles": "url('/images/mobile/image-gallery-milkbottles.jpg')",
      "orange": "url('/images/mobile/image-gallery-orange.jpg')",
      "sugar-cubes": "url('/images/mobile/image-gallery-sugar-cubes.jpg')",
      "graphic-design": "url('/images/mobile/image-graphic-design.jpg')",
      "header": "url('/images/mobile/image-header.jpg')",
      "photography": "url('/images/mobile/image-photography.jpg')",
      "stand-out": "url('/images/mobile/image-stand-out.jpg')",
      "transform": "url('/images/mobile/image-transform.jpg')",
      //desktop backgrounds//
      "cone-desktop": "url('/images/desktop/image-gallery-cone.jpg')",
      "milkbottles-desktop": "url('/images/desktop/image-gallery-milkbottles.jpg')",
      "orange-desktop": "url('/images/desktop/image-gallery-orange.jpg')",
      "sugar-cubes-desktop": "url('/images/desktop/image-gallery-sugar-cubes.jpg')",
      "graphic-design-desktop": "url('/images/desktop/image-graphic-design.jpg')",
      "header-desktop": "url('/images/desktop/image-header.jpg')",
      "photography": "url('/images/desktop/image-photography.jpg')",
      "stand-out": "url('/images/desktop/image-stand-out.jpg')",
      "transform": "url('/images/desktop/image-transform.jpg')"
    },
    fontFamily: {
      "barlow": ["Barlow", "sans-serif"],
      "fraunces": ["Fraunces", "sans-serif"]
    }
  },
};
export const plugins = [
  plugin(function ({ addBase }) {
    addBase({
      'html': { fontSize: "18px" },
    });
  }),
];

