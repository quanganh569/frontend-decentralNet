import React from 'react'
import OnSale from './OnSale'
import preview_1 from '/assets/imgs/preview-1.png'
import preview_2 from '/assets/imgs/preview-2.png'
import preview_3 from '/assets/imgs/preview-3.png'

const OnSaleLayout = () => {
  const productsList = [
    {
      preview: preview_1,
      name: 'Amazing digital art',
      price: '2.45 ETH',
    },
    {
      preview: preview_2,
      name: 'Colorful Keyboard',
      price: '2.45 ETH',
    },
    {
      preview: preview_3,
      name: 'Black Golden Tiger',
      price: '2.45 ETH',
    },
    {
      preview: preview_2,
      name: 'Amazing digital art',
      price: '2.45 ETH',
    },
    {
      preview: preview_3,
      name: 'Colorful Keyboard',
      price: '2.45 ETH',
    },
    {
      preview: preview_1,
      name: 'Black Golden Tiger',
      price: '2.45 ETH',
    },
  ]

  const menuItems = [
    { label: 'On Sale', selected: true },
    { label: 'Collectibles', selected: false },
    { label: 'Created', selected: false },
    { label: 'Likes', selected: false },
    { label: 'Followings', selected: false },
    { label: 'Followers', selected: false },
  ]

  return (
    <div className="flex flex-row">
      <div className="w-1/3" />
      <div className="w-2/3">
        <div className="mt-10 flex flex-row">
          {menuItems.map((item, index) => (
            <button
              id={`item-${index}`}
              className={
                item.selected
                  ? 'mr-5 rounded-full px-4 py-1 bg-black font-medium text-white'
                  : 'mr-5 rounded-full px-3  py-1 text-gray-500'
              }
            >
              <p>{item.label}</p>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {productsList.map((item, index) => (
            <div id={`item-${index}`}>
              <OnSale
                preview={item.preview}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OnSaleLayout
