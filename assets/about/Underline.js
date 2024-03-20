'use client';

import useScreenSize from '@/CustomHooks/UseScreenSize';

const Underline = (props) => {
  const { width } = useScreenSize();
  return width <= 1024 ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="142" height="3" viewBox="0 0 142 3" fill="none" {...props}>
      <path
        d="M142 1.5C142 0.671571 141.312 0 140.462 0H0L140.429 2.99963C141.291 3.01805 142 2.34128 142 1.5Z"
        fill="url(#paint0_linear_1058_74)"
      />
      <path
        d="M0 1.5C0 0.671571 0.688462 0 1.53772 0H142L1.57138 2.99963C0.709151 3.01805 0 2.34128 0 1.5Z"
        fill="url(#paint1_linear_1058_74)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1058_74"
          x1="142"
          y1="1.51656"
          x2="0.0197117"
          y2="-1.07861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED630" />
          <stop offset="1" stopColor="#FED637" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1058_74"
          x1="-6.88125e-07"
          y1="1.51656"
          x2="141.98"
          y2="-1.07861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED630" />
          <stop offset="1" stopColor="#FED637" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width={326} height={8} fill="none" {...props}>
      <path fill="url(#a)" d="M326 3.956a3.524 3.524 0 0 0-3.524-3.524H0L322.399 7.48A3.524 3.524 0 0 0 326 3.956Z" />
      <path fill="url(#b)" d="M0 3.956A3.524 3.524 0 0 1 3.524.432H326L3.6 7.48A3.524 3.524 0 0 1 0 3.956Z" />
      <defs>
        <linearGradient id="a" x1={326} x2={0.04} y1={3.995} y2={-1.827} gradientUnits="userSpaceOnUse">
          <stop stopColor="#FED630" />
          <stop offset={1} stopColor="#FED637" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient id="b" x1={0} x2={325.96} y1={3.995} y2={-1.827} gradientUnits="userSpaceOnUse">
          <stop stopColor="#FED630" />
          <stop offset={1} stopColor="#FED637" stopOpacity={0.2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Underline;
