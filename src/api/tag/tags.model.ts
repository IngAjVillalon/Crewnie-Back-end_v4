import { model, Schema } from 'mongoose';
import UtilsService from '../../services/utils.service';
const ObjectId = Schema.Types.ObjectId;
const utils = new UtilsService();

export const TagSchema = new Schema({
    name: { type: String, required: true },
    bengaliName: String,
    slug: { type: String, unique: true },
    
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }
});

TagSchema.pre('save', function(next) {
    let doc : any = this;
    if(!doc.slug) {
        doc.slug = utils.stringToSlug(doc.name);
    } else {
        doc.slug = utils.stringToSlug(doc.slug);
    }
    next();
})

export default model('Tag', TagSchema);