import perfil from '../assets/perfil.jpg';

export default function Header(){
    return(
        <header className='text-[#253237] py-8 text-center justify-items-center' >
            <img
            src={perfil}
            alt='Foto de perfil'
            className='w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#5C6B73]'
            />
            <h1 className="text-3xl md:text-4xl font-bold text-[#253237] ">Sebastian Hernandez Scarpetta (Desarrollador web)</h1>
            <p className='text-[#253237]  mt-2 max-w-xl'>
            Mi enfoque se centra en desarrollar soluciones
            eficientes, escalables y de alta calidad, utilizando
            tecnologías modernas y las mejores prácticas de la
            industria.
            </p>
        </header>
        
    )
}