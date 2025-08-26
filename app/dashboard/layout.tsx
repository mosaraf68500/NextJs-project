"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShoppingCart,
  Package,
  Plus,
  BarChart3,
  Settings,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { UserNav } from "@/components/user-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!session) {
    return null; // redirect will happen, so don't render anything here
  }

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: BarChart3 },
    { href: "/dashboard/add-product", label: "Add Product", icon: Plus },
    { href: "/dashboard/products", label: "Manage Products", icon: Package },
    { href: "/dashboard/users", label: "Users", icon: Users },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  // Check if a nav item is active.
  // This covers exact path and nested routes.
  const isActiveLink = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href || pathname.startsWith(href + "/");
    }
    return pathname === href;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-primary" />
                <span className="font-serif font-bold text-xl text-foreground">
                  EcoShop
                </span>
              </Link>
              <div className="ml-8">
                <span className="text-sm text-muted-foreground">Dashboard</span>
              </div>
            </div>

            <UserNav />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-4rem)] bg-card border-r border-border">
          <div className="p-6">
            <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-medium text-sm text-foreground">Welcome back,</h3>
              <p className="font-serif font-semibold text-lg text-primary">
                {session.user?.name}
              </p>
              {session.user?.role && (
                <p className="text-xs text-muted-foreground capitalize">
                  {session.user.role} Access
                </p>
              )}
            </div>

            <h2 className="font-serif font-semibold text-lg mb-6">Admin Panel</h2>
            <nav className="space-y-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActiveLink(href)
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
