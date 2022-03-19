export interface movie_card{
    id: number;
    titulo: string;
    poster: string;
    urlPublico: string;
}

export interface secciones{
    recomendaciones?: movie_card[];
    novedades?: movie_card[];
    continuar?: movie_card[];
    parecidos?: movie_card[];
    originales?: movie_card[];
    un_marvel?: movie_card[];
    fantMist?: movie_card[];
    tendencias?: movie_card[];
    oscar?: movie_card[];
    series_an?:movie_card[];
    peli_an?:movie_card[];
    mujere_prota?:movie_card[];
    comedias?:movie_card[];
    clasicos?:movie_card[];
    musica?:movie_card[];
    disneyJr?:movie_card[];
    disney_cha?:movie_card[];
    mickey?:movie_card[];
    colecciones?:movie_card[];
    cortes?:movie_card[];
    exitos?:movie_card[];
    
}