import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Favorites() {
  const { displayName } = useOutletContext();
  const [favorites, setFavorites] = useState({})

  useEffect(() => {
    fetch('/api/getFavs', {
      headers: {'Content-Type': 'application/json'},
      body: {username: displayName}
    })
      .then((response) => response.json())
      .then((favList) => setFavorites(favList))
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <h1>Favorites</h1>

  )
}
