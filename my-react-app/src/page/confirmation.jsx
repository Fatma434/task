import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function BookingConfirmation() {
  const { state } = useLocation()

  if (!state) {
    return (
      <Wrapper>
        <Card>
          <Title>No booking data available.</Title>
        </Card>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Card>
        <SuccessImage
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
        />
        <Title>Booking Confirmed!</Title>
        <Message>Thank you for booking your trip with us.</Message>
        <DetailsWrapper>
          <Detail><strong>Name:</strong> {state.name}</Detail>
          <Detail><strong>Email:</strong> {state.email}</Detail>
          <Detail><strong>Destination:</strong> {state.destination}</Detail>
          <Detail><strong>Date:</strong> {state.date}</Detail>
        </DetailsWrapper>
      </Card>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe, #f0fdf4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const Card = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`

const SuccessImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1d4ed8;
  margin-bottom: 0.5rem;
`

const Message = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`

const DetailsWrapper = styled.div`
  text-align: left;
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
`

const Detail = styled.p`
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.5rem;

  strong {
    color: #111827;
  }
`
