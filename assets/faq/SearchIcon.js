'use client';

import useScreenSize from '@/CustomHooks/UseScreenSize';

const SearchIcon = (props) => {
  const { width } = useScreenSize();

  return width < 1024 ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" {...props}>
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M1.3 5.85a4.55 4.55 0 1 1 9.1 0 4.55 4.55 0 0 1-9.1 0ZM5.85 0a5.85 5.85 0 1 0 3.652 10.42l2.388 2.39a.65.65 0 1 0 .92-.92l-2.39-2.388A5.85 5.85 0 0 0 5.85 0Z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none" {...props}>
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M2.1 9.45a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0ZM9.45 0a9.45 9.45 0 0 0 0 18.9 9.41 9.41 0 0 0 5.899-2.066l3.859 3.858a1.05 1.05 0 0 0 1.485-1.484l-3.86-3.86A9.41 9.41 0 0 0 18.9 9.45 9.45 9.45 0 0 0 9.45 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchIcon;
