export const SortIcon = ({ active, direction }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={`h-4 w-4 ${
      active ? "text-[var(--yellow-600)]" : "text-[var(--brand-700)]"
    }`}
  >
    {direction === "desc" ? (
      <path
        d="M5 2v12m0 0-2-2m2 2 2-2M11 14V2m0 0-2 2m2-2 2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M5 14V2m0 0-2 2m2-2 2 2M11 2v12m0 0-2-2m2 2 2-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

export const SearchIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
    <circle
      cx="9"
      cy="9"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="m13.5 13.5 3 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const FilterIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
    <path
      d="M3 4h14l-5.5 6v5l-3 2v-7L3 4z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const PrintIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_101_2447)">
      <path
        d="M3.99992 12H2.66659C2.31296 12 1.97382 11.8595 1.72378 11.6095C1.47373 11.3594 1.33325 11.0203 1.33325 10.6667V7.33333C1.33325 6.97971 1.47373 6.64057 1.72378 6.39052C1.97382 6.14048 2.31296 6 2.66659 6H13.3333C13.6869 6 14.026 6.14048 14.2761 6.39052C14.5261 6.64057 14.6666 6.97971 14.6666 7.33333V10.6667C14.6666 11.0203 14.5261 11.3594 14.2761 11.6095C14.026 11.8595 13.6869 12 13.3333 12H11.9999"
        stroke="#374151"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 6.00016V2.00016C4 1.82335 4.07024 1.65378 4.19526 1.52876C4.32029 1.40373 4.48986 1.3335 4.66667 1.3335H11.3333C11.5101 1.3335 11.6797 1.40373 11.8047 1.52876C11.9298 1.65378 12 1.82335 12 2.00016V6.00016"
        stroke="#374151"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3333 9.3335H4.66667C4.29848 9.3335 4 9.63197 4 10.0002V14.0002C4 14.3684 4.29848 14.6668 4.66667 14.6668H11.3333C11.7015 14.6668 12 14.3684 12 14.0002V10.0002C12 9.63197 11.7015 9.3335 11.3333 9.3335Z"
        stroke="#374151"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_101_2447">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
    <path
      d="M12 5v14M5 12h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.666656 7.99984C0.666656 7.99984 3.33332 2.6665 7.99999 2.6665C12.6667 2.6665 15.3333 7.99984 15.3333 7.99984C15.3333 7.99984 12.6667 13.3332 7.99999 13.3332C3.33332 13.3332 0.666656 7.99984 0.666656 7.99984Z"
      stroke="#6A7282"
      stroke-width="1.33"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="#6A7282"
      stroke-width="1.33"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const EditIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2H3.33333C2.98 2 2.64 2.14 2.39333 2.39333C2.14 2.64 2 2.98 2 3.33333V12.6667C2 13.02 2.14 13.36 2.39333 13.6067C2.64 13.86 2.98 14 3.33333 14H12.6667C13.02 14 13.36 13.86 13.6067 13.6067C13.86 13.36 14 13.02 14 12.6667V8"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.25 1.75016C12.5153 1.48483 12.8753 1.3335 13.25 1.3335C13.6247 1.3335 13.9847 1.48483 14.25 1.75016C14.5153 2.0155 14.6667 2.3755 14.6667 2.75016C14.6667 3.12483 14.5153 3.48483 14.25 3.75016L8.24133 9.7595C8.08333 9.9175 7.89066 10.0375 7.56866 10.1055L5.65399 10.6655C5.59733 10.6822 5.53733 10.6835 5.47999 10.6695C5.42199 10.6548 5.36866 10.6248 5.32666 10.5828C5.28466 10.5408 5.25466 10.4875 5.23999 10.4295C5.22599 10.3722 5.22733 10.3122 5.24399 10.2555L5.80399 8.34083C5.87199 8.01883 5.99199 7.82616 6.14999 7.66816L12.25 1.56816V1.75016Z"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4H14"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66668C4.00001 14.6667 3.33334 14 3.33334 13.3333V4"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.33334 4.00016V2.66683C5.33334 2.00016 6.00001 1.3335 6.66668 1.3335H9.33334C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.66666 7.3335V11.3335"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.33334 7.3335V11.3335"
      stroke="#6A7282"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ChevronDownIcon = ({ className = "h-4 w-4" }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
    <path
      d="m4 6 4 4 4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeftIcon = ({ className = "h-4 w-4" }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
    <path
      d="m10 4-4 4 4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRightIcon = ({ className = "h-4 w-4" }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
    <path
      d="m6 4 4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackIcon = ({ className = "h-6 w-6" }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
    <path
      d="m15 6-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({ className = "h-6 w-6" }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
    <path
      d="M6 6l12 12M18 6l-12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const CalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8 3v4M16 3v4M3 10h18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const SaveIcon = ({ className = "h-4 w-4" }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
    <path
      d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3334 13.9998V9.33317C11.3334 9.15636 11.2632 8.98679 11.1382 8.86177C11.0131 8.73674 10.8436 8.6665 10.6667 8.6665H5.33341C5.1566 8.6665 4.98703 8.73674 4.86201 8.86177C4.73699 8.98679 4.66675 9.15636 4.66675 9.33317V13.9998"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66675 2V4.66667C4.66675 4.84348 4.73699 5.01305 4.86201 5.13807C4.98703 5.2631 5.1566 5.33333 5.33341 5.33333H10.0001"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RefreshIcon = ({ className = "h-5 w-5" }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
    <path
      d="M6 8a7 7 0 1 1-1 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M6 4v4h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const SectionCalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none">
    <path
      d="M6.66675 1.6665V4.99984"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 1.6665V4.99984"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 8.3335H17.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionTagIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none">
    <path
      d="M10.4884 2.15484C10.1759 1.84225 9.75207 1.6666 9.31008 1.6665H3.33341C2.89139 1.6665 2.46746 1.8421 2.1549 2.15466C1.84234 2.46722 1.66675 2.89114 1.66675 3.33317V9.30984C1.66684 9.75183 1.8425 10.1757 2.15508 10.4882L9.40842 17.7415C9.78718 18.1179 10.2995 18.3291 10.8334 18.3291C11.3674 18.3291 11.8797 18.1179 12.2584 17.7415L17.7417 12.2582C18.1181 11.8794 18.3294 11.3671 18.3294 10.8332C18.3294 10.2992 18.1181 9.78693 17.7417 9.40817L10.4884 2.15484Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.24992 6.66683C6.48004 6.66683 6.66659 6.48028 6.66659 6.25016C6.66659 6.02004 6.48004 5.8335 6.24992 5.8335C6.0198 5.8335 5.83325 6.02004 5.83325 6.25016C5.83325 6.48028 6.0198 6.66683 6.24992 6.66683Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionListIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none">
    <path
      d="M14.9999 1.6665H4.99992C4.07944 1.6665 3.33325 2.4127 3.33325 3.33317V16.6665C3.33325 17.587 4.07944 18.3332 4.99992 18.3332H14.9999C15.9204 18.3332 16.6666 17.587 16.6666 16.6665V3.33317C16.6666 2.4127 15.9204 1.6665 14.9999 1.6665Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 5H13.3334"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 11.6665V14.9998"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 8.3335H13.3416"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 8.3335H10.0083"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 8.3335H6.67508"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11.6665H10.0083"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 11.6665H6.67508"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15H10.0083"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 15H6.67508"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionScaleIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none">
    <path
      d="M13.3333 13.3332L15.8333 6.6665L18.3333 13.3332C17.6083 13.8748 16.7333 14.1665 15.8333 14.1665C14.9333 14.1665 14.0583 13.8748 13.3333 13.3332Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66675 13.3332L4.16675 6.6665L6.66675 13.3332C5.94175 13.8748 5.06675 14.1665 4.16675 14.1665C3.26675 14.1665 2.39175 13.8748 1.66675 13.3332Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83325 17.5H14.1666"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2.5V17.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5.83317H4.16667C5.83333 5.83317 8.33333 4.99984 10 4.1665C11.6667 4.99984 14.1667 5.83317 15.8333 5.83317H17.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionImageIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none">
    <path
      d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49992 9.16683C8.42039 9.16683 9.16659 8.42064 9.16659 7.50016C9.16659 6.57969 8.42039 5.8335 7.49992 5.8335C6.57944 5.8335 5.83325 6.57969 5.83325 7.50016C5.83325 8.42064 6.57944 9.16683 7.49992 9.16683Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 12.5001L14.9283 9.92841C14.6158 9.61595 14.1919 9.44043 13.75 9.44043C13.3081 9.44043 12.8842 9.61595 12.5717 9.92841L5 17.5001"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionBarcodeIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none">
    <path
      d="M5.83333 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V5.83333C2.5 6.29357 2.8731 6.66667 3.33333 6.66667H5.83333C6.29357 6.66667 6.66667 6.29357 6.66667 5.83333V3.33333C6.66667 2.8731 6.29357 2.5 5.83333 2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6666 2.5H14.1666C13.7063 2.5 13.3333 2.8731 13.3333 3.33333V5.83333C13.3333 6.29357 13.7063 6.66667 14.1666 6.66667H16.6666C17.1268 6.66667 17.4999 6.29357 17.4999 5.83333V3.33333C17.4999 2.8731 17.1268 2.5 16.6666 2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83333 13.3335H3.33333C2.8731 13.3335 2.5 13.7066 2.5 14.1668V16.6668C2.5 17.1271 2.8731 17.5002 3.33333 17.5002H5.83333C6.29357 17.5002 6.66667 17.1271 6.66667 16.6668V14.1668C6.66667 13.7066 6.29357 13.3335 5.83333 13.3335Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4999 13.3335H14.9999C14.5579 13.3335 14.134 13.5091 13.8214 13.8217C13.5088 14.1342 13.3333 14.5581 13.3333 15.0002V17.5002"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5V17.5083"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99992 5.8335V8.3335C9.99992 8.77552 9.82432 9.19945 9.51176 9.51201C9.1992 9.82457 8.77528 10.0002 8.33325 10.0002H5.83325"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10H2.50833"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2.5H10.0083"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13.3335V13.3418"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 10H14.1666"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 10V10.0083"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17.4998V16.6665"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UploadIcon = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path
      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
      fill="#F3F4F6"
    />
    <path
      d="M24 15V27"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29 20L24 15L19 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 27V31C33 31.5304 32.7893 32.0391 32.4142 32.4142C32.0391 32.7893 31.5304 33 31 33H17C16.4696 33 15.9609 32.7893 15.5858 32.4142C15.2107 32.0391 15 31.5304 15 31V27"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BarcodeIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none">
    <path
      d="M2 3.3335V12.6668"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33325 3.3335V12.6668"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 3.3335V12.6668"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3333 3.3335V12.6668"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3.3335V12.6668"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const QRCodeIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none">
    <path
      d="M4.66667 2H2.66667C2.29848 2 2 2.29848 2 2.66667V4.66667C2 5.03486 2.29848 5.33333 2.66667 5.33333H4.66667C5.03486 5.33333 5.33333 5.03486 5.33333 4.66667V2.66667C5.33333 2.29848 5.03486 2 4.66667 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3334 2H11.3334C10.9652 2 10.6667 2.29848 10.6667 2.66667V4.66667C10.6667 5.03486 10.9652 5.33333 11.3334 5.33333H13.3334C13.7016 5.33333 14.0001 5.03486 14.0001 4.66667V2.66667C14.0001 2.29848 13.7016 2 13.3334 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66667 10.6665H2.66667C2.29848 10.6665 2 10.965 2 11.3332V13.3332C2 13.7014 2.29848 13.9998 2.66667 13.9998H4.66667C5.03486 13.9998 5.33333 13.7014 5.33333 13.3332V11.3332C5.33333 10.965 5.03486 10.6665 4.66667 10.6665Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.0001 10.6665H12.0001C11.6465 10.6665 11.3073 10.807 11.0573 11.057C10.8072 11.3071 10.6667 11.6462 10.6667 11.9998V13.9998"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14V14.0067"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00008 4.6665V6.6665C8.00008 7.02013 7.85961 7.35926 7.60956 7.60931C7.35951 7.85936 7.02037 7.99984 6.66675 7.99984H4.66675"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8H2.00667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2H8.00667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10.6665V10.6732"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6667 8H11.3334"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8V8.00667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14.0002V13.3335"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
