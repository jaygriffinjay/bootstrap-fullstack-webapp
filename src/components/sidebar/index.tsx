"use client"

import * as React from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { navMain, type NavGroup } from "./routes"
import { cn } from "@/lib/utils"
import styles from "./sidebar.module.css"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  /** Additional groups resolved server-side (e.g. dynamic routes from a CMS/DB). */
  extraGroups?: NavGroup[]
}

export function AppSidebar({
  extraGroups = [],
  className,
  ...props
}: AppSidebarProps) {
  const pathname = usePathname()
  const groups = [...navMain, ...extraGroups]

  return (
    <Sidebar className={cn(styles.sidebar, className)} {...props}>
      <SidebarHeader>
        <span className={styles.name} style={{ fontFamily: "var(--font-geist-sans)" }}>
          App Name
        </span>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {groups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      render={<NextLink href={item.url}>{item.title}</NextLink>}
                      isActive={
                        item.url === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.url)
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
