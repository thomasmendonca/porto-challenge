import {SearchElement, SearchInput, SearchIcon} from './InputSearch. style'
import  IconSearch  from '../../../assets/iconSearch.png'
export const InputSearch = ()=>{
    return(
        <SearchElement>
            <SearchInput placeholder='Buscar'/>
            <SearchIcon>
                <img src={IconSearch} alt="" />
            </SearchIcon>
        </SearchElement>
    )

}