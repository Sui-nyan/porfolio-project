
const FourCorners = () => {
  return (
      <div className="p-5 grid bg-purple-950 text-teal-100 grid-cols-2">
        <div className="card">
          <a>
            <h2 className="card-title">Programming</h2>
            <p>See details about my software projects</p>
          </a>
        </div>

        <div className="p-2 hover:text-amber-100">
          <a>
            <h2>Art</h2>
            <p>Look at my 2D and 3D artworks</p>
          </a>
        </div>

        <div className="p-2 hover:text-amber-100">
          <a>
            <h2>C.V.</h2>
            <p>My education and job experiences</p>
          </a>
        </div>

        <div className="p-2 hover:text-amber-100">
          <a>
            <h2>Music</h2>
            <p>Songs that live in my headspace</p>
          </a>
        </div>
      </div>
  )
}

export default FourCorners;