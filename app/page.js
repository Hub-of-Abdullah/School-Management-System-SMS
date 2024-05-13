// "use clint"
// import Image from "next/image";
// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div>
//       <Button >Button</Button>

//     </div>
//   );
// }
import ContactForm from "@/components/ContactForm"

const page = () => {
  return (
    <main className="flex grow flex-col items-center justify-center bg-gray-400">
      <div className="space-y-4">
        <h1 className="text-4xl">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}

export default page