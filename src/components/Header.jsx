import perfil from '../assets/perfil.jpg';

export default function Header(){
    return(
        <header className='flex flex-col items-center justify-center text-center py-10 px-4 bg-gradient-to-b from-blue-100 to-white' >
            <img
            src={perfil}
            alt='Foto de perfil'
            className='w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-400'
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Sebastian Hernandez Scarpetta</h1>
            <p className='text-gray-700 mt-2 max-w-xl'>
            Mi enfoque se centra en desarrollar soluciones
            eficientes, escalables y de alta calidad, utilizando
            tecnologías modernas y las mejores prácticas de la
            industria.

            </p>
        </header>
        
    )
}