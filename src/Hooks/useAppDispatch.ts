import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/store';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
