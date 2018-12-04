export default class UtilsService {

    toHexString = (str: any) => {
        if ( str.toHexString ) {
            return str.toHexString();
        }
        return str;
    }

    isEntityOwner = (entityID, userID) => {
        entityID = this.toHexString(entityID);
        userID = this.toHexString(userID);
        
        return entityID === userID;
    }

    stringToSlug = (str) => {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";

        for (var i=0, l=from.length ; i<l ; i++)
        {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace('.', '-') // replace a dot by a dash 
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
}