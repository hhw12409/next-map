import { Marker } from '@/types/map';
import { useEffect } from 'react';

const Marker = ({ map, coordinates, icon, onClick }: Marker): null => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker?.setMap(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  return null;
};

export default Marker;
