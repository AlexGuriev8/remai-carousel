interface IconProps {
  className?: string;
  onClick?: () => void;
}

const ChevronLeft = ({ className, onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      stroke="#CE2041"
      fill="#CE2041"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1.3em"
      width="1.3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M328 112L184 256l144 144"
      ></path>
    </svg>
  );
};

const ChevronRight = ({ className, onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      stroke="#CE2041"
      fill="#CE2041"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1.3em"
      width="1.3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M184 112l144 144-144 144"
      ></path>
    </svg>
  );
};

export { ChevronLeft, ChevronRight };
