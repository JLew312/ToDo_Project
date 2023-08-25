
const DateDisplay = () => {
  const todaysDate = new Date();

  const displayDate = (todaysDate) => {
    let day = todaysDate.getDay();
    let month = todaysDate.getMonth();

    switch (month) {
      case 0:
        month = 'jan';
        break;
      case 1:
        month = 'feb';
        break;
      case 2:
        month = 'march';
        break;
      case 3:
        month = 'april';
        break;
      case 4:
        month = 'may';
        break;
      case 5:
        month = 'june';
        break;
      case 6:
        month = 'july';
        break;
      case 7:
        month = 'aug';
        break;
      case 8:
        month = 'sept';
        break;
      case 9:
        month = 'oct';
        break;
      case 10:
        month = 'nov';
        break;
      case 11:
        month = 'dec';
        break;
      default:
        break;
    }

    const dateToDisplay = `${month.toUpperCase()} ${day}`;
    return dateToDisplay;
  };

  return (
    <div>{displayDate(todaysDate)}</div>
  )
}

export default DateDisplay
