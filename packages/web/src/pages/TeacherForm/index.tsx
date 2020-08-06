import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '@proffy/axios-config';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, Box } from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' },
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Successfully registered');

      history.push('/');
    }).catch(() => {
      alert('Error when trying to register');
    });
  }

  return (
    <Container>
      <PageHeader
        title="How amazing you want to teach"
        description="The first step is to fill out this registration form"
      />

      <main>
        <Box>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Your datas</legend>

              <Input
                name="name"
                label="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
              <Input
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <Textarea
                name="bio"
                label="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>About the class</legend>

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
              <Input
                name="cost"
                label="Cost of your class per day"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>
                Available times
                <button type="button" onClick={addNewScheduleItem}>
                  + New time
                </button>
              </legend>

              {scheduleItems.map((scheduleItem, index) => (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Week day"
                    value={scheduleItem.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                    name="from"
                    label="From"
                    value={scheduleItem.from}
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    type="time"
                    name="to"
                    label="To"
                    value={scheduleItem.to}
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              ))}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Important!
                <br />
                Fill in all fields
              </p>
              <button type="submit">Save data</button>
            </footer>
          </form>
        </Box>
      </main>
    </Container>
  );
};

export default TeacherForm;
