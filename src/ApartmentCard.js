import React from 'react';

const ApartmentCard = ({ apartment }) => {
  if (!apartment) return null;

  const handleRedirect = () => {
    window.location.href = `/apartment/${apartment.id}`;
  };

  return (
    <div className="apartment-card">
      <img src={apartment.image || ''} alt={apartment.title || 'Apartment'} />
      <div className="details">
        <h2>{apartment.title || "Modern 212 Suites in Ataşehir"}</h2>
        <p>{apartment.description}</p>
        <p className="price">{apartment.price ? `${apartment.price} TL / gece` : 'Fiyat Bilgisi Yok'}</p>
        <button onClick={handleRedirect} className="button">
          Detayları Gör
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
