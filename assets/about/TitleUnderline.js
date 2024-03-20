const TitleUnderline = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height={6} fill="none" {...props}>
    <path fill="url(#a)" d="M608 2.985A2.985 2.985 0 0 0 605.015 0H0l604.985 5.97A2.986 2.986 0 0 0 608 2.985Z" />
    <defs>
      <linearGradient id="a" x1={608} x2={0.832} y1={3} y2={-21.022} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED630" />
        <stop offset={1} stopColor="#FED637" stopOpacity={0.2} />
      </linearGradient>
    </defs>
  </svg>
);
export default TitleUnderline;
