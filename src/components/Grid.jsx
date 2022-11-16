import React, { Suspense } from 'react'

const imgList = [
  {id: 1, url: 'https://www.mockupworld.co/wp-content/uploads/2017/05/free-showcasing-header-mockup.jpg'},
  {id: 2, url: 'https://www.mockupworld.co/wp-content/uploads/2017/02/responsive-web-design-mockup-free-psd.jpg'},
  {id: 3, url: 'https://simpleintelligentsystems.com/wp-content/uploads/2020/01/Free-Website-Design-Mockup-For-Fitness-Studio.jpg'},
  {id: 4, url: 'https://designshack.net/wp-content/uploads/how-to-customize-a-website-mockup-template.jpg'},
  {id: 5, url: 'https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg'},
  {id: 6, url: 'https://img.freepik.com/premium-psd/3d-interface-website-presentation-mockup-isolated_359791-222.jpg?w=2000'},
]

export default function Grid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      { imgList.map(({id, url}) => (
        <div className="w-full h-full overflow-hidden" key={id}>
            <img
              className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:opacity-60"
              src={url}
              alt="Proyecto de ejemplo"
            />
        </div>
      )) }
    </div>
  )
}
