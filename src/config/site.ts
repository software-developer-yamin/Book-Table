import { env } from "@/env";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Book Table",
  description: "",
  url: env.NODE_ENV === "development" ? "" : "",
  links: { github: "" },
};
