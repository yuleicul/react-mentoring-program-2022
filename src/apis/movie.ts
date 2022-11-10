export interface Movie {
  id: string
  coverSrc: string
  title: string
  genre: string[]
  releaseDate: string
  movieUrl?: string
  rating?: number
  runtime?: number
  overview?: string
}

export const getMovieList = (): Movie[] => {
  return [
    {
      id: '1',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '2',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '3',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '4',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '5',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '6',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '7',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
    {
      id: '8',
      coverSrc:
        'https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1',
      title: 'Mario',
      genre: ['Cartoon', 'Action'],
      releaseDate: '2022',
      overview: 'Mario!',
      rating: 7.9,
      runtime: 100,
    },
  ]
}
