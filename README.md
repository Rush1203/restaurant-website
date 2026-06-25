# CartFlow

A restaurant ordering web app built with React and Redux Toolkit. Browse a categorized menu, save favorites, manage a persistent cart, and place orders — all state survives a page refresh via localStorage.

## Live demo

https://rush1203restaurant.netlify.app/

## Features

- **Menu browsing** with search and category filtering (Starters, Main Course, Drinks, Dessert)
- **Featured items** section highlighting chef's specials
- **Cart management** — add items, adjust quantities, see live totals
- **Favorites** — save dishes for later with persistent storage
- **Order history** — past orders are saved and viewable, with an option to clear history
- **Toast notifications** for cart and favorite actions
- **Responsive design** with a mobile-friendly nav drawer
- **Image carousel** banner on the homepage

## Tech stack

- **React** (Vite)
- **Redux Toolkit** for global state (cart, favorites, order history)
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **react-hot-toast** for notifications
- **lucide-react** for icons
- **localStorage** for persisting cart, favorites, and order history across sessions


## Getting started

```bash
# Clone the repo
git clone https://github.com/Rush1203/restaurant-website.git
cd restaurant-website

# Install dependencies
npm install

# Run the dev server
npm run dev
```


