'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface UserNavProps {
  lang?: string;
  dict?: any;
}

export function UserNav({ lang = "ar", dict }: UserNavProps) {
  return (
    <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-gold-500/30">
      <Avatar className="h-9 w-9">
        <AvatarImage src="/avatars/nefertiti.png" alt="Queen" />
        <AvatarFallback className="bg-gold-500 text-black font-bold">N</AvatarFallback>
      </Avatar>
    </Button>
  )
}
