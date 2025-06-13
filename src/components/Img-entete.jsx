
function ImgEntete({imgEnteteSrc, imgEnteteAlt, overlayOpacity, textEntete}) {
  return (
    <div className="img-entete">
        <div
            className="background-img"
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />      
        <img 
          src={imgEnteteSrc} 
          alt={imgEnteteAlt}
        />
        <h1>{textEntete}</h1>

    </div>
  )
}

export default ImgEntete