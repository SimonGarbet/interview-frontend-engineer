export type postObject =
  {
    userId: number,
    id: number,
    title: string,
    body: string
  };

  export type userObject =
  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: adressUser, 
    phone: string,
    website: string,
    company: compagnyUser
  };

  export type adressUser = 
  {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoUser
    };

  export type geoUser =
  {
    lat: string,
    lng: string
  };

  export type compagnyUser =
  {
      name: string,
      catchPhrase: string,
      bs: string
  }