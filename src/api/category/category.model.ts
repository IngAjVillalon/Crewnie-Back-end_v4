import { Document, model, Model, Schema, Types } from 'mongoose';
import UtilsService from '../../services/utils.service';
const ObjectId = Schema.Types.ObjectId;
const utils = new UtilsService();

export const CategorySchema = new Schema({
    // parentID: { type: ObjectId, ref: 'Category'},
    name: { type: String, required: true },
    bengaliName: String,
    slug: { type: String, unique: true },
    tags: [{ type: ObjectId, ref: 'Tag' }],
    imgUrl: String,
    position: { type: Number, default: 0 },
    
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }
});

// PRE SAVE CHECK -- parentID can not be own _id !!!!!!!!!!


CategorySchema.pre('save', function(next) {
    let doc : any = this;
    if(!doc.slug) {
        doc.slug = utils.stringToSlug(doc.name);
    } else {
        doc.slug = utils.stringToSlug(doc.slug);
    }
    next();
})

// Duplicate the ID field.
// CategorySchema.virtual('categoryID').get(function() {
//     return this._id.toHexString();
// });
// Ensure virtual fields are serialised.
// CategorySchema.set('toJSON', {
//     virtuals: true
// });


export default model('Category', CategorySchema);