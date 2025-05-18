import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import './App.css'

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const BASE_URL = 'https://api.unsplash.com/search/photos'

export default function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [hasMore, setHasMore] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async (query) => {
    try {
      setLoading(true)
      setError(null)
      setPage(1)
      setSearchQuery(query)
      
      const response = await axios.get(BASE_URL, {
        params: {
          query,
          page: 1,
          per_page: 12,
          client_id: API_KEY,
        },
      })

      setImages(response.data.results)
      setHasMore(response.data.total_pages > 1)
    } catch (error) {
      setError('Failed to fetch images. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = async () => {
    try {
      setLoading(true)
      const nextPage = page + 1
      
      const response = await axios.get(BASE_URL, {
        params: {
          query: searchQuery,
          page: nextPage,
          per_page: 12,
          client_id: API_KEY,
        },
      })

      setImages((prevImages) => [...prevImages, ...response.data.results])
      setPage(nextPage)
      setHasMore(response.data.total_pages > nextPage)
    } catch (error) {
      setError('Failed to load more images. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="app">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      
      {error && <ErrorMessage message={error} />}
      
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      
      {loading && <Loader />}
      
      {hasMore && !loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </div>
  )
}
