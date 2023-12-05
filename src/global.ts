import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-md-semibold: Inter;
--bold-16: 'Plus Jakarta Sans';

/* font sizes */
--body-md-semibold-size: 16px;
--regular-13-size: 14px;
--font-size-5xl: 24px;
--font-size-21xl: 40px;
--font-size-xl: 20px;
--font-size-lg: 18px;

/* Colors */
--white: #fff;
--primary-600: #7c3aed;
--color-black: #000;
--color-gray-100: #fbfbfb;
--color-gray-200: #1d1d1d;
--color-slateblue: #6153cd;
--color-midnightblue: #0f0049;
--color-dimgray: #47536b;
--color-darkslategray: #2d3748;

/* Paddings */
--padding-base: 16px;
--padding-5xl: 24px;

/* Border radiuses */
--br-5xs: 8px;

}
`;
