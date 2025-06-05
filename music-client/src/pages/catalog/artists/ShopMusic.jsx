import React, { useState, useEffect } from "react";
import { BsCartPlus, BsGift, BsMusicNoteBeamed } from "react-icons/bs";

const ShopMusic = () => {
  // State for each product's selected format
  const [selectedFormats, setSelectedFormats] = useState({});
  // State for each product's quantity
  const [quantities, setQuantities] = useState({});
  // State for currently playing preview
  const [activePreview, setActivePreview] = useState(null);

  // Sample music products data
  const musicProducts = [
    {
      id: 1,
      title: "What A Beautiful Name",
      artist: "Hillsong Worship",
      album: "Let There Be Light",
      coverArt: "/covers/hillsong-worship.jpg",
      formats: [
        { type: "CD", price: 12.99, inStock: true },
        { type: "MP3", price: 9.99, inStock: true },
        { type: "Vinyl", price: 24.99, inStock: false },
      ],
      previewUrl: "/previews/beautiful-name.mp3",
      tracks: [
        "What A Beautiful Name",
        "Who You Say I Am",
        "New Wine",
        "Cornerstone",
      ],
    },
    {
      id: 2,
      title: "Way Maker",
      artist: "Sinach",
      album: "Way Maker",
      coverArt: "/covers/sinach.jpg",
      formats: [
        { type: "CD", price: 14.99, inStock: true },
        { type: "MP3", price: 7.99, inStock: true },
        { type: "Vinyl", price: 22.99, inStock: true },
      ],
      previewUrl: "/previews/way-maker.mp3",
      tracks: [
        "Way Maker",
        "I Know Who I Am",
        "Great Are You Lord",
        "The Name of Jesus",
      ],
    },
    {
      id: 3,
      title: "Goodness of God",
      artist: "Bethel Music",
      album: "Victory",
      coverArt: "/covers/bethel.jpg",
      formats: [
        { type: "CD", price: 11.99, inStock: true },
        { type: "MP3", price: 8.99, inStock: true },
      ],
      previewUrl: "/previews/goodness-of-god.mp3",
      tracks: [
        "Goodness of God",
        "Raise a Hallelujah",
        "Victory is Yours",
        "A Little Longer",
      ],
    },
  ];

  // Initialize states for each product
  useEffect(() => {
    const initialFormats = {};
    const initialQuantities = {};

    musicProducts.forEach((product) => {
      // Set default format to first available format
      initialFormats[product.id] = product.formats[0].type;
      initialQuantities[product.id] = 1;
    });

    setSelectedFormats(initialFormats);
    setQuantities(initialQuantities);
  }, []);

  const handleAddToCart = (product) => {
    const selectedFormat = selectedFormats[product.id];
    const formatInfo = product.formats.find((f) => f.type === selectedFormat);

    if (!formatInfo || !formatInfo.inStock) {
      console.error("Selected format is out of stock");
      return;
    }

    const cartItem = {
      productId: product.id,
      title: product.title,
      artist: product.artist,
      format: selectedFormat,
      price: formatInfo.price,
      quantity: quantities[product.id],
      coverArt: product.coverArt,
    };

    console.log("Added to cart:", cartItem);
    // Here you would typically dispatch to your cart state/API
  };

  const handleGiftAlbum = (product) => {
    console.log("Gift this album:", product.title);
    // Gift functionality would go here
  };

  const togglePreview = (productId) => {
    setActivePreview(activePreview === productId ? null : productId);
  };

  const handleFormatChange = (productId, formatType) => {
    setSelectedFormats((prev) => ({
      ...prev,
      [productId]: formatType,
    }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, newQuantity), // Ensure quantity doesn't go below 1
    }));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Shop Worship Music
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Purchase your favorite songs and albums
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicProducts.map((product) => {
            const currentFormatType =
              selectedFormats[product.id] || product.formats[0].type;
            const currentFormat =
              product.formats.find((f) => f.type === currentFormatType) ||
              product.formats[0];
            const availableFormats = product.formats.filter((f) => f.inStock);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.coverArt}
                    alt={product.album}
                    className="w-full h-64 object-cover"
                  />
                  {activePreview === product.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                      <audio
                        controls
                        autoPlay
                        className="w-full px-4"
                        onEnded={() => setActivePreview(null)}
                      >
                        <source src={product.previewUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.title}
                      </h3>
                      <p className="text-gray-700">{product.artist}</p>
                      <p className="text-gray-500 text-sm">{product.album}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        {formatPrice(currentFormat.price)}
                      </p>
                      {!currentFormat.inStock && (
                        <span className="text-xs text-red-500">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            product.id,
                            quantities[product.id] - 1
                          )
                        }
                        className="bg-gray-200 px-3 py-1 rounded-l-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-1">
                        {quantities[product.id]}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            product.id,
                            quantities[product.id] + 1
                          )
                        }
                        className="bg-gray-200 px-3 py-1 rounded-r-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Format Selection */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Format
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableFormats.map((format) => (
                        <button
                          key={format.type}
                          onClick={() =>
                            handleFormatChange(product.id, format.type)
                          }
                          className={`px-3 py-1 rounded-full text-sm ${
                            currentFormatType === format.type
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {format.type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Track Listing */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Track Listing
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.tracks.slice(0, 4).map((track, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-gray-500 mr-2">
                            {index + 1}.
                          </span>
                          {track}
                        </li>
                      ))}
                      {product.tracks.length > 4 && (
                        <li className="text-gray-600">
                          + {product.tracks.length - 4} more tracks
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!currentFormat.inStock}
                      className={`w-full flex items-center justify-center py-2 px-4 rounded-lg font-medium ${
                        currentFormat.inStock
                          ? "bg-black hover:bg-gray-800 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <BsCartPlus className="mr-2" />
                      Add to Cart
                    </button>

                    <button
                      onClick={() => handleGiftAlbum(product)}
                      className="w-full flex items-center justify-center py-2 px-4 border border-gray-600 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      <BsGift className="mr-2" />
                      Gift This Album
                    </button>

                    <button
                      onClick={() => togglePreview(product.id)}
                      className="w-full flex items-center justify-center py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium"
                    >
                      <BsMusicNoteBeamed className="mr-2" />
                      {activePreview === product.id
                        ? "Stop Preview"
                        : "Preview Track"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Shop Info */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            More Purchase Options
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-xs">
              <h4 className="font-medium text-gray-900 mb-2">
                Digital Downloads
              </h4>
              <p className="text-sm text-gray-600">
                Instant access to high-quality MP3 files after purchase
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-xs">
              <h4 className="font-medium text-gray-900 mb-2">Physical Media</h4>
              <p className="text-sm text-gray-600">
                CDs and vinyl shipped to your door with free shipping on orders
                over $50
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-xs">
              <h4 className="font-medium text-gray-900 mb-2">Gift Cards</h4>
              <p className="text-sm text-gray-600">
                Share the gift of worship music with friends and family
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopMusic;
