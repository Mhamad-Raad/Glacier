'use client';

import useScreenSize from '@/CustomHooks/UseScreenSize';

const Logo = (props) => {
  const { width } = useScreenSize();
  const { contact } = props;

  return (width < 1024 && !contact) ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={53} height={145} fill="none" {...props}>
      <path
        stroke="url(#a)"
        strokeWidth={2}
        d="M1.96 2-45 49.21l11.284 11.344L1.96 24.687l26.473 26.614-8.663 8.71L1.96 42.105-45 89.316l11.284 11.344 17.867-17.962 17.81 17.904L19.77 82.698l8.663 8.71L-.32 120.312l-13.592-13.665-11.284 11.343L-.32 143 51 91.407 31.053 71.354 51 51.301 1.96 2Zm6.526 69.354-6.526 6.56-6.526-6.56 6.526-6.56 6.526 6.56Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient id="a" x1={46.915} x2={-26.872} y1={72.244} y2={72.244} gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width={159} height={279} fill="none" {...props}>
      <path
        stroke="url(#a)"
        strokeWidth={2}
        d="M60.964 2-31 94.077-8.903 116.2l69.867-69.953 51.842 51.907-16.965 16.986-34.877-34.92L-31 172.297l22.097 22.125 34.99-35.033 34.877 34.92 34.877-34.92 16.965 16.987-56.307 56.376L29.88 206.1 7.783 228.224 56.5 277 157 176.376l-39.062-39.111L157 98.155 60.964 2Zm12.78 135.265-12.78 12.796-12.78-12.796 12.78-12.796 12.78 12.796Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient id="a" x1={149} x2={4.5} y1={139} y2={139} gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Logo;
