"use client"

import * as React from "react"
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  ListTodoIcon,
  Map,
  Notebook,
  NotebookIcon,
  NotebookTabs,
  NotebookText,
  PieChart,
  Projector,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Icon } from "./icon"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"


const data = {
  navMain: [
    {
      title: "Playground",
      url: "/playground",
      icon: SquareTerminal,
      items: [
        {
          title: "New",
          url: "/playground/new",
        },
        {
          title: "Starred",
          url: "/playground/starred",
        },
        {
          title: "Settings",
          url: "/playground/settings",
        },
      ],
    },
    {
      title: "NOTEBook",
      url: "/notebook",
      icon: NotebookText,
      items: [
        {
          title: "New",
          url: "/notebook/new",
        },
        {
          title: "All",
          url: "/notebook/all",
        },
        {
          title: "Merge",
          url: "/notebook/merge",
        },
      ],
    },
    {
      title: "Task Planner",
      url: "/task",
      icon: ListTodoIcon,
      items: [
        {
          title: "Todo",
          url: "/task/todo",
        },
        {
          title: "Calender",
          url: "/task/calender",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "",
      url: "",
      icon: Projector,
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {user} = useAuth()
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Icon h={120} w={120} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">SLEAK</span>
                  <span className="truncate text-xs">AI Docs</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
