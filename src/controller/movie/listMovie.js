import { successRes, errorRes } from "../../helper/index.js";
import db from "../../model/index.js";
const Movie = db.movie;

const listMovie = async (req, res) => {
    try {
        const movies = await Movie.findAll();

        return successRes(res, 1007, { movies });
    } catch (error) {
        console.error("Error fetching movies:", error);
        return errorRes(res, 500, "Internal Server Error");
    }
};

export default listMovie;
