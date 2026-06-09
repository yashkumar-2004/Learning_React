import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
const users = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
    intro:
      'Customers who actively use digital banking services and are highly satisfied with their overall experience.',
    tag: 'Satisfied',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661609200928-22408fbd85ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
    intro:
      'People who have limited access to modern banking solutions and require better financial support.',
    tag: 'Underserved',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661777437775-97a30fc4baa0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc2fHx8ZW58MHx8fHx8',
    intro:
      'Users with basic banking facilities who are looking for more advanced financial products.',
    tag: 'Underbanked',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60',
    intro:
      'Young professionals adopting digital payments and online investment platforms.',
    tag: 'Young Professionals',
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60',
    intro:
      'Freelancers and entrepreneurs seeking flexible banking and business solutions.',
    tag: 'Entrepreneurs',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60',
    intro:
      'Tech-savvy customers who prefer fully digital and mobile-first experiences.',
    tag: 'Digital Natives',
  },
];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App