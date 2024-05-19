"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    // Function to handle the click event
    const onClick = () => {
        if (mode === "redirect") {
            router.push("/auth/login");
        } else {
            // TODO: Implement modal logic here
        }
    }

    // Render the component
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}
