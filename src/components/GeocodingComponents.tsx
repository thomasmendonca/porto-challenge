import React, { useState } from 'react';

interface GeocodingComponentProps {
  apiKey: string;
}

const GeocodingComponent: React.FC<GeocodingComponentProps> = ({ apiKey }) => {
  const [endereco, setEndereco] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [enderecoFormatado, setEnderecoFormatado] = useState<string>('');

  const handleGeocode = () => {
    const encodedAddress = encodeURIComponent(endereco);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const location = data.results[0].geometry.location;
          setLatitude(location.lat);
          setLongitude(location.lng);
          setEnderecoFormatado(data.results[0].formatted_address);
        } else {
          console.error(`Erro: ${data.status}`);
        }
      })
      .catch((error) => {
        console.error(`Ocorreu um erro: ${error}`);
      });
  };

  return (
    <div>
      <h1>Geocoding App</h1>
      <input
        type="text"
        placeholder="Digite o endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <button onClick={handleGeocode}>Geocodificar</button>
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Endereço Formatado: {enderecoFormatado}</p>
        </div>
      )}
    </div>
  );
};

export default GeocodingComponent;
