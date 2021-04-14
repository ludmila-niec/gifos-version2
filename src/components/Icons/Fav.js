import React from "react";

const Fav = ({height, width}) => {
  return (
    <svg
      width={width || "25"}
      height={height || "23"}
      viewBox="0 0 29 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.2082 0C19.1441 0 17.1833 0.864 15.7384 2.376L14.5 3.672L13.3648 2.484C10.3719 -0.756 5.41815 -0.756 2.42527 2.376L2.32206 2.484C-0.774021 5.724 -0.774021 10.908 2.32206 14.148L14.5 27L26.6779 14.148C29.774 10.908 29.774 5.724 26.6779 2.484C25.2331 0.864 23.2722 0 21.2082 0Z"
        fill="#E6F0F6"
      />
    </svg>
  );
};

export default Fav;
