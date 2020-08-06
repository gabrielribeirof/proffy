import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, WhatsappButton } from './styles';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => (
  <Container>
    <header>
      <img src={teacher.avatar} alt="Teacher" />
      <div>
        <b>{teacher.name}</b>
        <span>{teacher.subject}</span>
      </div>
    </header>

    <p>{teacher.bio}</p>

    <footer>
      <p>
        Price/hour
        <b>
          $
          {teacher.cost}
        </b>
      </p>

      <WhatsappButton>
        <img src={whatsappIcon} alt="Whatsapp" />
        Contact
      </WhatsappButton>
    </footer>
  </Container>
);

export default TeacherItem;
