/**
 * Sidebar nav data — static groups here. For routes generated at request time
 * (e.g. from a CMS/DB), fetch them in a Server Component and pass as the
 * `extraGroups` prop on <AppSidebar />, rather than hardcoding them below.
 */
export interface NavItem {
  title: string;
  url: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navMain: NavGroup[] = [
  {
    title: "Navigation",
    items: [
      { title: "Home", url: "/" },
    ],
  },
];
