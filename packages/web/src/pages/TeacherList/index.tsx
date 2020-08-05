import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import {
  Container, SearchTeachers, TeacherItem, WhatsappButton,
} from './styles';

const TeacherList: React.FC = () => (
  <Container>
    <PageHeader title="These are the available proffys">
      <SearchTeachers>
        <Select
          name="subject"
          label="Subject"
          options={[
            { value: 'Art', label: 'Art' },
            { value: 'Biology', label: 'Biology' },
            { value: 'English', label: 'English' },
            { value: 'Fisic', label: 'Fisic' },
            { value: 'Geographic', label: 'Geographic' },
            { value: 'History', label: 'History' },
            { value: 'Mathematic', label: 'Mathematic' },
            { value: 'Quimic', label: 'Quimic' },
            { value: 'Science', label: 'Science' },
          ]}
        />
        <Select
          name="week_day"
          label="Week day"
          options={[
            { value: '0', label: 'Sunday' },
            { value: '1', label: 'Monday' },
            { value: '2', label: 'Tuesday' },
            { value: '3', label: 'Wednesday' },
            { value: '4', label: 'Thursday' },
            { value: '5', label: 'Friday' },
            { value: '6', label: 'Saturday' },
          ]}
        />
        <Input type="time" name="time" label="Hour" />
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
