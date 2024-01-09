import { useState } from "react";
import { Blurhash } from "react-blurhash";
import { encode } from "blurhash";
import {
    LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from "styled-components";
import sharp from "sharp";

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledBlurhash = styled(Blurhash)`
  z-index: 20;
  position: absolute !important;
  top: 0;
  left: 0;
`;

const encodeImageToBlurhash = (path) =>
    new Promise((resolve, reject) => {
        sharp(path)
            .raw()
            .ensureAlpha()
            .resize(32, 32, { fit: "inside" })
            .toBuffer((err, buffer, { width, height }) => {
                if (err) return reject(err);
                resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
            });
    });

export default function ImageBlurClient({ src }) {

    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    const handleLoadStarted = () => {
        encodeImageToBlurhash(src).then(valor => {

            console.log("Started: ");
            setLoadStarted(true);
        })
    };

    return (
        <ImageWrapper>
            <LazyLoadImage
                src={src}
                height={500}
                width={333}
                onLoad={handleLoad}
                beforeLoad={handleLoadStarted}
            />
            {!isLoaded && isLoadStarted && (
                <StyledBlurhash
                    hash={image.blurhash}
                    width={333}
                    height={500}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
        </ImageWrapper>
    )
}
