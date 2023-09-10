import {useEffect, useState} from 'react';
import axios from 'axios';

const useCardImage = (cardName) => {
  const [loadingImage, setLoadingImage] = useState(false);
  const [cardImage, setCardImage] = useState(
    'https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b3a69a1c-c80f-4413-a6fd-ae54cabbce28.jpg?1559591595',
  );
  const [cardBackFaceImage, setCardBackFaceImage] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoadingImage(true);
        axios
          .get(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`)
          .then(({data}) => {
            setCardBackFaceImage(null);
            let image =
              'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786';
            if (data?.image_uris) {
              image = data?.image_uris?.normal;
            } else if (data?.card_faces) {
              image = data?.card_faces[0]?.image_uris?.normal;
              if (data?.card_faces.length > 1) {
                setCardBackFaceImage(data?.card_faces[1]?.image_uris?.normal);
              }
            }

            setCardImage(image);
            setLoadingImage(false);
          });
      } catch (e) {
        setCardImage('https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b3a69a1c-c80f-4413-a6fd-ae54cabbce28.jpg?1559591595');
        setLoadingImage(false);
      }
    })();
  }, [cardName]);

  return {loadingImage, cardImage, cardBackFaceImage};
};

export default useCardImage;
