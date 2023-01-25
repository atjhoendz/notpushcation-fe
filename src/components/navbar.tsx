import HomeIcon from "../assets/home-icon"
import CommunityIcon from "../assets/community-icon"
import NotificationIcon from "../assets/notification-icon"
import ProfileIcon from "../assets/profile-icon"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="absolute bottom-0 z-10 h-12 w-full bg-white shadow-lg-top">
      <div className="flex h-12 items-center justify-around">
        <Link to="/">
          <HomeIcon className="fill-purple-51 hover:cursor-pointer" />
        </Link>
        <CommunityIcon className="fill-gray-300 hover:fill-purple-51" />
        <NotificationIcon className="fill-gray-300 hover:fill-purple-51" />
        <ProfileIcon />
      </div>
    </div>
  )
}
