import './AddImage.css';

interface IAddImage{
    images: File[], 
    setImages: (img: File[]) => void
}

const AddImage = ({images,setImages}:IAddImage) => {
    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileList = Array.from(e.target.files);
            setImages(fileList);
        }
    };

    return(
        <div className="DivAddImage">
            <div className="TextAdminPanel">Изображения продукта:</div>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
            <div className="DivPreview">
                {images.map((file, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`preview-${index}`}
                        width={100}
                        height={100}
                        className="ImgPreview"
                    />
                ))}
            </div>
        </div>
    )
}

export default AddImage;