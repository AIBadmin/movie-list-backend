import { successRes, errorRes, uploadImage } from "../../helper/index.js";
import db from "../../model/index.js";
const Movie = db.movie;

const editMovie = async (req, res) => {
    try {
        const { id } = req.params;

        const { title, publishing_year } = req.body;

        const movie = await Movie.findByPk(id);

        let image = movie.image;
        if (req.files.length !== 0) {
            image = await uploadImage(req.files, 'movie_image', 'image');
        }

        movie.title = title;
        movie.publishing_year = publishing_year;
        if (req.body.image === 'null') {
            movie.image = null;
        } else {
            movie.image = image;
        }

        await movie.save();

        const updatedmovie = await Movie.findByPk(id);
        return successRes(res, 1008, updatedmovie);
    } catch (error) {
        console.error("Error editing movie:", error);
        return errorRes(res, 500, "Internal Server Error");
    }
};

export default editMovie;