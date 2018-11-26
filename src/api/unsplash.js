import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c6c6fa04b81a9056efffdc80dc3bfda91275343e6822754f41bcfc4d17cbc003'
  }
})