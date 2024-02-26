import config from '../config/config.js';
import { getImageUrl } from '../helper/index.js';

export default (sequelize, Sequelize) => {
    const Movie = sequelize.define(
        'movie', {
        id: {
            type: Sequelize.INTEGER(),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING(),
            allowNull: true
        },
        publishing_year: {
            type: Sequelize.STRING(),
            allowNull: true
        },
        image: {
            type: Sequelize.STRING(255),
            allowNull: true,
            get() {
                const rawValue = this.getDataValue('image');
                console.log(rawValue,'rawValue')
                return rawValue?.split("/")?.includes('http:') || rawValue === null ? rawValue : getImageUrl(rawValue);
            }
        },
    },
        {
            tableName: 'movie'
        }
    )
    return Movie;
}
