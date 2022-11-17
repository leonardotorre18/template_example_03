import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-2 py-10">
        <ul className="m-3 flex gap-3 justify-center">
          <li>Trabajo</li>
          <li>Tienda</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
        <p className="text-center m-3">
          Hecho por <span className="font-bold">LeonardoTorre</span>
        </p>
      </div>
    </footer>
  );
}
