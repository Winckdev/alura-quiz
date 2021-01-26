import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index.js'
import Footer from '../src/components/Footer/index.js'
import GitHubCorner from '../src/components/GitHubCorner/index.js'
import QuizBackground from '../src/components/QuizBackground/index.js'
import QuizContainer from '../src/components/QuizContainer/index.js'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
` */

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
` */

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>
          </Widget.Header>
          <Widget.Content>
          <h1>lorem ipsum xesque dele dale dolly</h1>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>lorem ipsum xesque dele dale dolly</h1>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/winckdev"/>
    </QuizBackground>
    
  )
}
