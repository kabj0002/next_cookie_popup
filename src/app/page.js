import Image from "next/image";
import LikeButton from "@/components/Likebutton";
//sfc -> snippet til at oprette komponent syntax

export default function Home() {
  return (
    <div>
      <LikeButton label="Like" />
      <LikeButton label="DisLike" />
      <LikeButton />
      <LikeButton />
      <LikeButton />
    </div>
  );
}
