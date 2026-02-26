import Link from "next/link";
import { ReactNode } from "react";

export function parseLinks(text: string): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const linkText = match[1];
    let url = match[2];

    const isExternal =
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("mailto:");

    if (!isExternal && !url.startsWith("/")) {
      url = `https://${url}`;
    }

    parts.push(
      <Link
        key={match.index}
        href={url}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-link-blue desktop:hover:cursor-pointer"
      >
        {linkText}
      </Link>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
