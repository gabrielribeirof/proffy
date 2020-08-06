import React, { useState, FormEvent } from 'react';
import api from '@proffy/axios-config';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container, SearchTeachers, NoTeachers } from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    } catch {
      setTeachers([]);
    }
  }

  return (
    <Container>
      <PageHeader title="These are the available proffys">
        <SearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
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
          <Input
            type="time"
            name="time"
            label="Hour"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Search</button>
        </SearchTeachers>
      </PageHeader>

      <main>
        {teachers.length > 0 ? (
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))
        ) : (
          <NoTeachers>
            No teachers found with your search.
          </NoTeachers>
        )}
      </main>
    </Container>
  );
};

export default TeacherList;
