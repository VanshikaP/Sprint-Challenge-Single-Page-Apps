import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import EpisodeInfo from "./EpisodeInfo";

export default function CharacterCard({character}) {
  return (
    <div className='character' key={character.id}>
      <Card>
        <CardBody>
          <CardTitle> {character.name} </CardTitle>
          <CardSubtitle>{character.species}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={character.image} alt={character.name} />
        <CardBody>
          <CardText>Status: {character.status} </CardText>
          <CardText>Origin: {character.origin.name} </CardText>
          <CardText>Location: {character.location.name} </CardText>
          <CardText>Episodes: {character.episode.length}
            {/* <ul>
              {character.episode.map(epi => {
                return <li><EpisodeInfo episode={epi} /></li>
              })}
            </ul> */}
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
