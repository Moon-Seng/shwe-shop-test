const ProductAvatar = ({ tone, imageUrl, name }) => (
  <div
    className={`h-11 w-11 overflow-hidden rounded-2xl bg-gradient-to-br ${tone} flex items-center justify-center shadow-inner`}
  >
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ) : (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-black/70"
      >
        <circle
          cx="12"
          cy="12"
          r="6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 8v8M8 12h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    )}
  </div>
);

export default ProductAvatar;
