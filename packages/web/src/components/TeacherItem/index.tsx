import React from 'react';
import api from '@proffy/axios-config';

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

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
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

        <WhatsappButton
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Contact
        </WhatsappButton>
      </footer>
    </Container>
  );
};

export default TeacherItem;
