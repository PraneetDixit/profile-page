"use client";

import Image from "next/image";
import { useImageContext } from "@/context/ImageContext";

export default function DP({ width, height }) {
    const { value } = useImageContext();
    return (
        value  ?
        <Image
            src={`/Assets/dp/${value}.png`}
            alt="User Profile Picture"
            width={width}
            height={height}
        />
        :<div style={{ width, height}}></div>
    );
}