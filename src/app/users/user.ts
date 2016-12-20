export class Geolocation {
    lat: string;
    lng: string;
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo = new Geolocation();
}

export class User {
    id: string;
    picture: string;
    name: string;
    birthday: Date;
    phone: string;
    email: string;
    address = new Address();
    website: string;
    isFavorited: boolean;
}