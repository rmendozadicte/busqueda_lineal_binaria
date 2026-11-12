function buscarGenero(playlist,generoBuscado) {
    console.log(`Buscando una canción del género ${generoBuscado} en la playlist`);
    for (let i = 0; i < playlist.length; i++) {
        let cancion = playlist[i]; 
        console.log(`Analizando pista [${i}]: ${cancion.titulo} del artista ${cancion.artista}`);
        
        if( cancion.genero.toLowerCase() === generoBuscado.toLowerCase() ){
            console.log(`Pista encontrada! Titulo: ${cancion.titulo} del género ${generoBuscado}`);
            return cancion;
        }
    }
    console.log(`No se encontró el género buscado`);
    return null;
}

const miPlaylist = [
    { titulo: "Blinding Lights", artista: "The Weeknd", genero: "Pop" },
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", genero: "Rock" },
    { titulo: "Get Lucky", artista: "Daft Punk", genero: "Electronic" },
    { titulo: "Enter Sandman", artista: "Metallica", genero: "Metal" }
]

buscarGenero(miPlaylist,"Metal")