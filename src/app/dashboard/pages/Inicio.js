import React from 'react';

const Inicio = () => {
    return (
        <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-between bg-primary-red">
            <div className='min-w-full text-4xl font-extrabold pt-8'>
                <h2 className='text-secondary-font '>Contactanos</h2>
            </div>
            <div className='grid grid-cols-2 min-w-full min-h-screen justify-center'>
                <div className='hidden sm:block w-full max-w-sm justify-center bg-primary-white rounded-2xl mt-10 shadow-lg'>
                </div>
            </div>
        </section>
    );
}

export default Inicio;