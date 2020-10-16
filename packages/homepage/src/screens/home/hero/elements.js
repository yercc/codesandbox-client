import styled, { keyframes } from 'styled-components';

const dropIn = (offset = 100) => keyframes`
  0% { 
    transform: translateY(${offset}px) translateZ(200px);
    filter: blur(20px);
    opacity: 0;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
  }

  70% {
    filter: blur(0);
    opacity: 1;
    box-shadow: 0;
  }

  100% {
    transform: translateZ(0px);
    filter: blur(0);
    opacity: 1;
    box-shadow: 0;
  }
`;

export const EditorElement = styled.img`
  animation: ${props => dropIn(props.i * 250)} 3s;
  animation-delay: ${props => props.i * 100}ms;
  animation-fill-mode: backwards;

  z-index: ${props => props.i};
`;

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;

  text-align: center;
  overflow: hidden;
  padding: 0 2rem;
  min-height: 700px;

  ${props => props.theme.breakpoints.md} {
    min-height: 110vw;
  }

  ${props => props.theme.breakpoints.sm} {
    min-height: 115vw;
  }
`;

export const StyledEditorLink = styled.a`
  transition: 0.3s ease opacity;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.3 ease all;
  border-radius: 4px;
  font-size: 1.25rem;
  text-decoration: none;

  color: white;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const CountText = styled.div`
  font-size: 1.25rem;
  color: #757575;
  margin-bottom: 1.5rem;
  ${props => props.theme.breakpoints.sm} {
    font-size: 0.875rem;
  }
`;

export const InspiredText = styled.span`
  transition: 0.3s ease color;
  font-size: 1rem;
  color: #757575;
  margin-bottom: 1rem;
  text-decoration: none;

  ${props => props.theme.breakpoints.sm} {
    font-size: 0.875rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 57px;
  font-family: ${props => props.theme.homepage.appleFont};

  color: ${props => props.theme.homepage.white};
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  font-weight: 900;

  ${props => props.theme.breakpoints.md} {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${props => props.theme.homepage.muted};
  margin: 0;
  margin-bottom: 1rem;

  ${props => props.theme.breakpoints.sm} {
    font-size: 0.875rem;
  }
`;

// All for the B variant for A/B test

export const SandboxButtons = styled.section`
  height: auto;
  width: auto;
  margin: 5rem 0;
  transition: all 200ms ease-in;

  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Sandbox = styled.a`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0 0.75rem;
  opacity: 0.4;
  border: none;
  background-color: transparent;
  background-size: cover;

  transition: all 200ms ease-in;

  animation: easeInOutBack 1s cubic-bezier(0, -0.6, 0.12, 2) 1s backwards;

  @keyframes easeInOutBack {
    0% {
      opacity: 0;
      transform: scale(0.01);
    }

    100% {
      opacity: 0.4;
      transform: scale(1);
    }
  }

  :hover {
    cursor: pointer;
    animation-play-state: paused;
    transform: scale(1.2);
    opacity: 1;
  }

  @media screen and (min-width: 576px) {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 2rem;
  }
`;
