import * as React from "react";
import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      /* Montserrat */
      /* was @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
      /* TODO: Minimize this import */
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqh7p29NNpQ.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqh7g29NNpQ.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqh7r29NNpQ.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqh7q29NNpQ.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqh7k29M.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_z8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_z-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_z8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_z8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_z_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzz8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzz-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzz8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzz8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzz_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459WxRxC7mw9c.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459WxRzS7mw9c.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459WxRxi7mw9c.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3z8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3z-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3z8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3z8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3z_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrz8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrz-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrz8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrz8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrz_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvz8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvz-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvz8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvz8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvz_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjz8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjz-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjz8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjz8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjz_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnz8fZwnCo.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnz-PZwnCo.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnz8_ZwnCo.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnz8vZwnCo.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnz_PZw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_QpRxC7mw9c.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_QpRzS7mw9c.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_QpRxi7mw9c.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_QpRxy7mw9c.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_QpRyS7m.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG3gTD_u50.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG3g3D_u50.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG3gbD_u50.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG3gfD_u50.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* Bebas Neue */
      @/* latin-ext */
      @font-face {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wdhyzbi.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);
