"use client";
import Image from "next/image";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import Cube from "@/components/Cube";
import Header from "@/components/Header";
import Main from "@/components/Main";
export default function Home() {
    return (
        <>
            <Header />
            <Cube />
            <Main />
            
        </>
    );
}
