import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.destination || !form.date) {
      alert('Please fill all fields')
      return
    }
    navigate('/confirmation', { state: form })
  }

  return (
    <Wrapper>
      <FormCard onSubmit={handleSubmit}>
        <Title>Book Your Trip</Title>

        <Field>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            onChange={handleChange}
          />
        </Field>

        <Field>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </Field>

        <Field>
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            name="destination"
            placeholder="Where are you going?"
            onChange={handleChange}
          />
        </Field>

        <Field>
          <Label htmlFor="date">Travel Date</Label>
          <Input
            id="date"
            type="date"
            name="date"
            onChange={handleChange}
          />
        </Field>

        <Button type="submit">Book Now</Button>
      </FormCard>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  
  background: linear-gradient(135deg, #dbeafe, #f0f4ff);
`

const FormCard = styled.form`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;

`

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 2rem;
`

const Field = styled.div`
  margin-bottom: 1.25rem;
`

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: #f9fafb;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    background-color: white;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: #2563eb;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: #1d4ed8;
  }
`
