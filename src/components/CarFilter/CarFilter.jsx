import { useEffect } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/advertsSlice';
import { selectFilter } from '../../redux/selector';
import { options } from '../../options';

const customStyles = {
  control: (base, _) => ({
    ...base,
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '20px',
    background: '#F7F7FB',
    border: 'none',
    borderRadius: '14px',
    padding: '6px 8px',
    fontWeight: '500',
    color: '#121417',
  }),
  option: styles => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '14px',
    color: 'rgba(18, 20, 23, 0.20)',
    '&:hover': {
      color: '#121417',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#9ca3af',
  }),
};

const CarFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const { handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(filter);
  }, [filter, reset]);

  const onSubmit = data => {
    dispatch(changeFilter(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>Car brand</label>

            <Select
              options={options}
              styles={customStyles}
              isSearchable={true}
              placeholder="Enter the text"
            />
          </div>
          <button type="submit" value="search" />
        </div>
      </form>
    </div>
  );
};

export default CarFilter;
