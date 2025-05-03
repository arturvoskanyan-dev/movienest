import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { getGenresFilms } from '../../features/genres/genresThunk';
import { useParams } from 'react-router-dom';

export default function GenrePage() {
    const {genresFilms} = useAppSelector((state) => state.genres);
    const dispatch = useAppDispatch();
    let {id} = useParams();

    useEffect(() => {
        dispatch(getGenresFilms(id))
    }, [id])

  return (
    <div>
      
    </div>
  )
}
