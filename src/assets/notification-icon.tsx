import { Default } from "../config/constant"
import { IconProps } from "../types/assets"

const NotificationIcon = (props: IconProps) => {
  return (
    <div className={props.className}>
      <svg
        width={props.width ? props.width : Default.IconWidth}
        height={props.height ? props.height : Default.IconHeight}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_9256)">
          <path d="M9.75 4C9.75 3.46957 9.98705 2.96086 10.409 2.58579C10.831 2.21071 11.4033 2 12 2C12.5967 2 13.169 2.21071 13.591 2.58579C14.0129 2.96086 14.25 3.46957 14.25 4C15.542 4.54303 16.6433 5.38833 17.4361 6.4453C18.2288 7.50227 18.683 8.73107 18.75 10V14C18.8347 14.6217 19.0824 16.2171 19.4732 16.7381V16.7381C19.7732 17.1382 19.5017 18 19.0016 18H4.9984C4.49829 18 4.22677 17.1382 4.52684 16.7381V16.7381C4.91764 16.2171 5.16534 14.6217 5.25 14V10C5.31701 8.73107 5.77121 7.50227 6.56394 6.4453C7.35667 5.38833 8.45804 4.54303 9.75 4Z" />
          <path d="M9 20C9 20.7956 9.31607 20.5587 9.87868 21.1213C10.4413 21.6839 11.2044 22 12 22C12.7956 22 13.5587 21.6839 14.1213 21.1213C14.6839 20.5587 15 20.7956 15 20" />
          <path
            d="M21.0001 7.727C20.3441 6.30025 19.3916 5.02969 18.2061 4"
            stroke="#DDDDDD"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 7.727C3.65535 6.30044 4.60715 5.0299 5.792 4"
            stroke="#DDDDDD"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_9256">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default NotificationIcon
