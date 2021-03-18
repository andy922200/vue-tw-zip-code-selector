interface ObjectKeys {
    [key: string]: string | number | undefined | ObjectKeys;
}

interface CountyObject extends ObjectKeys {
    name: string;
    param: string | number;
}

interface ZoneObject extends ObjectKeys {
    name: string;
    zipCode: string | number;
    county: string;
    countyName?: string;
}

export { CountyObject, ZoneObject }