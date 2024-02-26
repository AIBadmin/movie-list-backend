import { errorRes, successRes } from "../../helper/index.js";
import db from "../../model/index.js";
const Movie = db.movie;

const listSingleMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        return successRes(res, 1000, movie);
    } catch (error) {

        return errorRes(res, 500, "Internal Server Error");
    }
}

export default listSingleMovie