
function ImgEntete({src, alt}) {
  return (
    <div className="img-entete">
      <div className="background-img"></div>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default ImgEntete