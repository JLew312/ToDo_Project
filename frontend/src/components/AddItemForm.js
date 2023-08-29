import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../store/todoitem";

const AddItemForm = ({ setShowForm }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [where, setWhere] = useState('');
  const [reminder, setReminder] = useState('');
  const [repeat, setRepeat] = useState('');
  const [notes, setNotes] = useState('');

  const updateTitle = e => setTitle(e.target.value);
  const updateStart = e => setStartTime(e.target.value);
  const updateEnd = e => setEndTime(e.target.value);
  const updateWhere = e => setWhere(e.target.value);
  const updateReminder = e => setReminder(e.target.value);
  const updateRepeat = e => setRepeat(e.target.value);
  const udpateNotes = e => setNotes(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      return alert('Please add title')
    }

    if (!startTime) {
      return alert('Please add Start Time and Day')
    }

    if (!endTime) {
      return alert('Please add End Time and Day')
    }

    const payload = {
      title,
      startTime,
      endTime,
      where,
      reminder,
      repeat,
      notes
    };

    dispatch(addItem(payload));
    setShowForm(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input type="text" placeholder="What are you doing?" onChange={updateTitle}/>
      </div>
      <div>
        <label>Start Date: </label>
        <input type="datetime-local" placeholder="Start" onChange={updateStart}/>
      </div>
      <div>
        <label>End Date: </label>
        <input type="datetime-local" placeholder="End" onChange={updateEnd}/>
      </div>
      <div>
        <label>Where: </label>
        <input type="text" placeholder="Your items location" onChange={updateWhere}/>
      </div>
      <div>
        <label>Reminder: </label>
        <input type="number" placeholder="Reminder in seconds" onChange={updateReminder}/>
      </div>
      <div>
        <label>Repeat: </label>
        <input type="number" placeholder="Repeat duration in seconds" onChange={updateRepeat}/>
      </div>
      <div>
        <label>Notes: </label>
        <textarea name="notes" cols="30" rows="10" onChange={udpateNotes} placeholder="Add notes..."></textarea>
      </div>
      <button type="submit">Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default AddItemForm
