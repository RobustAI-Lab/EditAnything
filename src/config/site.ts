import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  x: "https://twitter.com",
  github: "https://github.com/RobustAI-Lab/EditAnything",
  githubAccount: "https://github.com/RobustAI-Lab",
};

export const siteConfig = {
  name: "EdtAny",
  description: "EdtAny is an open source solution to image editing.",
  url: "https://edit.robustai.dev",
  ogImage: "/images/icons8-magic-wand-emoji-32.png",
  links,
  mainNav: [
    {
      title: "Home",
      items: [
        {
          title: "Docs & Blog",
          href: "/docs",
          description: "Documentation and blogs.",
          items: [],
        },
        {
          title: "Tech Stack",
          href: "/tech",
          description: "Follw our tech choice.",
          items: [],
        },
        {
          title: "Edit",
          href: "/edit",
          description: "Start to edit images.",
          items: [],
        },
        {
          title: "Dashboard",
          href: "/dashboard",
          description: "Go to the dashboard.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "RobustAI Lab",
          href: "https://robustai.dev",
          external: true,
        },
      ],
    },
    {
      title: "Our Team",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "X",
          href: links.x,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
