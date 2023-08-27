import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const AddItemForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEnedTime] = useState('');
  const [where, setWhere] = useState('');
  const [reminder, setReminder] = useState('');
  const [repeat, setRepeat] = useState('');
  const [notes, setNotes] = useState('');

  const updateTitle = e => setTitle(e.target.value);
  const updateStart = e => setStartTime(e.target.value);
  const updateEnd = e => setEnedTime(e.target.value);
  const updateWhere = e => setWhere(e.target.value);
  const updateReminder = e => setReminder(e.target.value);
  const updateRepeat = e => setRepeat(e.target.value);
  const udpateNotes = e => setNotes(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      startTime,
      endTime,
      where,
      reminder,
      repeat,
      notes
    };

    // haven't yet built action creator
    dispatch()
  };

  return (
    <form>
      <div>
        <label>Title: </label>
        <input type="text" placeholder="What are you doing?"/>
      </div>
      <div>
        <label>Start Date: </label>
        <input type="datetime-local" placeholder="Title"/>
      </div>
      <div>
        <label>End Date: </label>
        <input type="datetime-local" placeholder="Title"/>
      </div>
      <div>
        <label>Where: </label>
        <input type="text" placeholder="Your items location"/>
      </div>
      <div>
        <label>Reminder: </label>
        <input type="number" placeholder="Reminder in seconds"/>
      </div>
      <div>
        <label>Repeat: </label>
        <input type="number" placeholder="Repeat duration in seconds"/>
      </div>
      <div>
        <label>Notes: </label>
        <textarea name="notes" cols="30" rows="10"></textarea>
      </div>
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  )
}

export default AddItemForm
