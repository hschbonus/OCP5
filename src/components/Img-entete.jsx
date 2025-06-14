function ImgEntete({imgEnteteSrc, imgEnteteAlt, overlayOpacity, textEntete}) {
  return (
    <div className="img-entete" style={{ '--voile-opacity': overlayOpacity }}>
        <img 
          src={imgEnteteSrc} 
          alt={imgEnteteAlt}
        />
        <h1>{textEntete}</h1>
    </div>
  )
}

export default ImgEntete