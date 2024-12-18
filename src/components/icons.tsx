import { AvatarIcon, ImageIcon } from "@radix-ui/react-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  bun: (props: IconProps) => (
    <svg
      id="Bun"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 70"
      {...props}
    >
      <title>Bun Logo</title>
      <path
        id="Shadow"
        d="M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"
      />
      <g id="Body">
        <path
          id="Background"
          d="M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z"
          style={{ fill: "#fbf0df" }}
        />
        <path
          id="Bottom_Shadow"
          data-name="Bottom Shadow"
          d="M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z"
          style={{ fill: "#f6dece" }}
        />
        <path
          id="Top"
          d="M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z"
          style={{ fill: "#ccbea7", fillRule: "evenodd" }}
        />
        <path
          id="Outline"
          d="M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"
        />
      </g>
      <g id="Mouth">
        <g id="Background-2" data-name="Background">
          <path
            d="M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z"
            style={{ fill: "#b71422" }}
          />
        </g>
        <g id="Tongue">
          <path
            id="Background-3"
            data-name="Background"
            d="M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z"
            style={{ fill: "#ff6164" }}
          />
          <path
            id="Outline-2"
            data-name="Outline"
            d="M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"
          />
        </g>
        <path
          id="Outline-3"
          data-name="Outline"
          d="M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"
        />
      </g>
      <g id="Face">
        <ellipse
          id="Right_Blush"
          data-name="Right Blush"
          cx="53.22"
          cy="40.18"
          rx="5.85"
          ry="3.44"
          style={{ fill: "#febbd0" }}
        />
        <ellipse
          id="Left_Bluch"
          data-name="Left Bluch"
          cx="22.95"
          cy="40.18"
          rx="5.85"
          ry="3.44"
          style={{ fill: "#febbd0" }}
        />
        <path
          id="Eyes"
          d="M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z"
          style={{ fillRule: "evenodd" }}
        />
        <path
          id="Iris"
          d="M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z"
          style={{ fill: "#fff", fillRule: "evenodd" }}
        />
      </g>
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="36" height="36" fill="url(#pattern0_1_3)" />
      <defs>
        <pattern
          id="pattern0_1_3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_3" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_1_3"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  ),
  menu: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M3 5H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg
      width="23"
      height="23"
      viewBox="0 0 1200 1227"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  facebook: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  discord: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  credit: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  ),
  dollarSign: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  activity: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  bot: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  robot: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="10" x="3" y="11" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" x2="8" y1="16" y2="16" />
      <line x1="16" x2="16" y1="16" y2="16" />
    </svg>
  ),
  javascript: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path
        fill="currentColor"
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
      />
    </svg>
  ),
  typescript: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
      />
    </svg>
  ),
  bash: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m8 16 2-2-2-2" />
      <path d="M12 18h4" />
    </svg>
  ),
  shadcn: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  ),
  docker: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Docker"
      role="img"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width="512" height="512" rx="15%" fill="#ffffff" />
      <path
        stroke="#066da5"
        strokeWidth="38"
        d="M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"
      />
      <path
        fill="#066da5"
        d="m472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39"
      />
    </svg>
  ),
  drizzle: (props: IconProps) => (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37.058 78.7296C38.9195 75.4813 37.7789 71.368 34.5104 69.5422C31.2419 67.7164 27.0832 68.8696 25.2218 72.1179L3.37059 110.248C1.50909 113.496 2.64969 117.61 5.91818 119.435C9.18668 121.261 13.3454 120.108 15.2068 116.86L37.058 78.7296Z"
        fill="#c5f74f"
      />
      <path
        d="M84.157 49.4932C86.0185 46.2449 84.8779 42.1316 81.6094 40.3058C78.3409 38.4801 74.1822 39.6333 72.3208 42.8815L50.4696 81.0116C48.6081 84.2598 49.7487 88.3732 53.0172 90.1989C56.2857 92.0247 60.4444 90.8715 62.3058 87.6233L84.157 49.4932Z"
        fill="#c5f74f"
      />
      <path
        d="M156.63 49.4946C158.491 46.2463 157.351 42.133 154.082 40.3072C150.814 38.4815 146.655 39.6346 144.793 42.8829L122.942 81.013C121.081 84.2612 122.221 88.3746 125.49 90.2003C128.758 92.0261 132.917 90.8729 134.778 87.6246L156.63 49.4946Z"
        fill="#c5f74f"
      />
      <path
        d="M109.52 78.7296C111.381 75.4813 110.24 71.368 106.972 69.5422C103.703 67.7164 99.5448 68.8696 97.6833 72.1179L75.8321 110.248C73.9706 113.496 75.1112 117.61 78.3797 119.435C81.6482 121.261 85.8069 120.108 87.6684 116.86L109.52 78.7296Z"
        fill="#c5f74f"
      />
    </svg>
  ),
  supabase: (props: IconProps) => (
    <svg
      viewBox="0 0 109 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#paint1_linear)"
        fillOpacity="0.2"
      />
      <path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="53.9738"
          y1="54.974"
          x2="94.1635"
          y2="71.8295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="36.1558"
          y1="30.578"
          x2="54.4844"
          y2="65.0806"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  resend: (props: IconProps) => (
    <svg
      viewBox="0 0 600 600"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
        fill="white"
      />
    </svg>
  ),
  clerk: (props: IconProps) => (
    <svg
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <defs>
        <linearGradient
          x1="84.775%"
          y1="-9.121%"
          x2="-40.08%"
          y2="116.867%"
          id="a"
        >
          <stop stopColor="#17CCFC" offset="0%" />
          <stop stopColor="#5D31FF" offset="50%" />
          <stop stopColor="#F35AFF" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none">
        <path fill="#FFF" d="M0 0h90v90H0z" />
        <path
          d="m59.468 9.877-8.961 9.002a1.773 1.773 0 0 1-2.18.262 21.247 21.247 0 0 0-23.187.755 21.418 21.418 0 0 0-5.33 5.355 21.536 21.536 0 0 0-.758 23.299 1.792 1.792 0 0 1-.262 2.183l-8.96 9.001a1.774 1.774 0 0 1-2.69-.196A37.6 37.6 0 0 1 .014 36.45a37.583 37.583 0 0 1 8.388-22.657 37.053 37.053 0 0 1 5.33-5.354A37.214 37.214 0 0 1 36.285.014 37.197 37.197 0 0 1 59.267 7.17a1.781 1.781 0 0 1 .722 1.307 1.79 1.79 0 0 1-.52 1.4Z"
          fill="url(#a)"
          transform="translate(8 8)"
        />
        <path
          d="m67.46 73.09-8.962-9.002a1.774 1.774 0 0 0-2.18-.262 21.25 21.25 0 0 1-11.013 3.079 21.25 21.25 0 0 1-11.013-3.079 1.77 1.77 0 0 0-2.18.262l-8.96 9.002a1.784 1.784 0 0 0-.542 1.414 1.79 1.79 0 0 0 .737 1.322A37.2 37.2 0 0 0 45.3 83a37.2 37.2 0 0 0 21.952-7.174 1.781 1.781 0 0 0 .743-1.319 1.796 1.796 0 0 0-.535-1.417ZM45.324 56.194c5.887 0 10.66-4.795 10.66-10.71 0-5.914-4.773-10.708-10.66-10.708-5.888 0-10.662 4.794-10.662 10.709 0 5.914 4.774 10.709 10.662 10.709Z"
          fill="#1F0256"
        />
      </g>
    </svg>
  ),
  sd: (props: IconProps) => (
    <svg
      {...props}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="213"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 213"
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#9D39FF" />
          <stop offset="100%" stop-color="#A380FF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M72.418 212.45c49.478 0 81.658-26.205 81.658-65.626 0-30.572-19.572-49.998-54.569-58.043l-22.469-6.74c-19.71-4.424-31.215-9.738-28.505-23.312 2.255-11.292 9.002-17.667 24.69-17.667 49.872 0 68.35 17.667 68.35 17.667V16.237S123.583 0 73.223 0C25.757 0 0 24.424 0 62.236c0 30.571 17.85 48.35 54.052 56.798 2.534.633 3.83.959 3.885.976 5.507 1.704 12.938 3.956 22.293 6.755 18.504 4.425 23.262 9.121 23.262 23.2 0 12.872-13.374 20.19-31.074 20.19C21.432 170.154 0 144.36 0 144.36v47.078s13.402 21.01 72.418 21.01Z"
      />
      <path
        fill="#E80000"
        d="M225.442 209.266c17.515 0 30.558-12.67 30.558-29.812 0-17.515-12.67-29.813-30.558-29.813-17.515 0-30.185 12.298-30.185 29.813s12.67 29.812 30.185 29.812Z"
      />
    </svg>
  ),
  sam: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#0081fb"
        d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"
      />
      <linearGradient
        id="wSMw7pqi7WIWHewz2_TZXa"
        x1="42.304"
        x2="13.533"
        y1="24.75"
        y2="24.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0081fb" />
        <stop offset=".995" stop-color="#0064e1" />
      </linearGradient>
      <path
        fill="url(#wSMw7pqi7WIWHewz2_TZXa)"
        d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"
      />
      <linearGradient
        id="wSMw7pqi7WIWHewz2_TZXb"
        x1="7.635"
        x2="7.635"
        y1="32.87"
        y2="13.012"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0081fb" />
        <stop offset=".995" stop-color="#0064e1" />
      </linearGradient>
      <path
        fill="url(#wSMw7pqi7WIWHewz2_TZXb)"
        d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"
      />
      <path
        d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z"
        opacity=".05"
      />
      <path
        d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z"
        opacity=".07"
      />
    </svg>
  ),
  fastapi: (props: IconProps) => (
    <svg
      {...props}
      fill="none"
      height="2500"
      width="2500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 154 154"
    >
      <circle cx="77" cy="77" fill="#05998b" r="77" />
      <path
        d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
        fill="#fff"
      />
    </svg>
  ),

  avatar: AvatarIcon,
  placeholder: ImageIcon,
};
