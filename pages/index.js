import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner/index'
import QuizBackground from '../src/components/QuizBackground/index'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Background = styled.div`
  background-image: url(${db.bg});
  flex:1;
  background-size:cover;
  background-position: center;
` 

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;






export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>
                Quiz Beer
              </h1>
            </Widget.Header>
            <Widget.Content>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...</p>
            </Widget.Content>
          </Widget>
          <Widget>
          <Widget.Header>
              <h1>
                Quizes da Galera
              </h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl='https://github.com/DoTTa0'  />
    </QuizBackground>
  )
}
