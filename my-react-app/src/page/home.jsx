// src/pages/Home.jsx
import destinations from '../data/destination'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: 1rem;
`

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #333;
`

const Description = styled.p`
  font-size: 0.875rem;
  color: #666;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default function Home() {
  return (
    <Grid>
      {destinations.map(dest => (
        <Card key={dest.id}>
          <CardImage src={dest.image} alt={dest.name} />
          <CardContent>
            <Title>{dest.name}</Title>
            <Description>{dest.shortDescription}</Description>
            <StyledLink to={`/detailsPage/${dest.id}`}>View Details →</StyledLink>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}
