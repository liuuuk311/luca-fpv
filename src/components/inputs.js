import React from 'react'

const NameField = ({id, name}) => {
  return (
    <div className="mb-4">
        <label htmlFor={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
        <input type="text" id={id} name={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mario Rossi" required/>
    </div>
  )
}

const EmailField = ({id, name}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id={id} name={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome.cognome@email.com" required/>
            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Il tuo indirizzo email non verrà condiviso con terze parti, e <strong>non riceverai mai spam</strong>.</p>
        </div>
    )
}

const MessageArea = ({id, name}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Messaggio</label>
            <textarea id={id} name={name} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciao Luca, ti scrivo perché..." />
        </div>
    )
}

const PhoneField = ({id, name}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
            <input type="tel" id={id} name={name} pattern="[0-9]{9}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="346 111 1111" required/>
        </div>
    )
}

export {
    NameField,
    EmailField,
    MessageArea,
    PhoneField
}