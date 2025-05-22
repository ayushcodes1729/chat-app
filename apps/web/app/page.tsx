"use client"
import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Gradient } from "@repo/ui/gradient";
import { TurborepoLogo } from "@repo/ui/turborepo-logo";
import { InputBox } from "@repo/ui/input-box";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <InputBox size="medium" placeholder="RoomID"/>
      <Button name="Join Room" variant="primary" size="medium" onclick={()=> router.push("/chat/room?id=123")}/>
    </div>
  );
}
