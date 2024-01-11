import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function ImageBlur({ src, width, height, alt, classes }) {
    
    let url = src
    const { NEXT_PUBLIC_BACKEND_URI } = process.env

    if (src.includes("backend.")) {
        const split = src.split("backend.")
        url = `${NEXT_PUBLIC_BACKEND_URI}/${split[1]}`
    }
    
    const buffer = await fetch(url).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const { base64 } = await getPlaiceholder(buffer).catch(err => {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwZtD9f/3r/xf/jRi0GBI04v+/+31uymJ1BlmG8tjYVGe3dW39iQ7+AGvyEVg1Jq9jAAAAAElFTkSuQmCC"
    })

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