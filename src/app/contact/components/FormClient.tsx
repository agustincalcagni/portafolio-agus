"use client";

import { useCallback, useEffect, useState } from "react";

export const FormClient = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = useCallback(async() => {
    const response = await fetch("https://solid-geolocation.vercel.app/location")
    const locationData = await response.json()
      await fetch("/api/data-send", {
        method: "POST",
        body: JSON.stringify({
          name,
          lastName,
          email,
          message,
          ip: locationData.ip,
          city: locationData.city.name,
          country: locationData.country.name
        }),
      }).then((res) => res.json()).then((data) => (console.log(data))).catch((err) => console.log(err))
  }, [name, lastName, email, message])

  useEffect(() => {
    if (name) {
      submit()
    }
  }, [name, submit])

  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          className="w-full p-2 border border-gray-300 dark:border-zinc-700/50 rounded"
        />
      </div>
      <div>
        <label htmlFor="apellido" className="block text-sm font-medium">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Ingresa tu apellido"
          className="w-full p-2 border border-gray-300 dark:border-zinc-700/50 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          className="w-full p-2 border border-gray-300 dark:border-zinc-700/50 rounded"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje"
          className="w-full p-2 border border-gray-300 dark:border-zinc-700/50 rounded resize-none"
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-[#FF7759] text-white rounded cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
};
