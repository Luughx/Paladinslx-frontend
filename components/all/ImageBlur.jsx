import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function ImageBlur({ src, width, height, alt, classes }) {
    
    let url = src
    const { BACKEND_URI } = process.env
    let backendUrl = BACKEND_URI.replace("/api", "")

    if (src.includes("backend.")) {
        const split = src.split("backend.")
        url = `${backendUrl}/${split[1]}`
    }
    
    const buffer = await fetch(url).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const { base64 } = await getPlaiceholder(buffer)

    return (
        <Image 
            src={url}
            width={width}
            height={height}
            alt={alt}
            placeholder="blur"
            blurDataURL={base64}
            className={classes}
        />
    )
}