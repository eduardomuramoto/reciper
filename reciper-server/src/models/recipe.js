import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const RecipeSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        recipe: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
    },
    {
        collection: 'recipes',
    }
);

RecipeSchema.plugin(timestamps);

RecipeSchema.index({ createdAt: 1, updatedAt: 1 });

export const Recipe = mongoose.model('Recipe', RecipeSchema);
export const RecipeTC = composeWithMongoose(Recipe);
