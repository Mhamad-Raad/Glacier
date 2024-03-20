const ArrowRight = (props) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={12} fill="none" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M0 6c0-.663.522-1.2 1.167-1.2h15.85l-2.675-2.751a1.224 1.224 0 0 1 0-1.698 1.144 1.144 0 0 1 1.65 0l4.666 4.8a1.224 1.224 0 0 1 0 1.698l-4.666 4.8a1.144 1.144 0 0 1-1.65 0 1.224 1.224 0 0 1 0-1.698L17.017 7.2H1.167C.522 7.2 0 6.663 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowRight;
