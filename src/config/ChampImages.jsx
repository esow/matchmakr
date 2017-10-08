import React from 'react'
import { Image } from 'semantic-ui-react'


export function getChampImage(champ){
    let trimmedChamp = champ.replace(/\s/g,''); // Remove whitespace in champ name
    if(trimmedChamp === "Cho'Gath"){ //TODO: Fix
        trimmedChamp = "Chogath"
    }
    const champImageUrl = "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + trimmedChamp + ".png";
    return <Image centered src={champImageUrl} size='mini'/>;
}

export function getSummonerIcon(id){
    const champImageUrl = "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/" + id + ".png";
    return <Image shape="rounded" src={champImageUrl} size='tiny'/>;
}