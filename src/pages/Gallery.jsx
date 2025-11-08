import '../main.css';

const Gallery = () => {
  const galleryImages = [
    'PXL_20250529_073018560.jpg',
    'PXL_20250529_074305739.jpg',
    'PXL_20250529_074955723.jpg',
    'PXL_20250529_075312970.jpg',
    'PXL_20250529_075352207.jpg',
    'PXL_20250529_081212202.jpg',
    'PXL_20250529_085054120.jpg',
    'PXL_20250711_114145164.PORTRAIT.ORIGINAL.jpg',
    'PXL_20250711_114146230.PORTRAIT.jpg',
    'PXL_20250905_120439890.PORTRAIT.jpg',
    'PXL_20250905_120539690.PORTRAIT.jpg',
    'PXL_20250905_120601033.PORTRAIT.jpg',
    'PXL_20250711_114114850.PORTRAIT.jpg',
    'PXL_20250529_072035493.jpg',
    'PXL_20250905_120519581.PORTRAIT.jpg',
    'PXL_20250529_081112252.jpg',
    'PXL_20250905_120538824.PORTRAIT.jpg',
    'PXL_20250905_120617480.PORTRAIT.ORIGINAL.jpg',
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Moments from our events and activities</p>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={`/images/${image}`} 
                  alt={`HRUNLOCK Africa Event ${index + 1}`} 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

