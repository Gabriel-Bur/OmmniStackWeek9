import React, {useState, useMemo} from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.svg';

import './style.css';

export default function New({ history }) {
    const[company, setCompany] = useState('');
    const[techs, setTechs] = useState('');
    const[price, setPrice] = useState('');
    const[thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => 
    {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail]);

    async function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail',thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('spots', data, {
            headers: { user_id }
        });

        history.push('/dashboard');
    }

    return (<>
        <form onSubmit={handleSubmit}>

            <label id="thumbnail"
                className={thumbnail ? 'has-thumbnail' :''}
                style={{backgroundImage: `URL(${preview})`}}>
              
              <input 
                type="file"
                onChange={event => setThumbnail(event.target.files[0])}/>
              <img src={camera} alt="Select img" />   
            </label>

            <lable htmlFor="company">Empresa *</lable>
            <input
                id="company"
                placeholder="Digite o nome da sua empresa."
                value={company}
                onChange={event => setCompany(event.target.value)} 
                required />
        
            <lable htmlFor="techs">Tecnologias *</lable>
            <span>(separadas por virgula)</span>
            <input id="techs"
                    type="text"
                    placeholder="Quais tecnoligas usam ?" 
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                    required />

            <lable htmlFor="price">Valor da diária *</lable>
            <span>(em branco para Gratuito)</span>
            <input id="price"
                type="text"
                pattern="[0-9]*"
                placeholder="Valor cobrado por dia." 
                value={price}
                onChange={event => setPrice(event.target.value)}/>

            <button type="submits" className="btn">Cadastrar</button>
        </form>
        
    </>);
}