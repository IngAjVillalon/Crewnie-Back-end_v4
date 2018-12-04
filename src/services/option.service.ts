import Option from '../api/option/option.model';

export default class OptionService {
    
    getOptionByName = (name: string) => {
        return Option.findOne({name: name})
            .exec()
    }
    getOptions = () => {
        return Option
            .find()
            .exec()
            .then(options => {
                let optionsObj = {}
                options.forEach((opt: any) => {
                    optionsObj[opt.name] = opt.value;
                });
                // console.log('------------',optionsObj, options)

                return optionsObj;
            });
    }
}