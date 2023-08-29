import { useState } from "react";
import { useDispatch } from "react-redux";

import { editSingleItem } from "../store/todoitem";

export const EditItem = ({ item, setShowEditForm }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(item.title);
  const [startTime, setStartTime] = useState(item.startTime);
  const [endTime, setEndTime] = useState(item.endTime);
  const [where, setWhere] = useState(item.where);
  const [reminder, setReminder] = useState(item.reminder);
  const [repeat, setRepeat] = useState(item.repeat);
  const [notes, setNotes] = useState(item.notes);

  const [allDay, setAllDay] = useState(endTime ? true : false);

  const updateTitle = e => setTitle(e.target.value);
  const updateAllDay = e => setAllDay(e.target.checked);
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
      ...item,
      title,
      startTime,
      endTime,
      where,
      reminder,
      repeat,
      notes
    };

    dispatch(editSingleItem(payload));
    setShowEditForm(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowEditForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input type="text" placeholder={!item.title ? "Element not added" : item.title} onChange={updateTitle}/>
      </div>
      <div>
        <label>All Day?</label>
        {!endTime ?
          (
          <input type="checkbox" onChange={updateAllDay} />
          )
          :
          (
            <input type="checkbox" onChange={updateAllDay} defaultChecked />
          )
        }
      </div>
      <div>
        <label>Start Date: </label>
        <input type="datetime-local" placeholder="Start" onChange={updateStart}/>
      </div>
      {allDay &&
          <div>
            <label>End Date: </label>
            <input type="datetime-local" placeholder="End" onChange={updateEnd}/>
          </div>
      }
      <div>
        <label>Where: </label>
        <input type="text" placeholder={!item.where ? "Element not added" : item.where} onChange={updateWhere}/>
      </div>
      <div>
        <label>Reminder: </label>
        <input type="number" placeholder={!item.reminder ? "Element not added" : item.reminder} onChange={updateReminder}/>
      </div>
      <div>
        <label>Repeat: </label>
        <input type="number" placeholder={!item.repeat ? "Element not added" : item.repeat} onChange={updateRepeat}/>
      </div>
      <div>
        <label>Notes: </label>
        <textarea name="notes" cols="30" rows="10" onChange={udpateNotes} placeholder={item.notes}></textarea>
      </div>
      <button type="submit">Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

// export default EditItem
