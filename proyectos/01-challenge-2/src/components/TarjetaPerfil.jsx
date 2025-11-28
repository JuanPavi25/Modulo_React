import './TarjetaPerfil.css'

export function TarjetaPerfil({ nombre, profesion, edad }) {
    return (
        <div className="card m-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://unavatar.io/${nombre}`} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{profesion}</p>
                        <p className="card-text"><small class="text-body-secondary">{edad}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
