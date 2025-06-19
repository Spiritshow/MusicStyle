import { useEffect, useState } from "react";
import './SectorImage.css';


const SectorImage = ({image}: {image: string[] | undefined}) => {
    
    
    const [mainImg, setMainImg] = useState<string>();

    useEffect(() => {
        if(image)
        setMainImg(image[0]);
    }, [image])

    const handleSwitch = (img: string) => {
        setMainImg(img);
    }

    return(
        <div className="DivSectorImage">
            <div className="ListImg">
                {image && image.map((img) => {
                    return(
                        <div className="DivImg">
                            <img src={`/src/assets/${img}`} onClick={() => handleSwitch(img)}className="ImgSectorImage"/>
                        </div>    
                    )
                })}
            </div>
            <div className="DivMainImage">
                <img src={`/src/assets/${mainImg}`} className="MainImage"/>
            </div>
        </div>
    )
}

export default SectorImage;