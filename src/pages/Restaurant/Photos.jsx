import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';


//components
import PhotoCollection from '../../Components/Restaurant/photoCollection';

const Photos = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const openImageViewer = () => setIsMenuOpen(true);
    const closeImageViewer = () => setIsMenuOpen(false);
    const Photos = [
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2781ab2c532b711ecd401571cdd87eb9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2781ab2c532b711ecd401571cdd87eb9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2781ab2c532b711ecd401571cdd87eb9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg",
    ]
  return (
    <>
        {isMenuOpen && (
        <ImageViewer
          src={ Photos }
          currentIndex={ currentImg }
          disableScroll={ false }
          onClose={ closeImageViewer }
        />
      )}
        <div className="flex flex-wrap gap-4 mt-5 mx-4">
            {Photos.map((photo) => (
                <PhotoCollection image={photo} openImageViewer={openImageViewer} />
            ))

            }
        </div>
    </>
  )
}

export default Photos