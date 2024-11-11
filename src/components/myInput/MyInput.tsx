import internal from 'stream';
import './myInput.css'

interface IMyInputProps{
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
}

function MyInput ({
  name='defaultName',
  type='text',
  placeholder='Enter text',
  label='label'
}: IMyInputProps){

  return (
      <div className='input-container'> 
      <label>{label}</label>
      <input name={name} 
      type={type}
      placeholder={placeholder} />
    </div>
  );
};

export default MyInput;
