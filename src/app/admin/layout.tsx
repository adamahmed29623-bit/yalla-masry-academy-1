import { Metadata } from "next"
import Image from "next/image"

import { MainNav } from "@/components/admin/main-nav"
import { Search } from "@/components/admin/search"
import { TeamSwitcher } from "@/components/admin/team-switcher"
import { UserNav } from "@/components/admin/user-nav"

export const metadata: Metadata = {
  title: "لوحة تحكم نفرتيتي الملكية",
  description: "إدارة الصرح التعليمي العالمي",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#050c16] text-white">
      <div className="border-b border-gold-500/20 bg-[#0a1a31]/50 backdrop-blur-md">
        <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
          <TeamSwitcher />
          {/* تم وضع المكون داخل div لحل مشكلة الـ Type Error */}
          <div className="mx-6">
            <MainNav />
          </div>
          <div className="mr-auto flex items-center space-x-4 space-x-reverse">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 pt-6 max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  )
}
