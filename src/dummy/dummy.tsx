import { Thread } from "../types/model"
import leadMedia from "../assets/lead-media.svg"
import leadMedia3 from "../assets/thread-3.jpg"

export const threads: Array<Thread> = [
  {
    id: 1,
    title: "Ikan Apa Yang Terindah",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste amet fugit facilis corporis alias expedita.",
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
