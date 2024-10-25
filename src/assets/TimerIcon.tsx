const TimerIcon = () => {
  return (
    <svg
      width="85"
      height="86"
      viewBox="0 0 85 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="85" height="86" fill="url(#pattern0_90_183)" />
      <defs>
        <pattern
          id="pattern0_90_183"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_90_183"
            transform="scale(0.0117647 0.0116279)"
          />
        </pattern>
        <image
          id="image0_90_183"
          width="85"
          height="86"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default TimerIcon;
