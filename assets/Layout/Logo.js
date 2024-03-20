const Logo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={163} height={359} fill="none" {...props}>
    <path
      stroke="url(#a)"
      strokeWidth={2}
      d="M125.622 2 244 120.862l-28.444 28.561-89.934-90.302-66.734 67.006 21.839 21.928 44.895-45.079L244 221.839l-28.444 28.56-45.039-45.224-44.895 45.079-44.895-45.079-21.839 21.928 72.48 72.776 34.265-34.404 28.444 28.56L131.368 357 2 227.103l50.282-50.488L2 126.127 125.622 2Zm-16.451 174.615 16.451 16.518 16.45-16.518-16.45-16.518-16.451 16.518Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient id="a" x1={-85.5} x2={332.819} y1={178.855} y2={178.855} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1588FF" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default Logo;
