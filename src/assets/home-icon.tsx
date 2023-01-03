import { IconProps } from "../types/assets"
import { Default } from "../config/constant"

const HomeIcon = (props: IconProps) => {
  return (
    <div className={props.className}>
      <svg
        width={props.width ? props.width : Default.IconWidth}
        height={props.height ? props.height : Default.IconHeight}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_9238)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8416 2.70156L19.8412 7.88178C20.5725 8.51245 21 9.4828 21 10.5106V19.5023C21 20.1647 20.7629 20.8 20.341 21.2684C19.919 21.7369 19.3467 22 18.75 22H5.25C4.65326 22 4.08097 21.7369 3.65901 21.2684C3.23705 20.8 3 20.1647 3 19.5023V10.5106C2.99979 10.0035 3.10397 9.503 3.3046 9.04739C3.50523 8.59179 3.797 8.1931 4.15763 7.88178L10.1584 2.70156C10.6849 2.24687 11.3329 2 12 2C12.6671 2 13.3151 2.24687 13.8416 2.70156ZM16.5165 15.8564C16.9894 15.5712 17.1416 14.9566 16.8563 14.4837C16.5711 14.0107 15.9565 13.8586 15.4835 14.1439C14.5696 14.6951 13.311 14.9999 11.9993 14.9999C10.6876 14.9999 9.42964 14.6951 8.51686 14.1441C8.04405 13.8586 7.42938 14.0105 7.14394 14.4833C6.8585 14.9561 7.01039 15.5708 7.4832 15.8562C8.77842 16.6382 10.4155 16.9999 11.9993 16.9999C13.5831 16.9999 15.2205 16.6382 16.5165 15.8564Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_9238">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default HomeIcon
