const fetchMusicData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/music");
    const data = await response.json();
    console.log("Raw api response:", data);

    if (data.success) {
      setMusicData({
        singles: data.singles.map(transformItem),
        albums: data.albums.map(transformItem),
      });
    } else {
      console.error("API error:", data.error);
      setMusicData({ singles: [], albums: [] });
    }
  } catch (error) {
    console.error("Failed to fetch music data:", error);
    setMusicData({ singles: [], albums: [] });
  } finally {
    setIsLoading(false);
  }
};
