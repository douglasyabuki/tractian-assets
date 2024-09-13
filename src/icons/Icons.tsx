import { twMerge } from "tailwind-merge";

interface IconProps {
  className?: string;
}

export const Icons = {
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
      className={twMerge(
        "h-[1.4375rem] w-[1.375rem] fill-current stroke-current stroke-[0.00111607px]",
        className,
      )}
    >
      <path d="M20.7572 8.18058L20.7572 8.18051C20.7536 8.16959 20.7486 8.16003 20.7432 8.14977C20.7414 8.14624 20.7395 8.14263 20.7376 8.13884C20.7327 8.12903 20.7278 8.11983 20.7229 8.11062C20.718 8.10141 20.7131 8.0922 20.7081 8.08237L20.7082 8.08241C20.7062 8.07912 20.7042 8.07566 20.7022 8.07212C20.6967 8.06242 20.6908 8.05215 20.6836 8.04318L20.6836 8.04315C20.664 8.0137 20.6419 7.98426 20.6198 7.9548C20.6075 7.94007 20.5928 7.9229 20.5781 7.90819L20.5781 7.90814C20.5683 7.89592 20.5561 7.88613 20.5438 7.87631L20.5437 7.87627C20.5335 7.86608 20.5222 7.85708 20.5113 7.84842C20.5064 7.84458 20.5017 7.8408 20.4971 7.83701L20.7572 8.18058ZM20.7572 8.18058C20.7621 8.19037 20.7658 8.20077 20.7692 8.2112C20.7725 8.2216 20.7756 8.23204 20.7793 8.24186L20.7572 8.18058ZM20.4432 7.7978L20.4431 7.79777L11.4688 1.82388C11.3304 1.73146 11.1678 1.68214 11.0014 1.68214C10.835 1.68214 10.6723 1.73146 10.5339 1.82388L1.5547 7.80267L1.55465 7.80271L1.55464 7.80271C1.55224 7.80391 1.54983 7.80572 1.54736 7.80757L1.54734 7.80759C1.5449 7.80941 1.54241 7.81128 1.53991 7.81253L1.54 7.81247C1.52773 7.82229 1.51544 7.83213 1.50069 7.84196L1.5007 7.84195C1.48948 7.84996 1.47933 7.85901 1.46952 7.86775C1.46432 7.87239 1.45921 7.87694 1.45408 7.88121L1.45407 7.88122C1.44796 7.88611 1.44246 7.89161 1.43693 7.89714L1.43692 7.89715C1.4314 7.90266 1.42586 7.90821 1.4197 7.91314L1.41974 7.9131C1.40501 7.92783 1.39031 7.94253 1.37806 7.95968L1.37802 7.95973L1.37802 7.95973C1.3535 7.9867 1.33388 8.01612 1.31425 8.04803C1.31149 8.05264 1.30838 8.05725 1.30519 8.06197C1.30412 8.06356 1.30304 8.06516 1.30196 8.06678C1.29766 8.07322 1.29338 8.07995 1.28972 8.08728L1.2897 8.08731C1.27989 8.10447 1.27008 8.1241 1.26026 8.14374L1.26025 8.14375L1.26023 8.14379C1.25657 8.1499 1.25351 8.15662 1.25044 8.16368C1.2499 8.16493 1.24935 8.16619 1.2488 8.16746C1.24626 8.17335 1.24364 8.17942 1.24061 8.18549L1.24011 8.18525L1.24063 8.18544C1.23695 8.19525 1.23328 8.20567 1.2296 8.21609L1.22959 8.21612C1.2259 8.22656 1.22222 8.237 1.21853 8.24683L1.21801 8.24663L1.21854 8.24681C1.21753 8.24983 1.21653 8.25274 1.21555 8.25559C1.21172 8.26667 1.20823 8.27679 1.20628 8.28846L1.20628 8.28849H1.20628C1.20137 8.31057 1.19647 8.3351 1.19156 8.35964L1.19155 8.35969L1.18419 8.39648C1.17928 8.43329 1.17683 8.47009 1.17683 8.5069V14.4857C1.17683 14.5225 1.17928 14.5593 1.18419 14.5961C1.18419 14.5961 1.18419 14.5961 1.18419 14.5961L1.19155 14.6329L1.19155 14.6329L1.20626 14.704C1.20627 14.7041 1.20627 14.7041 1.20627 14.7041C1.20873 14.7114 1.21057 14.7182 1.21241 14.7249C1.21425 14.7317 1.21609 14.7384 1.21854 14.7458C1.2259 14.7679 1.23326 14.7875 1.24063 14.8071L1.24064 14.8072C1.24428 14.8181 1.24927 14.8276 1.25463 14.8379C1.25647 14.8414 1.25836 14.8451 1.26025 14.8488C1.26275 14.8538 1.26509 14.8587 1.26739 14.8634C1.27414 14.8774 1.28055 14.8906 1.28969 14.9053L1.28969 14.9053C1.29167 14.9086 1.29364 14.912 1.29565 14.9156C1.30118 14.9253 1.30703 14.9355 1.31421 14.9445L1.31422 14.9445C1.31834 14.9503 1.32216 14.956 1.32599 14.9618C1.33362 14.9732 1.34122 14.9846 1.35102 14.996L1.35104 14.9961L1.38049 15.0329C1.39277 15.0476 1.40749 15.0648 1.4222 15.0795L1.42224 15.0795C1.43202 15.0918 1.44424 15.1015 1.45653 15.1114L1.45658 15.1114C1.46677 15.1216 1.47812 15.1306 1.48905 15.1393C1.49389 15.1431 1.49865 15.1469 1.50319 15.1507L1.50283 15.1511M20.4432 7.7978L1.50318 15.1507L1.50283 15.1511M20.4432 7.7978C20.4456 7.799 20.448 7.80081 20.4505 7.80266C20.4529 7.80448 20.4554 7.80635 20.4579 7.80761L20.4432 7.7978ZM1.50283 15.1511C1.51511 15.1609 1.52739 15.1707 1.54212 15.1806L1.24011 14.8073C1.24376 14.8183 1.24878 14.8279 1.25415 14.8382C1.25599 14.8417 1.25787 14.8453 1.25975 14.8491C1.26225 14.8541 1.26458 14.8589 1.26688 14.8637C1.27363 14.8776 1.28006 14.8909 1.28922 14.9056C1.29118 14.9088 1.29314 14.9123 1.29515 14.9158C1.30068 14.9255 1.30656 14.9358 1.31377 14.9448C1.31786 14.9506 1.32168 14.9563 1.3255 14.962C1.33314 14.9735 1.34078 14.9849 1.3506 14.9964L1.38006 15.0332C1.39234 15.048 1.40707 15.0652 1.42181 15.0799C1.43162 15.0922 1.4439 15.102 1.45617 15.1118C1.46639 15.122 1.47779 15.1311 1.48873 15.1397C1.49357 15.1436 1.49831 15.1473 1.50283 15.1511ZM20.6914 14.9448C20.6942 14.9403 20.6973 14.9357 20.7005 14.9309C20.7058 14.923 20.7114 14.9148 20.716 14.9056C20.7209 14.8957 20.7258 14.8865 20.7307 14.8773C20.7357 14.8681 20.7406 14.8589 20.7455 14.8491C20.7498 14.8419 20.7533 14.8338 20.7569 14.8254C20.7595 14.8195 20.7621 14.8134 20.7651 14.8073L20.7646 14.8071C20.7683 14.7973 20.7719 14.7869 20.7756 14.7765C20.7774 14.7716 20.7791 14.7667 20.7808 14.7619C20.7828 14.7564 20.7847 14.751 20.7867 14.7458C20.7916 14.7335 20.7965 14.7188 20.7989 14.7041L20.7989 14.704C20.804 14.689 20.8067 14.6727 20.8095 14.6561C20.8108 14.6485 20.8121 14.6407 20.8137 14.6329L20.821 14.5961C20.8259 14.5593 20.8284 14.5225 20.8284 14.4857V8.50204C20.8235 8.47748 20.8207 8.4529 20.818 8.42835C20.8167 8.41609 20.8153 8.40383 20.8137 8.39159C20.8137 8.39158 20.8137 8.39158 20.8137 8.39157L20.8063 8.35477C20.8048 8.3471 20.8035 8.33969 20.8022 8.33236C20.7994 8.31619 20.7966 8.3005 20.7916 8.28362C20.7906 8.28063 20.7896 8.27773 20.7886 8.27488L20.6914 14.9448ZM1.28922 8.08703C1.2794 8.10421 1.26958 8.12385 1.25976 8.14348L1.28922 8.08703ZM11.8448 4.10009V4.1002L11.8467 4.10146V8.03301H11.8462L11.8469 8.03348L15.5054 10.479L15.5049 10.4798L15.506 10.479L18.4598 8.50491L18.4595 8.50444L18.4592 8.50398L18.4587 8.50323L11.8478 4.10087V4.09953H11.8473V4.09897H11.8448V4.09953V4.10009ZM11.8467 4.10009V4.10012L11.8466 4.10009H11.8467ZM10.155 4.09953H10.1545L3.54292 8.50398L3.54323 8.50444L3.54354 8.50491L3.54404 8.50565L6.49672 10.479L6.49622 10.4798L6.49734 10.479L10.1558 8.03348L10.1561 8.03385V8.03301V4.09953H10.1555H10.155ZM2.86556 10.0808L2.86524 10.0812L2.865 10.0816V12.9044H2.86556H2.86611H2.86656L4.97747 11.4931L4.97716 11.4926L4.97685 11.4921L4.97635 11.4914L2.86587 10.0803L2.86556 10.0808ZM10.1555 18.8832L10.1558 18.8828L10.1561 18.8824V14.9498H10.1565L10.1558 14.9493L6.49734 12.5038L6.49784 12.503L6.49672 12.5038L3.54292 14.4779L3.54323 14.4783L3.54354 14.4788L3.54404 14.4795L10.1552 18.8837L10.1555 18.8832ZM10.9998 13.4868L10.9993 13.4876L11.0005 13.4868L13.9862 11.4906L13.9859 11.4902L13.9856 11.4897L13.9851 11.4889L11.0005 9.49594L11.001 9.49519L10.9998 9.49594L8.01413 11.4921L8.01444 11.4926L8.01475 11.4931L8.01525 11.4938L10.9998 13.4868ZM11.8454 18.8832H11.8458L18.4574 14.4788L18.4571 14.4783L18.4568 14.4779L18.4563 14.4771L15.5036 12.5038L15.5041 12.503L15.503 12.5038L11.8445 14.9493L11.8442 14.9489V14.9498V18.8832H11.8448H11.8454ZM19.1348 12.902L19.1351 12.9015L19.1353 12.9012V10.0783H19.1348H19.1342H19.1337L17.0228 11.4897L17.0231 11.4902L17.0235 11.4906L17.024 11.4914L19.1344 12.9025L19.1348 12.902Z" />
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
