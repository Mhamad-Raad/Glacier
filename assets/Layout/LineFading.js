const LineFading = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={2} height={343} fill="none" {...props}>
    <path stroke="url(#a)" strokeLinecap="round" strokeWidth={2} d="M1 1v341" />
    <defs>
      <linearGradient id="a" x1={1} x2={1} y1={1} y2={359.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1588FF" />
        <stop offset={1} stopColor="#1588FF" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default LineFading;
