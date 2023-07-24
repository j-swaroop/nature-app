// Write your code here.
import "./index.css"

const ThumbnailItem = (props) => {
    const {details, toChangeImage, isActive} = props
    const {id, thumbnailUrl, thumbnailAltText} = details

    const onChangeImage = () => {
        toChangeImage(id)
    }

    const isActiveImage = isActive === id ? "thumbnail-item-with-out-opacity" : ""

    return(
        <li className={`thumbnail-item ${isActiveImage}`}>
            <button>
                <img onClick={onChangeImage} alt={thumbnailAltText} src={thumbnailUrl}/>
            </button>
        </li>

    )
}

export default ThumbnailItem