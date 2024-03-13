// SpotifyPlayer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyPlayerComponent = (Source) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Your Spotify API authentication code here
    // Follow Spotify API authentication documentation to obtain access token
    // https://developer.spotify.com/documentation/general/guides/authorization-guide/

    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: '7c8ba51131344a2183c8433fb7259b5f',
            client_secret: '6cc1e576f2b348cfbe9cdfc4ec7896cf',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error obtaining Spotify access token:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {token && (
        <iframe
          title="Spotify Player"
          src={Source}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyPlayerComponent;
