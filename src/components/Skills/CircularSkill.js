import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const CircularProgress = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(#3b82f6 ${props => props.percent}%, #e0e0e0 0);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const Percent = styled(animated.div)`
    position: absolute;
    font-size: 20px;
    font-weight: bold;
`;

const CircularSkill = ({ name, level }) => {
    const props = useSpring({ percent: level, from: { percent: 0 } });

    return (
        <div>
            <label>{name}</label>
            <CircularProgress percent={level}>
                <Percent>{props.percent.to(val => Math.floor(val))}%</Percent>
            </CircularProgress>
        </div>
    );
};

export default CircularSkill;
