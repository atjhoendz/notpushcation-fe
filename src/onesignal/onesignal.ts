import Onesignal from "react-onesignal"
import { OnesignalAppID } from "../config/config"

export default async function runOnesignal() {
  await Onesignal.init({
    appId: OnesignalAppID,
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true,
  })
  Onesignal.showSlidedownPrompt()
}
