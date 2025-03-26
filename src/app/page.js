import Image from "next/image";
import "./globals.css";
import LikeButton from "@/components/Likebutton";
import Cookies from "@/components/Cookies";
//sfc -> snippet til at oprette komponent syntax

export default function Home() {
  return (
    <div>
      <div>
        <LikeButton label="Like" />
        <LikeButton label="DisLike" />
        <LikeButton />
        <LikeButton />
        <LikeButton />
      </div>
      <div class="cookies_box">
        <Cookies />
      </div>
    </div>
  );
}
