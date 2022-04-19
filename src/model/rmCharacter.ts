
export type rmCharacter = {
    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string
    origin:rmCharacterOrigin;
    location:rmCharacterLocation;
    image:string;
    episode:string[];
    url:string;
    created:string;

}

export type rmCharacterOrigin = {
    name:string;
    url:string;
}

export type rmCharacterLocation = {
    name:string;
    url:string;
}