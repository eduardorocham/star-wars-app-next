import { Character } from './character';

export type Movie = {
    title: string, 
    episode_id: number, 
    opening_crawl: string, 
    director: string, 
    producer: string, 
    release_date: string, 
    characters: Character[], 
    planets: [], 
    starships: [], 
    vehicles: [], 
    species: [], 
    created: string, 
    edited: string, 
    url: string
}