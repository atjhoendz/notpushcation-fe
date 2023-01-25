import { Thread } from "../types/model"
import leadMedia from "../assets/lead-media.svg"
import leadMedia3 from "../assets/thread-3.jpg"

export const threads: Array<Thread> = [
  {
    id: 1,
    title: "Live Blog",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    created_by: {
      id: 12,
      username: "ahmad_messi",
    },
    community: {
      id: 1,
      name: "Kaktus",
    },
    created_at: "25 Desember 2022",
    lead_media: leadMedia,
    is_live_blog: true,
  },
  {
    id: 2,
    title: "Ikannot Live Without You",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste amet fugit facilis corporis alias expedita.",
    created_by: {
      id: 12,
      username: "siuuuuu",
    },
    community: {
      id: 1,
      name: "Kakak Adik",
    },
    created_at: "24 Desember 2022",
  },
  {
    id: 3,
    title: "Ayam Falling in Love With You",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste amet fugit facilis corporis alias expedita.",
    created_by: {
      id: 12,
      username: "xabilulungan",
    },
    community: {
      id: 1,
      name: "Tanpa Status",
    },
    created_at: "23 Desember 2022",
    lead_media: leadMedia3,
  },
]
