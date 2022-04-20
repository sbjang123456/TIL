import HeadInfo from '../components/HeadInfo'
import Image from 'next/Image';
import Link from 'next/link';

import photosStyle from '../styles/Photos.module.css';

const photos = ({ photos }) => {
    return (
        <div>
            <HeadInfo title="My Blog Photos" />
            <h1>My Photos</h1>
            <ul className={photosStyle.photos}>
                {photos.map(photo => (
                    <li>
                        <Link href={`/photos/${photo.id}`}>
                            <a>
                            <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title} />
                            <span>{photo.title}</span>
                            </a>
                        </Link>
                        
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
  const photos = await res.json();

  return {
    props: {
        photos
    },
    // revalidate: 20 // seconds
  }
}

export default photos;