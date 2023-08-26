import sampleItems from '../sampleItems';

const ItemTitleCard = () => {

  return (
    <>
      <div>
        {sampleItems.map(item => (
          <div className='item-box-closed'>
            <input type="radio" />
            <h3 key={item.title}>{item.title}</h3>
            <h4>{item.startTime.toDateString()}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemTitleCard;
