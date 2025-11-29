import './TarjetaPerfil.css'

export function TarjetaPerfil({ nickname, nombre, profesion, edad }) {
    return (
        <div className="card m-3 shadow-lg">
            <div className="row g-0">
                <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                    <img src={`https://api.dicebear.com/9.x/big-ears/svg?seed=${nickname}`} className="img-fluid rounded-start" alt="Imagen-Perfil"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{profesion}</p>
                        <p className="card-text"><small class="text-body-secondary">{edad}</small></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
