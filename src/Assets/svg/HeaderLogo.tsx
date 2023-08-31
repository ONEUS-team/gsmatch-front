const HeaderLogo = () => (
  <svg
    width="247"
    height="48"
    viewBox="0 0 247 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect y="7.96875" width="30" height="32.0625" fill="url(#pattern0)" />
    <path
      d="M59.1719 18.8203C58.3906 16.1641 56.2422 14.5234 53.1562 14.5234C48.7812 14.5234 45.8125 17.8828 45.8125 23.8203C45.8125 29.7969 48.7031 33.1953 53.1953 33.1953C57.2383 33.1953 59.6406 30.9102 59.7188 27.3359H53.5859V22.9219H65.3828V26.4375C65.3828 33.8594 60.3047 38.3906 53.1562 38.3906C45.2266 38.3906 39.8359 32.8438 39.8359 23.8984C39.8359 14.7188 45.5781 9.32812 53.0391 9.32812C59.4062 9.32812 64.3281 13.2344 65.1094 18.8203H59.1719ZM85.0312 17.8047C84.7969 15.5781 83 14.25 80.1484 14.25C77.1797 14.25 75.5391 15.6172 75.5 17.4922C75.4609 19.5234 77.6094 20.4609 80.0312 21.0078L82.5703 21.6328C87.4141 22.7266 91.0469 25.1875 91.0469 29.9141C91.0469 35.1094 86.9844 38.3906 80.1094 38.3906C73.2734 38.3906 68.8984 35.2266 68.7422 29.1719H74.4453C74.6406 32.0234 76.9062 33.4688 80.0312 33.4688C83.1172 33.4688 85.1094 32.0234 85.1094 29.9141C85.1094 28 83.3516 27.1016 80.2656 26.3203L77.1797 25.5781C72.4141 24.4062 69.4844 22.0234 69.4844 17.8828C69.4844 12.7266 74.0156 9.32812 80.1875 9.32812C86.4375 9.32812 90.5781 12.8047 90.6562 17.8047H85.0312ZM94.875 9.71875H102.141L109.992 28.8984H110.305L118.156 9.71875H125.422V38H119.719V19.4844H119.484L112.102 37.8828H108.195L100.812 19.4062H100.578V38H94.875V9.71875ZM134.914 38H128.586L138.391 9.71875H145.93L155.695 38H149.406L147.297 31.4766H137.062L134.914 38ZM138.547 26.9062H145.812L142.258 16.0859H142.062L138.547 26.9062ZM154.328 14.5625V9.71875H177.492V14.5625H168.82V38H163V14.5625H154.328ZM198.781 19.5625C198.312 16.4375 195.891 14.5234 192.609 14.5234C188.195 14.5234 185.305 17.9219 185.305 23.8594C185.305 29.9531 188.234 33.1953 192.57 33.1953C195.812 33.1953 198.195 31.3984 198.781 28.3516L204.719 28.3906C204.055 33.625 199.68 38.3906 192.492 38.3906C184.914 38.3906 179.328 33.0781 179.328 23.8594C179.328 14.6406 185.031 9.32812 192.492 9.32812C199.016 9.32812 203.938 13.0781 204.719 19.5625H198.781ZM208.82 38V9.71875H214.68V21.4375H226.945V9.71875H232.844V38H226.945V26.2812H214.68V38H208.82ZM240.891 38.3516C239.055 38.3516 237.57 36.8672 237.609 35.0703C237.57 33.2734 239.055 31.8281 240.891 31.8281C242.609 31.8281 244.133 33.2734 244.133 35.0703C244.133 36.8672 242.609 38.3516 240.891 38.3516Z"
      fill="#F0A0BD"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_108_237"
          transform="scale(0.003125 0.00292398)"
        />
      </pattern>
      <image
        id="image0_108_237"
        width="320"
        height="342"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default HeaderLogo;