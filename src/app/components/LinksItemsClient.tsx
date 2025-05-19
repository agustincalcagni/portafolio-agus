"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

interface LinksProps {
  name: string;
  url: string;
}

export const LinkItemsClient = ({
  items,
  className,
  styleLink
}: {
  items: Array<LinksProps>;
  className: string;
  styleLink?: CSSProperties
}) => {
  const pathname = usePathname();
  
  return (
    <ul className={`flex ${className}`}>
      {items.map((item) => (
        <li key={item.name} style={styleLink}>
          <Link
            href={item.url}
            style={{ color: item.url === pathname ? "#FF7759" : "" }}
            className="hover:opacity-80 text-sm md:text-base dark:text-zinc-200"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
