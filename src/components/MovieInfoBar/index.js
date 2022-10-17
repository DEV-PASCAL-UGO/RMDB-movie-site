import React from 'react';
//Helpers
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar =({ time, budjet, revenue }) => (

    <Wrapper>
        <Content>
            <div className = 'column'>
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className = 'column'>
                <p>Budjet: {convertMoney(budjet)}</p>
            </div>
            <div className= 'column'>
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default MovieInfoBar;