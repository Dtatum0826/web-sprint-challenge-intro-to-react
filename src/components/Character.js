import React, { useState } from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Accordion = styled.div`
  border-radius:10px;
`;

const Character = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CharacterContainer>
      <h1>Name: {character.name}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Character Description</button>
      {isOpen && (
        <Accordion>
          <p>Height: {character.height} cm</p>
          <p>Weight: {character.mass} kg</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Eye Color: {character.eye_color}</p>
        </Accordion>
      )}
    </CharacterContainer>
  );
};

export default Character;