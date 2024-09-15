import { twMerge } from "tailwind-merge";

interface IconProps {
  className?: string;
}

export const Icons = {
  ARROW_DOWN: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[0.625rem] w-[0.625rem] fill-current", className)}
    >
      <path d="M9.15167 2.14294H8.31461C8.25769 2.14294 8.20412 2.17085 8.17064 2.21661L4.99988 6.58714L1.82912 2.21661C1.79564 2.17085 1.74207 2.14294 1.68515 2.14294H0.848094C0.775549 2.14294 0.733139 2.22553 0.775549 2.28469L4.71082 7.70991C4.85367 7.90634 5.14608 7.90634 5.28783 7.70991L9.22309 2.28469C9.26662 2.22553 9.22421 2.14294 9.15167 2.14294Z" />
    </svg>
  ),
  ASSET: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[1.375rem] w-[1.375rem] fill-current", className)}
    >
      <path d="M11.3019 0.61172C11.2848 0.611877 11.2676 0.612455 11.2505 0.613451C11.178 0.618598 11.1065 0.6331 11.038 0.656565C10.9861 0.674479 10.9362 0.697393 10.8891 0.724959L2.23394 5.52414C2.11214 5.5917 2.011 5.68887 1.94069 5.80587C1.87038 5.92287 1.83336 6.05558 1.83337 6.19068C1.83337 6.19587 1.83373 6.20176 1.83391 6.2073C1.83373 6.21336 1.83391 6.21942 1.83391 6.22565V15.8101C1.83389 15.9493 1.87319 16.086 1.94764 16.2054C2.02208 16.3249 2.12888 16.4228 2.25666 16.4886L10.9083 21.2862C10.9245 21.295 10.9407 21.3032 10.9569 21.311V21.3128C10.9813 21.3241 11.0063 21.3341 11.0318 21.3429C11.0318 21.3438 11.0408 21.3455 11.0426 21.3464C11.0678 21.355 11.0931 21.3617 11.1192 21.3676C11.1282 21.3684 11.1291 21.3702 11.1336 21.371C11.1589 21.3762 11.185 21.3807 11.2111 21.3837C11.2111 21.3841 11.2201 21.3844 11.2238 21.3845C11.2508 21.3871 11.2787 21.3889 11.3058 21.3889C11.3328 21.3889 11.3608 21.3871 11.3878 21.3845C11.3878 21.3841 11.3968 21.3838 11.4004 21.3837C11.4265 21.381 11.4524 21.3768 11.4779 21.371C11.487 21.3702 11.4879 21.3693 11.4924 21.3676C11.5182 21.3617 11.5438 21.3546 11.569 21.3464C11.569 21.3455 11.578 21.3438 11.5798 21.3429C11.6052 21.3341 11.6302 21.3241 11.6546 21.3128V21.3111C11.6711 21.3033 11.6873 21.295 11.7033 21.2863L20.3552 16.4886C20.4829 16.4229 20.5897 16.325 20.6641 16.2055C20.7386 16.086 20.7779 15.9494 20.7778 15.8102V6.21985C20.7778 6.21206 20.7773 6.20496 20.7771 6.19752H20.7774V6.19059C20.7773 6.0794 20.7522 5.96954 20.7037 5.86859C20.6552 5.76763 20.5845 5.67797 20.4964 5.60578C20.4874 5.59885 20.4793 5.59175 20.4703 5.58492C20.4703 5.58318 20.4613 5.58059 20.4613 5.57885C20.4305 5.55632 20.3982 5.53592 20.3645 5.51782L11.7142 0.720717C11.5878 0.6478 11.4429 0.609868 11.2954 0.611114L11.3019 0.61172ZM11.3109 2.56164C11.3758 2.56164 11.441 2.57783 11.4993 2.61012L17.3912 5.87745C17.6426 6.01684 17.6426 6.36513 17.3912 6.50451L11.4992 9.77184C11.4419 9.80362 11.3769 9.82034 11.3107 9.82034C11.2446 9.82034 11.1796 9.80362 11.1223 9.77184L5.23037 6.50451C4.97906 6.36521 4.97897 6.01684 5.23037 5.87745L11.1224 2.61012C11.1797 2.57841 11.2447 2.56169 11.3108 2.56164H11.3109ZM4.02776 8.15263C4.09579 8.15169 4.1628 8.1686 4.22155 8.20155L10.1021 11.4625C10.1593 11.4941 10.2067 11.5397 10.2397 11.5946C10.2727 11.6495 10.2901 11.7118 10.2901 11.7752V18.2965C10.2901 18.5746 9.97671 18.7484 9.72586 18.6093L3.84559 15.3484C3.78843 15.3167 3.74095 15.2711 3.70795 15.2162C3.67494 15.1613 3.65757 15.099 3.65757 15.0356V8.51426C3.65757 8.30578 3.83378 8.15584 4.02776 8.15263ZM18.5938 8.15263C18.7876 8.1561 18.964 8.3057 18.964 8.51426V15.0355C18.964 15.1645 18.8919 15.2838 18.7759 15.3484L12.8954 18.6093C12.6449 18.7483 12.3314 18.5746 12.3314 18.2964V11.7752C12.3314 11.6462 12.4035 11.527 12.5194 11.4624L18.3997 8.20146C18.4586 8.1685 18.5256 8.15159 18.5937 8.15255L18.5938 8.15263Z" />
    </svg>
  ),
  COMPONENT: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={twMerge("h-[1.25rem] w-[1.25rem] fill-none", className)}
    >
      <path d="M0 0H20V20H0z" className="fill-[#1E1E1E]"></path>
      <path
        fill="#E3EAEF"
        d="M0 0H1336V860H0z"
        transform="translate(-112 -427)"
      ></path>
      <rect
        width="1319"
        height="795"
        x="-103.5"
        y="-370.5"
        className="fill-slate-800"
        rx="3.5"
      ></rect>
      <rect
        width="1319"
        height="795"
        x="-103.5"
        y="-370.5"
        className="stroke-[#D8DFE6]"
        rx="3.5"
      ></rect>
      <g clipPath="url(#clip0_0_1)">
        <rect
          width="479"
          height="720"
          x="-88"
          y="-311"
          className="fill-slate-800"
          rx="2"
        ></rect>
        <mask id="path-4-inside-1_0_1" className="fill-slate-800">
          <path d="M-88-266h479v675H-88v-675z"></path>
        </mask>
        <path className="fill-slate-800" d="M-88-266h479v675H-88v-675z"></path>
        <path
          fill="#D0D7DE"
          d="M390-266v675h2v-675h-2zM-87 409v-675h-2v675h2z"
          mask="url(#path-4-inside-1_0_1)"
        ></path>
        <path
          className="fill-slate-800"
          d="M0 0H471V28H0z"
          transform="translate(-84 -258)"
        ></path>
        <mask id="path-6-inside-2_0_1" className="fill-current">
          <path d="M19.814 6.891l-.007-.036c-.005-.025-.008-.047-.015-.072-.005-.014-.01-.027-.012-.041-.008-.02-.012-.042-.022-.062-.005-.014-.012-.027-.02-.041l-.03-.057c-.007-.012-.014-.027-.024-.04l-.064-.088a.7.7 0 00-.042-.046c-.01-.012-.022-.022-.034-.032-.015-.015-.032-.027-.047-.04a.555.555 0 00-.039-.029c-.005-.002-.01-.007-.014-.01L10.469.323a.842.842 0 00-.935 0l-8.98 5.98c-.005.002-.01.007-.014.009-.013.01-.025.02-.04.03-.017.012-.032.027-.046.039-.013.01-.022.022-.035.032a.378.378 0 00-.041.046.58.58 0 00-.064.089c-.008.012-.017.024-.025.039l-.03.057c-.007.012-.012.027-.019.041l-.022.062c-.005.014-.01.027-.012.041L.19 6.86l-.007.036a.835.835 0 00-.008.11v5.98c0 .037.003.073.008.11l.007.037.015.071.012.042.022.061c.005.015.012.027.02.042.01.02.017.037.03.057.007.012.014.027.024.039.012.017.022.034.037.051l.03.037a.69.69 0 00.04.047c.01.012.023.022.035.032l.047.04c.012.009.024.019.04.029l.014.01 8.977 5.978a.837.837 0 00.938 0l8.976-5.979c.005-.002.01-.007.015-.01a.53.53 0 01.04-.029c.017-.012.031-.027.046-.04.012-.009.022-.021.034-.031.015-.015.03-.03.042-.047l.03-.037.036-.051c.008-.012.018-.025.025-.04l.03-.056c.007-.012.012-.027.02-.042l.021-.061a.21.21 0 00.012-.042c.008-.022.01-.046.015-.071l.008-.037a.837.837 0 00.007-.11V7.002c-.007-.037-.01-.074-.015-.11zM10.844 2.6l6.615 4.404-2.953 1.975-3.659-2.446V2.6h-.002zm-1.688 0v3.933L5.497 8.979 2.543 7.004 9.156 2.6zm-7.29 5.98l2.111 1.413-2.111 1.411V8.581zm7.29 8.803l-6.613-4.405 2.954-1.974 3.659 2.446v3.933zM10 11.986L7.014 9.993 10 7.996l2.986 1.994L10 11.986zm.845 5.397V13.45l3.658-2.446 2.954 1.974-6.612 4.405zm7.29-5.981L16.023 9.99l2.112-1.412v2.824z"></path>
        </mask>
        <path
          className="fill-current stroke-current stroke-[0.002px]"
          d="M19.814 6.891l-.007-.036c-.005-.025-.008-.047-.015-.072-.005-.014-.01-.027-.012-.041-.008-.02-.012-.042-.022-.062-.005-.014-.012-.027-.02-.041l-.03-.057c-.007-.012-.014-.027-.024-.04l-.064-.088a.7.7 0 00-.042-.046c-.01-.012-.022-.022-.034-.032-.015-.015-.032-.027-.047-.04a.555.555 0 00-.039-.029c-.005-.002-.01-.007-.014-.01L10.469.323a.842.842 0 00-.935 0l-8.98 5.98c-.005.002-.01.007-.014.009-.013.01-.025.02-.04.03-.017.012-.032.027-.046.039-.013.01-.022.022-.035.032a.378.378 0 00-.041.046.58.58 0 00-.064.089c-.008.012-.017.024-.025.039l-.03.057c-.007.012-.012.027-.019.041l-.022.062c-.005.014-.01.027-.012.041L.19 6.86l-.007.036a.835.835 0 00-.008.11v5.98c0 .037.003.073.008.11l.007.037.015.071.012.042.022.061c.005.015.012.027.02.042.01.02.017.037.03.057.007.012.014.027.024.039.012.017.022.034.037.051l.03.037a.69.69 0 00.04.047c.01.012.023.022.035.032l.047.04c.012.009.024.019.04.029l.014.01 8.977 5.978a.837.837 0 00.938 0l8.976-5.979c.005-.002.01-.007.015-.01a.53.53 0 01.04-.029c.017-.012.031-.027.046-.04.012-.009.022-.021.034-.031.015-.015.03-.03.042-.047l.03-.037.036-.051c.008-.012.018-.025.025-.04l.03-.056c.007-.012.012-.027.02-.042l.021-.061a.21.21 0 00.012-.042c.008-.022.01-.046.015-.071l.008-.037a.837.837 0 00.007-.11V7.002c-.007-.037-.01-.074-.015-.11zM10.844 2.6l6.615 4.404-2.953 1.975-3.659-2.446V2.6h-.002zm-1.688 0v3.933L5.497 8.979 2.543 7.004 9.156 2.6zm-7.29 5.98l2.111 1.413-2.111 1.411V8.581zm7.29 8.803l-6.613-4.405 2.954-1.974 3.659 2.446v3.933zM10 11.986L7.014 9.993 10 7.996l2.986 1.994L10 11.986zm.845 5.397V13.45l3.658-2.446 2.954 1.974-6.612 4.405zm7.29-5.981L16.023 9.99l2.112-1.412v2.824z"
          mask="url(#path-6-inside-2_0_1)"
        ></path>
      </g>
      <rect
        width="478"
        height="719"
        x="-87.5"
        y="-310.5"
        className="stroke-[#D8DFE6]"
        rx="1.5"
      ></rect>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="479"
            height="720"
            x="-88"
            y="-311"
            className="fill-slate-800"
            rx="2"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  ENERGY: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-4 w-4 fill-current", className)}
    >
      <path d="M13.9999 5.27216H10.0659L13.6034 0.802516C13.6767 0.707874 13.6106 0.570374 13.4909 0.570374H6.64273C6.59273 0.570374 6.54451 0.597159 6.51951 0.641802L1.89273 8.63287C1.83737 8.72752 1.90523 8.84716 2.01594 8.84716H5.13023L3.5338 15.2329C3.49987 15.3722 3.66773 15.4704 3.7713 15.3704L14.0981 5.5168C14.1909 5.4293 14.1284 5.27216 13.9999 5.27216ZM5.61059 11.9364L6.68737 7.63287H3.87666L7.26237 1.78645H11.2731L7.55344 6.48823H11.3213L5.61059 11.9364Z" />
    </svg>
  ),
  ENERGY_FILLED: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 9 12"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-3 w-[0.5625rem] fill-current", className)}
    >
      <path d="M2.40167 7.72576H0.593342C0.360008 7.72576 0.187439 7.62125 0.0756332 7.41222C-0.0361724 7.20319 -0.0240196 7.00145 0.112092 6.80701L4.47251 0.536175C4.56973 0.400064 4.69612 0.305273 4.85168 0.2518C5.00723 0.198328 5.16765 0.200759 5.33293 0.259092C5.4982 0.317425 5.61973 0.419509 5.69751 0.565342C5.77529 0.711175 5.80445 0.866731 5.78501 1.03201L5.31834 4.80909H7.57876C7.83154 4.80909 8.00897 4.9209 8.11105 5.14451C8.21313 5.36812 8.18154 5.57715 8.01626 5.77159L3.21834 11.5174C3.1114 11.6438 2.98015 11.7265 2.82459 11.7653C2.66904 11.8042 2.51834 11.7896 2.37251 11.7216C2.22668 11.6535 2.11244 11.549 2.0298 11.4081C1.94716 11.2671 1.91556 11.114 1.93501 10.9487L2.40167 7.72576Z" />
    </svg>
  ),
  LOCATION: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[1.375rem] w-[1.375rem] fill-current", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6944 1.22223C6.48031 1.22223 3.05554 4.27778 3.05554 7.94445C3.05554 13.4689 10.6944 20.7778 10.6944 20.7778C10.6944 20.7778 18.3333 13.4689 18.3333 7.94445C18.3333 4.27778 14.9086 1.22223 10.6944 1.22223ZM10.6944 19.0056C8.32638 16.5245 4.32869 11.5378 4.32869 7.94445C4.32869 4.91334 7.19327 2.44445 10.6944 2.44445C12.4004 2.44445 14.0173 3.03112 15.2268 4.10667C16.3981 5.15778 17.0602 6.51445 17.0602 7.94445C17.0602 11.5378 13.0625 16.5245 10.6944 19.0056ZM13.2407 7.94445C13.2407 9.30112 12.1076 10.3889 10.6944 10.3889C9.28124 10.3889 8.14813 9.30112 8.14813 7.94445C8.14813 6.58779 9.28124 5.50001 10.6944 5.50001C12.1076 5.50001 13.2407 6.58779 13.2407 7.94445Z"
      />
    </svg>
  ),
  LOGO: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 103 14"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[14px] w-[103px] fill-current", className)}
    >
      <path d="M36.4338 0.304383L42.4117 13.8038H38.4339L37.3686 11.1732L36.26 8.34729L34.521 4.02106L32.782 8.34729L31.6734 11.1732L30.6081 13.8038H26.6952L32.6731 0.304383H36.4338ZM24.7391 7.86909C25.1957 7.12976 25.4344 6.2823 25.4344 5.30427C25.4344 4.32624 25.1732 3.41309 24.695 2.65213C24.1952 1.89118 23.4991 1.32647 22.6084 0.913148C21.6953 0.499828 20.6299 0.304383 19.4348 0.304383H13.2615V3.30415H19.1961C19.9571 3.30415 20.5659 3.47797 20.9784 3.82561C21.3701 4.17325 21.5871 4.67308 21.5871 5.28184C21.5871 5.89061 21.3701 6.39043 20.9784 6.73807C20.5651 7.08571 19.9787 7.2379 19.1961 7.2379H13.2615V13.7813H17.0871V10.1944H19.1737L21.6304 13.7813H25.7171L22.783 9.56483C23.6089 9.15151 24.2609 8.60842 24.7391 7.86909ZM102.953 0.304383H99.2143L99.1927 4.17405L102.932 8.69573L102.953 0.304383ZM47.4757 3.63016C48.0628 3.32578 48.7148 3.15196 49.4542 3.15196C50.6933 3.15196 51.7587 3.69505 52.6278 4.73876L55.0628 2.5432C54.4108 1.73899 53.585 1.08697 52.5845 0.65202C51.5849 0.217073 50.4763 0 49.2371 0C47.8025 0 46.5417 0.304383 45.4115 0.913148C44.3029 1.52191 43.4114 2.34775 42.7594 3.39146C42.1073 4.47843 41.803 5.67433 41.803 7.02163C41.803 8.36892 42.1073 9.58645 42.7594 10.6518C43.4114 11.6955 44.3029 12.5213 45.4115 13.1085C46.5201 13.7172 47.8025 14 49.2371 14C50.4763 14 51.5632 13.7829 52.5845 13.348C53.5625 12.913 54.3892 12.2826 55.0628 11.4568L52.6278 9.26124C51.7362 10.3266 50.6709 10.848 49.4542 10.848C48.7148 10.848 48.0628 10.6958 47.4757 10.3698C46.8885 10.0655 46.4536 9.60888 46.15 9.02174C45.8464 8.4346 45.6934 7.76096 45.6934 7C45.6934 6.23904 45.8456 5.5654 46.15 4.99989C46.4544 4.41275 46.911 3.95617 47.4757 3.63016ZM0 3.32578H4.15242V13.8038H7.97803V3.32578H12.108V0.304383H0V3.32578ZM90.1277 13.8038H93.8668L93.8884 9.76027L90.1493 4.99989L90.1277 13.8038ZM79.5408 0.304383L73.5845 13.8038H77.4758L78.5411 11.1732L79.6497 8.34729L81.3887 4.02106L83.1277 8.34729L84.2363 11.1732L85.3016 13.8038H89.2794L83.3015 0.304383H79.5408ZM99.2143 7.49983L93.258 0.304383H90.1061V2.10825L93.8452 6.62993L99.8015 13.8254H102.953V12.2602L99.2143 7.49983ZM68.9106 13.8038H72.7362V0.304383H68.9106V13.8038ZM55.6716 3.32578H59.8024V13.8038H63.628V3.32578H67.758V0.304383H55.6716V3.32578Z" />
    </svg>
  ),
  RECEIVER: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 15 16"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-4 w-[0.9375rem] fill-current", className)}
    >
      <path d="M10.8333 1.5C12.0833 1.5 13.3333 2 14.3333 2.91667L15 2.25C13.8333 1.08333 12.3333 0.5 10.8333 0.5C9.33333 0.5 7.83333 1.08333 6.66667 2.25L7.33333 2.91667C8.33333 2 9.58333 1.5 10.8333 1.5ZM8.08333 3.58333L8.75 4.25C9.33333 3.66667 10.0833 3.41667 10.8333 3.41667C11.5833 3.41667 12.3333 3.66667 12.9167 4.25L13.5833 3.58333C12.8333 2.83333 11.8333 2.41667 10.8333 2.41667C9.83333 2.41667 8.83333 2.83333 8.08333 3.58333ZM13.3333 8.83333H11.6667V5.5H10V8.83333H1.66667C0.75 8.83333 0 9.58333 0 10.5V13.8333C0 14.75 0.75 15.5 1.66667 15.5H13.3333C14.25 15.5 15 14.75 15 13.8333V10.5C15 9.58333 14.25 8.83333 13.3333 8.83333ZM13.3333 13.8333H1.66667V10.5H13.3333V13.8333ZM2.5 11.3333H4.16667V13H2.5V11.3333ZM5.41667 11.3333H7.08333V13H5.41667V11.3333ZM8.33333 11.3333H10V13H8.33333V11.3333Z" />
    </svg>
  ),
  SEARCH: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[0.875rem] w-[0.875rem] fill-current", className)}
    >
      <path d="M13.2127 12.3535L9.15493 8.29564C9.78462 7.48158 10.1252 6.48627 10.1252 5.43939C10.1252 4.18627 9.63618 3.01127 8.75181 2.12533C7.86743 1.23939 6.68931 0.751892 5.43774 0.751892C4.18618 0.751892 3.00806 1.24095 2.12368 2.12533C1.23774 3.0097 0.750244 4.18627 0.750244 5.43939C0.750244 6.69095 1.23931 7.86908 2.12368 8.75345C3.00806 9.63939 4.18462 10.1269 5.43774 10.1269C6.48462 10.1269 7.47837 9.78627 8.29243 9.15814L12.3502 13.2144C12.3621 13.2263 12.3763 13.2357 12.3918 13.2422C12.4074 13.2486 12.424 13.2519 12.4409 13.2519C12.4577 13.2519 12.4744 13.2486 12.4899 13.2422C12.5055 13.2357 12.5196 13.2263 12.5315 13.2144L13.2127 12.5347C13.2246 12.5228 13.2341 12.5087 13.2405 12.4931C13.247 12.4776 13.2503 12.4609 13.2503 12.4441C13.2503 12.4272 13.247 12.4106 13.2405 12.395C13.2341 12.3795 13.2246 12.3654 13.2127 12.3535ZM7.91274 7.91439C7.25024 8.57533 6.37212 8.93939 5.43774 8.93939C4.50337 8.93939 3.62524 8.57533 2.96274 7.91439C2.30181 7.25189 1.93774 6.37377 1.93774 5.43939C1.93774 4.50502 2.30181 3.62533 2.96274 2.96439C3.62524 2.30345 4.50337 1.93939 5.43774 1.93939C6.37212 1.93939 7.25181 2.30189 7.91274 2.96439C8.57368 3.62689 8.93774 4.50502 8.93774 5.43939C8.93774 6.37377 8.57368 7.25345 7.91274 7.91439Z" />
    </svg>
  ),
  SENSOR: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 18 15"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[0.9375rem] w-[1.125rem] fill-current", className)}
    >
      <path d="M9.00002 10.7778C8.54169 10.7778 8.14933 10.6146 7.82294 10.2882C7.49655 9.96186 7.33335 9.5695 7.33335 9.11117C7.33335 8.65283 7.49655 8.26047 7.82294 7.93408C8.14933 7.60769 8.54169 7.4445 9.00002 7.4445C9.45835 7.4445 9.85072 7.60769 10.1771 7.93408C10.5035 8.26047 10.6667 8.65283 10.6667 9.11117C10.6667 9.5695 10.5035 9.96186 10.1771 10.2882C9.85072 10.6146 9.45835 10.7778 9.00002 10.7778ZM5.04169 12.1737C4.72224 11.7431 4.46877 11.2709 4.28127 10.757C4.09377 10.2431 4.00002 9.6945 4.00002 9.11117C4.00002 7.72228 4.48613 6.54172 5.45835 5.5695C6.43058 4.59728 7.61113 4.11117 9.00002 4.11117C10.3889 4.11117 11.5695 4.59728 12.5417 5.5695C13.5139 6.54172 14 7.72228 14 9.11117C14 9.6945 13.9063 10.2501 13.7188 10.7778C13.5313 11.3056 13.2778 11.7778 12.9584 12.1945C12.8195 12.3751 12.6354 12.4653 12.4063 12.4653C12.1771 12.4653 11.9722 12.3751 11.7917 12.1945C11.6389 12.0417 11.559 11.8542 11.5521 11.632C11.5452 11.4098 11.6111 11.1945 11.75 10.9862C11.9445 10.7084 12.0903 10.4132 12.1875 10.1007C12.2847 9.78825 12.3334 9.45839 12.3334 9.11117C12.3334 8.1945 12.007 7.40978 11.3542 6.757C10.7014 6.10422 9.91669 5.77783 9.00002 5.77783C8.08335 5.77783 7.29863 6.10422 6.64585 6.757C5.99308 7.40978 5.66669 8.1945 5.66669 9.11117C5.66669 9.47228 5.71877 9.80561 5.82294 10.1112C5.9271 10.4167 6.06947 10.7084 6.25002 10.9862C6.38891 11.1945 6.45141 11.4132 6.43752 11.6424C6.42363 11.8716 6.3403 12.0626 6.18752 12.2153C6.02085 12.382 5.82294 12.4619 5.59377 12.4549C5.3646 12.448 5.18058 12.3542 5.04169 12.1737ZM2.68752 14.5487C2.06252 13.8126 1.56946 12.9827 1.20835 12.0591C0.847243 11.1355 0.666687 10.1528 0.666687 9.11117C0.666687 7.95839 0.885437 6.87505 1.32294 5.86117C1.76044 4.84728 2.35419 3.96533 3.10419 3.21533C3.85419 2.46533 4.73613 1.87158 5.75002 1.43408C6.76391 0.996582 7.84724 0.777832 9.00002 0.777832C10.1528 0.777832 11.2361 0.996582 12.25 1.43408C13.2639 1.87158 14.1459 2.46533 14.8959 3.21533C15.6459 3.96533 16.2396 4.84728 16.6771 5.86117C17.1146 6.87505 17.3334 7.95839 17.3334 9.11117C17.3334 10.1528 17.1528 11.1389 16.7917 12.0695C16.4306 13.0001 15.9375 13.8334 15.3125 14.5695C15.1597 14.7362 14.9722 14.8195 14.75 14.8195C14.5278 14.8195 14.3334 14.7362 14.1667 14.5695C14.0139 14.4167 13.934 14.2257 13.9271 13.9966C13.9202 13.7674 13.9931 13.5626 14.1459 13.382C14.6181 12.7987 14.9896 12.1459 15.2604 11.4237C15.5313 10.7014 15.6667 9.93061 15.6667 9.11117C15.6667 7.25005 15.0209 5.67367 13.7292 4.382C12.4375 3.09033 10.8611 2.4445 9.00002 2.4445C7.13891 2.4445 5.56252 3.09033 4.27085 4.382C2.97919 5.67367 2.33335 7.25005 2.33335 9.11117C2.33335 9.93061 2.46877 10.698 2.7396 11.4132C3.01044 12.1285 3.38891 12.7778 3.87502 13.3612C4.0278 13.5417 4.10072 13.7466 4.09377 13.9757C4.08683 14.2049 4.00002 14.4028 3.83335 14.5695C3.66669 14.7362 3.47224 14.816 3.25002 14.8091C3.0278 14.8021 2.8403 14.7153 2.68752 14.5487Z" />
    </svg>
  ),
  TEAM_ELECTRICAL: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("size-6 fill-current stroke-white", className)}
    >
      <circle cx="12" cy="12" r="11.75" strokeWidth={0.5} />
      <path d="M9.04936 17V6.81818H15.1942V7.91193H10.2823V11.3523H14.8761V12.446H10.2823V15.9062H15.2738V17H9.04936Z" />
    </svg>
  ),
  TEAM_MECHANICHAL: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("size-6 fill-current stroke-white", className)}
    >
      <circle cx="12" cy="12" r="11.75" strokeWidth={0.5} />
      <path d="M7.00542 6.81818H8.47701L11.9372 15.2699H12.0566L15.5168 6.81818H16.9884V17H15.835V9.2642H15.7355L12.5537 17H11.4401L8.25826 9.2642H8.15882V17H7.00542V6.81818Z" />
    </svg>
  ),
  UNIT: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[0.875rem] w-[0.875rem] fill-current", className)}
    >
      <path d="M4.34381 6.37402H9.68756C9.69381 6.37402 9.70162 6.37402 9.70787 6.37246C9.77662 6.36152 9.82194 6.29746 9.811 6.22871L9.18287 2.35371C9.1735 2.29277 9.12037 2.24902 9.05944 2.24902H4.97194C4.911 2.24902 4.85787 2.29277 4.8485 2.35371L4.22037 6.22871C4.21881 6.23496 4.21881 6.24277 4.21881 6.24902C4.21881 6.31777 4.27506 6.37402 4.34381 6.37402ZM5.76881 3.31152H8.261L8.58444 5.31152H5.44381L5.76881 3.31152ZM5.80787 7.72871C5.7985 7.66777 5.74537 7.62402 5.68444 7.62402H1.59694C1.536 7.62402 1.48287 7.66777 1.4735 7.72871L0.845374 11.6037C0.843811 11.61 0.843811 11.6178 0.843811 11.624C0.843811 11.6928 0.900061 11.749 0.968811 11.749H6.31256C6.31881 11.749 6.32662 11.749 6.33287 11.7475C6.40162 11.7365 6.44694 11.6725 6.436 11.6037L5.80787 7.72871ZM2.07037 10.6865L2.39381 8.68652H4.886L5.20944 10.6865H2.07037ZM13.1548 11.6037L12.5266 7.72871C12.5173 7.66777 12.4641 7.62402 12.4032 7.62402H8.31569C8.25475 7.62402 8.20162 7.66777 8.19225 7.72871L7.56412 11.6037C7.56256 11.61 7.56256 11.6178 7.56256 11.624C7.56256 11.6928 7.61881 11.749 7.68756 11.749H13.0313C13.0376 11.749 13.0454 11.749 13.0516 11.7475C13.1188 11.7365 13.1657 11.6725 13.1548 11.6037ZM8.78912 10.6865L9.11256 8.68652H11.6047L11.9282 10.6865H8.78912Z" />
    </svg>
  ),
  WARNING: ({ className }: IconProps) => (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-4 w-4 fill-current", className)}
    >
      <path d="M8 1C4.13437 1 1 4.13437 1 8C1 11.8656 4.13437 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13437 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z" />
      <path d="M7.24976 10.75C7.24976 10.9489 7.32877 11.1397 7.46943 11.2803C7.61008 11.421 7.80084 11.5 7.99976 11.5C8.19867 11.5 8.38943 11.421 8.53009 11.2803C8.67074 11.1397 8.74976 10.9489 8.74976 10.75C8.74976 10.5511 8.67074 10.3603 8.53009 10.2197C8.38943 10.079 8.19867 10 7.99976 10C7.80084 10 7.61008 10.079 7.46943 10.2197C7.32877 10.3603 7.24976 10.5511 7.24976 10.75ZM7.62476 9H8.37476C8.44351 9 8.49976 8.94375 8.49976 8.875V4.625C8.49976 4.55625 8.44351 4.5 8.37476 4.5H7.62476C7.55601 4.5 7.49976 4.55625 7.49976 4.625V8.875C7.49976 8.94375 7.55601 9 7.62476 9Z" />
    </svg>
  ),
};
