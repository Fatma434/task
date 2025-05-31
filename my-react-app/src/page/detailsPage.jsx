// DestinationDetails.jsx
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import destinations from '../data/destination'

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 24px 0;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`

const Description = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
`

const Location = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  text-align: right;
  margin-top: 1rem;
`

export default function DestinationDetails() {
  const { id } = useParams()
  const [destination, setDestination] = useState(null)

  useEffect(() => {
    const found = destinations.find(d => d.id === parseInt(id))
    setDestination(found)
  }, [id])

  if (!destination) return <Container><Title>Loading...</Title></Container>

  return (
    <Container>
      <Title>{destination.name}</Title>
      <Image src={destination.image} alt={destination.name} />
      <Description>
        {destination.fullDescription || destination.shortDescription}
      </Description>
      <Location>
        <strong>Location:</strong> {destination.location || destination.name}
      </Location>
    </Container>
  )
}
