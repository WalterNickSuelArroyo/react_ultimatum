export const getImagen = async() => {

    try {

        const apiKey = 'ojN0FfV6LQmsImQjrTI6xWUSIUUXA9Sp';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;
    } catch (error) {
        console.error(error);
        return 'No se encontro la imagen'
    }
}
