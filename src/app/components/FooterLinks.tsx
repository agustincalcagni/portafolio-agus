import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const FooterLinks = () => {
    return (
        <footer className="grid mx-auto md:flex md:justify-between text-zinc-800 dark:text-zinc-200 mt-5 gap-3 px-6">
        <Link
          href="https://www.linkedin.com/in/agustincalcagni/"
          className="flex items-center gap-2 hover:text-[#FF7759] transition-colors duration-200"
        >
          <Linkedin />
          agustincalcagni
        </Link>
        <Link
          href="mailto:agustincalcagni@gmail.com"
          className="flex items-center gap-2 hover:text-[#FF7759] transition-colors duration-200"
        >
          <Mail />
          agustincalcagni@gmail.com
        </Link>
      </footer>
    )
}