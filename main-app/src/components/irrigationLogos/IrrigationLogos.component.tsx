import { useEffect, useState, CSSProperties } from 'react';
import './IrrigationLogos.styles.scss';


interface Props {
    backgroundColor?: CSSProperties['color'];
}

const IrrigationLogos: React.FC<Props> = ({ backgroundColor }) => {
    const logosBackgroundStyle = backgroundColor ? {
        background: `${backgroundColor}`
    } : {}

    const [imageArray, setImageArray] = useState<string[] | null>(null);

    useEffect(() => {
        const loadImageArray = async () => {
            const numImages = 9;
            return Promise.all(
                Array.from({ length: numImages }, async (_, index) => {
                    const src = `/logos/${(index + 1)}.webp`
                    const imageUrl = new URL(src, import.meta.url).href;
                    return imageUrl;
                })
            );
        };

        const fetchData = async () => {
            const images = await loadImageArray();
            setImageArray(images);
        };
        fetchData();
    }, []);

    return (
        <div className='irrigation-logos'>
            <div className='irrigation-logos__section' style={logosBackgroundStyle}>
                {imageArray
                    && imageArray.map((image, index) => {
                        return (
                            <img key={index} src={image} alt='лого поливна макара' />
                        )
                    })
                }
            </div>
            <div className='irrigation-logos__section' style={logosBackgroundStyle}>
                {imageArray
                    && imageArray.map((image, index) => {
                        return (
                            <img key={index * 20} src={image} alt='лого поливна макара' />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IrrigationLogos