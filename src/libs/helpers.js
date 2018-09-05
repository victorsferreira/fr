import ls from 'local-storage';

export function persistSession(data) {
    ls('session', JSON.stringify(data));
}

export function isNumeric(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

export function getPersistedSession() {
    const session = ls('session');
    if (session) {
        return JSON.parse(session);
    }

    return null;
}

export function deletePersistedSession() {
    return ls.remove('session');
}

export function upperCaseFirstLetter(input) {
    return input[0].toUpperCase() + input.substr(1);
}

export function lowerCaseFirstLetter(input) {
    return input[0].toLowerCase() + input.substr(1);
}

export function toActionName(input) {
    return input.replace(/-/g, '_').split('_').map((word) => { return word.toUpperCase() }).join('_');
}

export function toReducerName(input) {
    return input.replace(/-/g, '_').split('_').map((word, i) => { 
        if(!i) return lowerCaseFirstLetter(word);
        return upperCaseFirstLetter(word);
    }).join('');
}

export function getValueByFieldName(object, fieldName) {
    const fieldParts = fieldName.split('.');
    let value = null;

    for (let field of fieldParts) {
        if (field in object) {
            value = object = object[field];
        } else return null;
    }

    return value;
}

export function combineRoutes(routes) {
    let allRoutes = [];
    routes.forEach((route) => {
        allRoutes = allRoutes.concat(route);
    });

    return allRoutes;
}