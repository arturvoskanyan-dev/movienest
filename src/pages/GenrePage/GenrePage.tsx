import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { getGenresFilms } from '../../features/genres/genresThunk';
import { useParams } from 'react-router-dom';
import FilmsItem from '../../components/FilmsItem/FilmsItem';

export default function GenrePage() {
  const { genresFilms } = useAppSelector((state) => state.genres);
  const {language} = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getGenresFilms({genresId: +id!, language}))
  }, [id, language])

  return (
    <section className='px-12 py-28'>
      <h3 className='text-3xl text-white p-12'>Our Genre</h3>
      <div className='flex justify-center flex-wrap gap-12'>
        {
          genresFilms.map((film) => <FilmsItem key={film.id} film={film} />)
        }
      </div>
    </section>
  )
}
