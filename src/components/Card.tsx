import { IconCheck, IconX } from '@tabler/icons-react';

type cardProps = {
  list: any;
  onDeleteList: any;
  onPackedList: any;
};

const Card = ({ list, onDeleteList, onPackedList }: cardProps) => {
  return (
    <div
      className={`flex flex-col items-end gap-3 py-3 border border-black ${
        list.packed ? 'border-opacity-20' : ''
      }`}
    >
      <div className='flex gap-3 px-3'>
        <IconCheck
          className={`text-black cursor-pointer ${
            list.packed ? 'text-opacity-20' : ''
          }`}
          stroke={1}
          width={24}
          height={24}
          onClick={() => onPackedList(list.id)}
        />
        <IconX
          className={`text-black cursor-pointer ${
            list.packed ? 'text-opacity-100' : 'text-opacity-100'
          }`}
          stroke={1}
          width={24}
          height={24}
          onClick={() => onDeleteList(list.id)}
        />
      </div>
      <div
        className={`w-full border-t border-t-black h-[1px] ${
          list.packed ? 'border-opacity-20' : ''
        }`}
      ></div>
      <div className='flex items-start w-full gap-1 px-3'>
        <span
          className={`text-black font-raleway text-h6 ${
            list.packed ? 'text-opacity-20' : ''
          }`}
        >
          {list.quantity}
        </span>
        <h5
          className={`text-black font-palyfair-display text-h5 uppercase ${
            list.packed ? 'line-through text-opacity-20' : ''
          }`}
        >
          {list.description}
        </h5>
      </div>
    </div>
  );
};

export default Card;
