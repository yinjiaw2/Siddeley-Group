"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Personal", href: "#" },
  { label: "Business", href: "#" },
  { label: "Kids & Teens", href: "#" },
  { label: "Company", href: "#" },
];

export default function RevolutStyleHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#007AFF] text-black">
      <div className="absolute inset-0">
        <Image
          src="/hero-bird.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 顶部导航栏 */}
      <header className="relative z-30 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Siddeley Group
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm font-semibold hover:opacity-70">
            Log in
          </Link>
          <Link
            href="#"
            className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* 主体内容区 */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] flex-col items-start justify-center px-6">
        {/* 左侧文字排版 */}
        <div className="mb-16 w-120">
          <h1 className="text-7xl font-bold leading-[0.9] tracking-[-0.04em]">
            Change the way you money
          </h1>
          <p className="mt-8 max-w-[400px] text-lg font-medium leading-snug">
            Home or away, local or global — move freely between countries and
            currencies. Sign up for no cost, in a tap.
          </p>
          <button className="mt-10 rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-80">
            Contact Us
          </button>
        </div>

        {/* 居中的装饰卡片轮廓 (无蒙层) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[600px] w-full max-w-[420px] -translate-x-1/2 -translate-y-[40%] flex-col items-center justify-between rounded-[2.5rem] border-4 border-gray-300 p-8">
          {/* 中间的数据信息 */}
          <div className="mt-[240px] flex flex-col items-center">
            <span className="text-sm font-medium opacity-80">Personal</span>
            <div className="text-[4rem] font-bold text-black">AU$12,024</div>
            <div className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-bold text-black shadow-lg">
              Accounts
            </div>
          </div>

          {/* 底部悬浮卡片 - 仅在这里保留白色背景以符合图片逻辑 */}
        </div>
      </div>
    </section>
  );
}
