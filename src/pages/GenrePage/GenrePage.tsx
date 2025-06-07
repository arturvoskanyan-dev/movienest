import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { getGenresFilms } from '../../features/genres/genresThunk';
import { useNavigate, useParams } from 'react-router-dom';
import FilmsItem from '../../components/FilmsItem/FilmsItem';

export default function GenrePage() {
  const { genresFilms } = useAppSelector((state) => state.genres);
  const { language } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  let { id, page } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(getGenresFilms({ genresId: +id!, language, page: 1 }))
  }, [id, language, page])  

  useEffect(() => {
    const handleScroll = () => {
      const newPage = +page! + 1;
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 100) {
        dispatch(getGenresFilms({ genresId: +id!, language, page: newPage }));
        navigate(`/category/${id}/${newPage}`)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page])

  return (
    <section className='px-12 py-28'>
      <h3 className='text-3xl text-white p-12'>Our Genre</h3>
      <div className='flex justify-center flex-wrap gap-12'>
        {
          genresFilms.map((film) => <FilmsItem key={film.id} film={film} />)
        }
      </div>
      <div className='w-full flex justify-center pt-20'>
        <button
          className='w-[251px] h-[54px] bg-[#E50000] text-white text-xl rounded-md cursor-pointer duration-300 hover:bg-[#ff9999]'>
          View All
        </button>
      </div>
    </section>
  )
}
