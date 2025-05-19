import { links } from "@/app/consts";
import { LinkItemsClient } from "./LinksItemsClient";
import { CSSProperties } from "react";

export default function LinksItems({
  className,
  styles,
}: {
  className: string;
  styles?: CSSProperties;
}) {
  return (
    <LinkItemsClient items={links} className={className} styleLink={styles} />
  );
}
