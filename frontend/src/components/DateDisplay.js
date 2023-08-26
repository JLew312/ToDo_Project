
const DateDisplay = () => {
  const todaysDate = new Date();

  const displayDate = (todaysDate) => {
    let day = todaysDate.getDay();
    let month = todaysDate.getMonth();

    let dayName;

    switch (day) {
      case 0:
        dayName = 'Sunday';
        break;
      case 1:
        dayName = 'Monday';
        break;
      case 2:
        dayName = 'Tuesday';
        break;
      case 3:
        dayName = 'Wednesday';
        break;
      case 4:
        dayName = 'Thursday';
        break;
      case 5:
        dayName = 'Friday';
        break;
      case 6:
        dayName = 'Sunday';
        break;
      default:
        break;
    };

    switch (month) {
      case 0:
        month = 'Jan';
        break;
      case 1:
        month = 'Feb';
        break;
      case 2:
        month = 'March';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'June';
        break;
      case 6:
        month = 'July';
        break;
      case 7:
        month = 'Aug';
        break;
      case 8:
        month = 'Sept';
        break;
      case 9:
        month = 'Oct';
        break;
      case 10:
        month = 'Nov';
        break;
      case 11:
        month = 'Dec';
        break;
      default:
        break;
    };

    const dateToDisplay = `${dayName}, ${month} ${day}`;
    return dateToDisplay;
  };

  return (
    <h1 className='date-display'>
      {displayDate(todaysDate)}
    </h1>
  )
}

export default DateDisplay
