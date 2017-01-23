export interface Geolocation {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation;
}

export interface User {
    id: number;
    picture: string;
    name: string;
    birthday: Date;
    phone: string;
    email: string;
    address:  Address;
    website: string;
    isFavorited: boolean;
}