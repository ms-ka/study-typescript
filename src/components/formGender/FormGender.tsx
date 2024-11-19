import { useFormik } from "formik";
import { useState } from "react";
import styles from './formGender.module.css'

//wysyła imię na API https://api.genderize.io i pokazuje wynik na stronie

//2. tworzę interface, interface to jest mój klucz
interface IFormData {
  name: string;
}

interface IGenderData {
  count: number,
  name: string,
  gender: string,
  probability: number;
}

export default function FormGender() {
  const [genderData, setGenderData] = useState<IGenderData>({
    count: 0,
    name: '',
    gender: '',
    probability: 0
  });

//1. na początku tworzę obiekt formik z funkcji useFormik wraz z kluczami
const formik = useFormik({
  initialValues: {
    name: ""
  } as IFormData,
  onSubmit: (values: IFormData, { resetForm }) => {
    resetForm();
    fetchGender(values.name);
  }
});
  //odpowiedz stąd zapisywana jest w const genderData
  //await używa się wewnątrz funkcji asychronicznej, umożliwia wstrzymanie wypełnienia funkcji aż do zakończenia promise, po czym zwraca rezultat
  const fetchGender = async (name: string) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    setGenderData(data);
  };

    return (
      <div className="lesson-container">
        <h5>Know your gender ✨</h5>
        
        <form className={styles.formGender} onSubmit={formik.handleSubmit}>
          <input placeholder="type your name" onChange={formik.handleChange} value={formik.values.name} name="name" type="text" />
          <button type="submit">send request</button>
        </form>
  
        {genderData.name && (
          <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
        )}
      </div>
    );
  }
