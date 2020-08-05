import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, Box } from './styles';

const TeacherForm: React.FC = () => (
  <Container>
    <PageHeader
      title="How amazing you want to teach"
      description="The first step is to fill out this registration form"
    />

    <main>
      <Box>
        <fieldset>
          <legend>Your datas</legend>

          <Input name="name" label="Full name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>About the class</legend>

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
          <Input name="cost" label="Cost of your class per day" />
        </fieldset>

        <fieldset>
          <legend>
            Free hours
            <button type="button">
              + New hour
            </button>
          </legend>

          <div className="schedule-item">
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
            <Input type="time" name="from" label="From" />
            <Input type="time" name="to" label="to" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Important!
            <br />
            Fill in all fields
          </p>
          <button type="submit">Save datas</button>
        </footer>
      </Box>
    </main>
  </Container>
);

export default TeacherForm;
