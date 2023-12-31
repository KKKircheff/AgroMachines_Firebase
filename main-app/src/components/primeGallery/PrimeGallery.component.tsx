
import './PrimeGallery.styles.scss'
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { Image } from 'primereact/image';

interface PrimeGalleryProps {
    imgUrls: string[];
}

const PrimeGallery = ({ imgUrls }: PrimeGalleryProps) => {
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '2600px',
            numVisible: 3
        },
        {
            breakpoint: '600px',
            numVisible: 3
        },

    ];
    const icon = (<i className="pi pi-search"></i>)

    const itemTemplate = (item: string) => {
        return (
            <Image className='prime-gallery__main' src={item} indicatorIcon={icon} alt="Image" preview />
        )

    }

    const thumbnailTemplate = (item: string) => {
        return (
            <Image className='prime-gallery__thumb' src={item} indicatorIcon={icon} alt="Image" width="250" />
        )
    }

    return (
        <div className="prime-gallery">
            {imgUrls && <Galleria
                className='prime-gallery__gallery'
                value={imgUrls}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                // style={{ maxWidth: '1200px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />}
        </div>
    )
}
export default PrimeGallery;