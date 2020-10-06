import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 48px;
  color: ${props => props.theme.white};
  margin-bottom: 40px;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const PageSubtitle = styled.h2`
  font-size: 23px;
  line-height: 1.5;
  color: ${props => props.theme.white};
  font-weight: bold;
  margin-bottom: 24px;
`;

export const TitleDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${props => props.theme.lightText};
  margin-bottom: 120px;
`;

export const Job = styled.li`
  list-style: none;
  font-size: 19px;
  line-height: 33px;
  height: 64px;
  color: ${props => props.theme.lightText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #343434;
  border-bottom: 1px solid #343434;
`;

export const Jobs = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 522px 1fr;
  grid-gap: 100px;
  margin-bottom: 140px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 522px;
    justify-content: center;
    grid-gap: 40px;
  }
`;

export const ImageGallery = styled.div`
  margin-bottom: 140px;
  display: grid;
  grid-template-columns: 322px 304px 443px;
  grid-gap: 8;
  justify-content: center;

  section {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: stretch;
  }

  img {
    max-height: 100%;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 322px 304px;

    > img:last-child {
      display: none;
    }
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: 322px;

    > img:nth-child(2) {
      display: none;
    }
  }
`;
