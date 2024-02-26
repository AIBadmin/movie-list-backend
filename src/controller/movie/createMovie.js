import { successRes, errorRes, uploadImage } from "../../helper/index.js";
import db from "../../model/index.js";
import Validator from "validatorjs";
const Movie = db.movie; 

const createMovie = async (req, res) => {
    try {
        const validation = new Validator(req.body, {
            title: "required",
            publishing_year: "required|integer"
        });

        if (validation.fails()) 
            return errorRes(res, 400, Object.values(validation.errors.errors)[0][0]);

        const data = req.body;

        let image;
        if (req.files) {
            image = await uploadImage(req.files, 'movie_image', 'image');
        }

        data.image = image;

        const movie = await Movie.create(data);

        return successRes(res, 1006, { movie });
    } catch (error) {
        console.error("Error creating movie:", error);
        return errorRes(res, 500, "Internal Server Error");
    }
};


export default createMovie;