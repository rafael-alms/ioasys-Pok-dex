import { useEffect, useState, useContext } from 'react';
import logo from '../../assets/icons/ioasyslogo.svg';
import * as S from './Header.style';

const Header = (/*{ mode = 'light', user = null }*/) => {
    /*const [currentMode, setCurrentMode] = useState(mode || 'light');*/
    
    return (
        <S.Container>
            <div className="barra"></div>
            <S.Logo>
                <div className="logo">
                    <img src={logo} alt="ioasys" />
                    <p>ioasys pokédex</p>
                </div>
            </S.Logo>
            <S.Switch>
                    <div className="switch_container">
                        <input id="switch-shadow" class="switch switch--shadow" type="checkbox" />
                        <label for="switch-shadow"></label>
                    </div>
                </S.Switch>
        </S.Container>
    )
}
       
export default Header;