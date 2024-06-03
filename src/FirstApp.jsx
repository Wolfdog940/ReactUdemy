import PropTypes from 'prop-types';

const nombre = 'Oscar';
const frase = 'soy un subtitulo'
const newMesagge = {
    message: 'Hola mundo',
    title: 'Fernando'
};

export const FirstAapp =({title,subtitle} )=>{
    
  

    return (
    <div>
        {/*<code>{JSON.stringify(newMesagge)}</code>*/}
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
    </div>

    )
}

FirstAapp.protoTypes = {
    title : PropTypes.string.isRequired , //para que el prop sea string y obligatorio
    subtitle : PropTypes.number.isRequired
};
FirstAapp.defaultProps = {
    title : 'Gamer',
    subtitle : 'Nero'
}
