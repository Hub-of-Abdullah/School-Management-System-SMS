"use clint"
import { Button } from "@/components/ui/button";
// import ThemeButtom from "@/components/theme-ModeToggle";
// import SettingButton from "@/components/setting-icon";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-400 to-blue-800">

      <div className="space-y-6">
        <h1 className="text-3xl text-center justify-center font-semibold text-white drop-shadow-lg">Create Account</h1>
      </div>
      <LoginButton>
        <Button variant="secondary" size="lg">Sign in</Button>
      </LoginButton>

      {/* <div className="h-4/5 w-2/6 shadow-2xl">
      <div className="space-y-6">
        <h1 className="text-3xl text-center justify-center font-semibold text-white drop-shadow-lg">Create Account</h1>
      </div>
     
      </div> */}

    </main>
  );
}

// import ContactForm from "@/components/ContactForm"

// const page = () => {
//   return (
//     <main className="flex grow flex-col items-center justify-center bg-gray-400">
//       <div className="space-y-4">
//         <h1 className="text-4xl">Contact Us</h1>
//         <ContactForm />
//       </div>
//     </main>
//   )
// }

// export default page



// "use client"
// import { useTheme } from "next-themes"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// export default function Home() {
//   const { setTheme } = useTheme();
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }