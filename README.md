# Image Search Application

A React application that allows users to search for images using the Unsplash API.

## Features

- Search for images using keywords
- View images in a responsive grid layout
- Load more images with pagination
- View image details in a modal
- Responsive design
- Error handling
- Loading states

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Unsplash API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd goit-react-hw-04
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Unsplash API key:
```
VITE_UNSPLASH_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Usage

1. Enter a search term in the search bar
2. Click the search button or press Enter
3. Browse through the results
4. Click on an image to view it in a modal with more details
5. Use the "Load more" button to fetch additional images

## Technologies Used

- React
- Vite
- Axios
- React Modal
- React Hot Toast
- React Loader Spinner
- CSS Modules

## Project Structure

```
src/
  ├── components/
  │   ├── SearchBar/
  │   ├── ImageGallery/
  │   ├── ImageCard/
  │   ├── Loader/
  │   ├── ErrorMessage/
  │   ├── LoadMoreBtn/
  │   └── ImageModal/
  ├── App.jsx
  ├── App.css
  └── main.jsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
