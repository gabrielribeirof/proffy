import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import {
  Container, SearchTeachers, InputBlock, TeacherItem, WhatsappButton,
} from './styles';

const TeacherList: React.FC = () => (
  <Container>
    <PageHeader title="These are the available proffys">
      <SearchTeachers>
        <InputBlock>
          <label htmlFor="subject">Subject</label>
          <input type="text" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="subject">Week day</label>
          <input type="text" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="subject">Time</label>
          <input type="text" />
        </InputBlock>
      </SearchTeachers>
    </PageHeader>

    <main>
      <TeacherItem>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/39045611?s=460&u=443cbbc329d3206c1f34d11dff381b31cbb2ca83&v=4" alt="Teacher" />
          <div>
            <b>Gabriel Ribeiro</b>
            <span>Mathematic</span>
          </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Praesent mollis erat arcu, vel blandit risus efficitur at.
          Curabitur sagittis metus ac velit auctor.
        </p>
        <footer>
          <p>
            Price/hour
            <b>$ 80,00</b>
          </p>
          <WhatsappButton>
            <img src={whatsappIcon} alt="Whatsapp" />
            Contact
          </WhatsappButton>
        </footer>
      </TeacherItem>
    </main>
  </Container>
);

export default TeacherList;
